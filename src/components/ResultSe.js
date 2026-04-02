import React, { useState, useEffect, useRef } from "react"; // Added useEffect and useRef
	import { useLocation, useNavigate } from "react-router-dom";
	import axios from "axios";
	import { send } from "emailjs-com"; // Added emailjs-com import
	import Result1 from "../../src/images/graph.webp";
	import "../../src/styles/ResultSe.css";
	import "normalize.css";

	const ResultSe = () => {
	  const location = useLocation();
	  const navigate = useNavigate();
	  const emailSentRef = useRef(false); // Added useRef to prevent duplicate emails

	  // Retrieve data from location.state
const userData = JSON.parse(localStorage.getItem("userData")) || {};

const {
  name = "",
  contact = "",
  email = "",
  currentWeight = "",
  height = "",
  desiredWeight = "",
} = userData.formData || {};

// ✅ ADD THIS (full access to all other fields)
const {
  gender = "",
  ageGroup = "",
  goal = "",
  bodyType = "",
  desiredBody = "",
  exercisePreference = "",
  dailyRoutine = "",
  confidenceLog = "",
  selectedHabits = "",
  tirednessLevel = "",
  currentAge = "",
  sleepDuration = "",
  waterIntake = "",
  selectedMeats = [],
  selectedFoods = [],
  selectedOccasion = "",
  eventDate = "",
} = userData;

	  // Added BMI calculation helper (previously in MaSummary)
	  const convertToMeters = (feet, inches) => (feet * 12 + inches) * 0.0254;

	  // Added useEffect to handle the logic from the skipped screens
	  useEffect(() => {
	    if (emailSentRef.current || !email || !name) return;

	    const heightInMeters = height?.cm
	      ? height.cm / 100
	      : convertToMeters(height?.feet || 0, height?.inches || 0);
	    
	    const bmiValue = (currentWeight && heightInMeters) 
	      ? (currentWeight / (heightInMeters * heightInMeters)).toFixed(1) 
	      : "N/A";

	    let bmiCategory = "Normal";
	    if (bmiValue !== "N/A") {
	      const bmiNum = parseFloat(bmiValue);
	      if (bmiNum < 18.5) bmiCategory = "Underweight";
	      else if (bmiNum < 24.9) bmiCategory = "Normal";
	      else if (bmiNum < 29.9) bmiCategory = "Overweight";
	      else bmiCategory = "Obese";
	    }

const templateParams = {
  user_name: name,
  user_email: email,
  contact: contact,
  bmi: bmiValue,
  bmi_category: bmiCategory,
  current_weight: currentWeight,
  desired_weight: desiredWeight,
  height: height?.cm ? `${height.cm} cm` : `${height?.feet} ft ${height?.inches} in`,

  gender: gender || "N/A",

  // ✅ MATCH TEMPLATE EXACTLY
  selected_goal: goal || "N/A",
  selected_body_type: bodyType || "N/A",
  desired_body_type: desiredBody || "N/A",
  selected_routine: dailyRoutine || "N/A",

  exercise_preference: exercisePreference || "N/A",
  selected_habits: selectedHabits || "N/A",
  confidence_log: confidenceLog || "N/A",
  tiredness_level: tirednessLevel || "N/A",

  age: currentAge || ageGroup || "N/A",
  sleep_duration: sleepDuration || "N/A",
  water_intake: waterIntake || "N/A",

  selected_meats: Array.isArray(selectedMeats)
    ? selectedMeats.join(", ")
    : selectedMeats || "N/A",

  selected_foods: Array.isArray(selectedFoods) && selectedFoods.length > 0
  ? selectedFoods.join(", ")
  : (userData?.formData?.selectedFoods?.join(", ") || "N/A"),
  selected_occasion: selectedOccasion || "N/A",
  event_date: eventDate || "N/A",
};	    const handleEmailSend = async () => {
	      try {
	        await send("service_qxfs2ci", "template_uxwot6g", templateParams, "Uh6r7Lar2GwxiYyiA");
	        emailSentRef.current = true;
	        console.log("✅ Email sent automatically on results load");
	      } catch (error) {
	        console.error("❌ Email failed:", error);
	      }
	    };

	    handleEmailSend();
	  }, [name, email, height, currentWeight, userData]);


	  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
	  const [loading, setLoading] = useState(false);

	  const [plans, setPlans] = useState([
		{
		  id: "plan6",
		  duration: "One time correction plan",
		  priceOriginal: "₹1199",
		  priceDiscounted: "₹999",
		  save: "SAVE -75%",
		  active: true,
		},
		{
		  id: "plan4",
		  duration: "Monthly Nutrition Plan",
		  priceOriginal: "₹8,000",
		  priceDiscounted: "₹6,000",
		  active: false,
		},
		{
		  id: "plan8",
		  duration: "Three Month Nutrition Plan",
		  priceOriginal: "₹20,000",
		  priceDiscounted: "₹15,000",
		  active: false,
		},
	  ]);

	  const handlePayment = async () => {
		console.log("Initiating payment process...");

		if (!name || !contact || !email) {
		  alert("Please fill in all required fields (Name, Contact, Email).");
		  return;
		}

		setLoading(true);
		try {
		  const selectedPlan = plans.find((plan) => plan.active);
		  if (!selectedPlan) {
			alert("Please select a plan to proceed.");
			return;
		  }

		  const paymentData = {
			transactionId: `TX_${Date.now()}`,
			MUID: email.split("@")[0] || "user",
			name,
			amount: parseInt(selectedPlan.priceDiscounted.replace(/[₹,]/g, "")),
			number: contact,
			email,
			subscriptionDetails: `${selectedPlan.duration} - ${selectedPlan.priceDiscounted}`,
		  };

		  console.log("Payment payload:", paymentData);

		  const response = await axios.post(
			"https://54n24jytpd.execute-api.ap-south-1.amazonaws.com/prod/order",
			paymentData
		  );

		  console.log("Payment API response:", response);

		  if (
			response.data.success &&
			response.data.data?.instrumentResponse?.redirectInfo?.url
		  ) {
			window.location.href =
			  response.data.data.instrumentResponse.redirectInfo.url;
		  } else {
			throw new Error(response.data.message || "Payment initiation failed.");
		  }
		} catch (error) {
		  console.error("Payment error:", error);
		  alert("Payment initiation failed. Please try again later.");
		} finally {
		  setLoading(false);
		}
	  };

	  const selectPlan = (selectedId) => {
		setPlans(
		  plans.map((plan) => ({
			...plan,
			active: plan.id === selectedId,
		  }))
		);
	  };

	  return (
		<div className="result-se-container">
		  <h2>
			With D'Organics Weight loss plan, reduce to {desiredWeight}kg and make a
			lifelong impact!
		  </h2>

		  <div className="graph-container">
			<img src={Result1} alt="graph" className="graph-image" />
			<div className="weight-label current-weight">
			  Your weight: {currentWeight}kg
			</div>
			<div className="weight-label desired-weight">
			  Desired weight: {desiredWeight}kg
			</div>
		  </div>

		  <div className="plan-container" style={{ marginTop: "-120px"  } } >
			<div className="plan-header">Consultation Packages!</div>
			{plans.map((plan) => (
			  <div
				key={plan.id}
				className={`plan-option ${plan.active ? "active" : ""}`}
				onClick={() => selectPlan(plan.id)}
			  >
				{plan.save && <div className="save-tag">{plan.save}</div>}
				<div className="radio-container">
				  <input
					type="radio"
					name="plan"
					checked={plan.active}
					onChange={() => selectPlan(plan.id)}
					readOnly
				  />
				</div>
				<div className="plan-details">
				  <div className="plan-heading">{plan.duration}</div>
				  <div className="plan-discount">{plan.priceOriginal}</div>
				  <div className="plan-price">{plan.priceDiscounted}</div>
				</div>
			  </div>
			))}
	  
			<button
			  className="get-plan-button"
			  onClick={handlePayment}
			  disabled={loading}
			  style={{ cursor: loading ? "not-allowed" : "pointer" }}
			>
			  {loading ? "Processing..." : "Get my plan"}
			</button>
		  </div>
		</div>
	  );
	};

	export default ResultSe;