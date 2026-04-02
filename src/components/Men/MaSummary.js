import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { send } from "emailjs-com";
import "../../styles/FeSummary.css";
import scale from "../../images/scale.webp";
import scale2 from "../../images/scale-overweight.webp";
import scale3 from "../../images/scale-normal.webp";
import bodyImage from "../../images/male-obese.webp";
import bodyImage2 from "../../images/male-overweight.webp";
import bodyImage3 from "../../images/male-normal.webp";

const MaSummary = () => {
  const navigate = useNavigate();
  const [bmiData, setBmiData] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  const emailSentRef = useRef(false);

  const prevData = JSON.parse(localStorage.getItem("userData")) || {};


  const {
    gender,
    ageGroup,
    goal,
    bodyType,
    desiredBody,
    exercisePreference,
    dailyRoutine,
    confidenceLog,
    selectedHabits,
    tirednessLevel,
    height,
    currentWeight,
    desiredWeight,
    currentAge,
    sleepDuration,
    waterIntake,
    selectedMeats,
    selectedFoods,
    selectedOccasion,
    eventDate,
    formData,
  } = prevData;

  const { name, email, contact } = formData || {};

  const convertToMeters = (feet, inches) => (feet * 12 + inches) * 0.0254;

  // Redirect to home if no data is available
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/ResultSe");
    }
  }, [navigate]);

  useEffect(() => {

    // 🔴 DEBUG START
    console.log("===== DEBUG START =====");
    console.log("prevData:", prevData);
    console.log("height:", height);
    console.log("currentWeight:", currentWeight);
    console.log("formData:", formData);
    console.log("emailSentRef.current:", emailSentRef.current);
    console.log("name:", name);
    console.log("email:", email);
    console.log("contact:", contact);
    console.log("===== DEBUG END =====");
    // 🔴 DEBUG END
 
    if (
      !prevData ||
      !height ||
      !currentWeight ||
      !formData ||
      emailSentRef.current
    ) {
      console.log("❌ BLOCKED BEFORE EMAIL SEND");
      return;
    }

    console.log("✅ PASSED GUARD - WILL SEND EMAIL");

    const heightInMeters = height?.cm
      ? height.cm / 100
      : convertToMeters(height?.feet || 0, height?.inches || 0);
    const bmi = currentWeight / (heightInMeters * heightInMeters);

    let bmiCategory = "Normal";
    let bodyImg = null;
    let risksMessage = "Good BMI to tone up and get your dream body.";

    if (bmi < 18.5) {
      bmiCategory = "Underweight";
      risksMessage = "Reach a healthy weight to avoid health risks.";
    } else if (bmi < 24.9) {
      bodyImg = bodyImage3;
    } else if (bmi < 29.9) {
      bmiCategory = "Overweight";
      bodyImg = bodyImage2;
      risksMessage = "Increased risk of heart issues and chronic pain.";
    } else {
      bmiCategory = "Obese";
      bodyImg = bodyImage;
      risksMessage = "High risk of heart attack, stroke, and diabetes.";
    }

    setBmiData({ bmiCategory, bmi: bmi.toFixed(1), risksMessage, bodyImg });

    const templateParams = {
      gender: gender || formData?.gender || "N/A",
      user_email: email || "N/A",
      user_name: name || "N/A",
      contact: contact || "N/A",
      bmi: bmi.toFixed(1) || "N/A",
      bmi_category: bmiCategory || "N/A",
      current_weight: currentWeight || "N/A",
      desired_weight: desiredWeight || "N/A",
      height: height?.cm
        ? `${height.cm} cm`
        : `${height?.feet || 0} ft ${height?.inches || 0} in`,
      selected_goal: goal || formData?.goal || "N/A",
      selected_body_type: bodyType || formData?.bodyType || "N/A",
      desired_body_type: desiredBody || formData?.desiredBody || "N/A",
      selected_routine: dailyRoutine || formData?.dailyRoutine || "N/A",
      exercise_preference: exercisePreference || formData?.exercisePreference || "N/A",
      selected_habits: selectedHabits || formData?.selectedHabits || "N/A",
      confidence_log: confidenceLog || formData?.confidenceLog || "N/A",
      tiredness_level: tirednessLevel || formData?.tirednessLevel || "N/A",
      age: currentAge || formData?.currentAge || "N/A",
      sleep_duration: sleepDuration || formData?.sleepDuration || "N/A",
      water_intake: waterIntake || formData?.waterIntake || "N/A",
      selected_meats: Array.isArray(selectedMeats) ? selectedMeats.join(", ") : (selectedMeats || "N/A"),
      selected_foods: Array.isArray(selectedFoods) ? selectedFoods.join(", ") : (selectedFoods || "N/A"),
      selected_occasion: selectedOccasion || formData?.selectedOccasion || "N/A",
      event_date: eventDate || formData?.eventDate || "N/A",
    };

    console.log("📤 templateParams:", templateParams);

    const handleEmailSend = async () => {
      try {
        console.log("🚀 CALLING EMAILJS");
        const response = await send(
          "service_qxfs2ci",
          "template_uxwot6g",
          templateParams,
          "Uh6r7Lar2GwxiYyiA"
        );
        console.log("✅ Email sent!", response);
        emailSentRef.current = true;
        // localStorage.removeItem("userData");
      } catch (error) {
        console.error("❌ Email failed full:", error);
        console.error("❌ status:", error?.status);
        console.error("❌ text:", error?.text);
      }
    };

    handleEmailSend();
  }, []);

  if (!bmiData) return <h2>Loading...</h2>;

  return (
    <div className="FeSummary-wrapper">
      <h2>Your personal summary</h2>

      <div className="Card">
        <div className="bmi-header">
          <h3>Body Mass Index (BMI)</h3>
          <p>{bmiData.bmiCategory}</p>
          <p>BMI: {bmiData.bmi}</p>
        </div>

        <div className="image-container">
          <img
            src={
              bmiData.bmiCategory === "Normal"
                ? scale3
                : bmiData.bmiCategory === "Overweight"
                  ? scale2
                  : scale
            }
            alt="scale"
            className="scale-image"
          />
        </div>

        <div className="bmi-header1">{bmiData.risksMessage}</div>

        <div className="person-details-wrapper">
          {bmiData.bodyImg && (
            <div className="person-image">
              <img src={bmiData.bodyImg} alt="body" />
            </div>
          )}
        </div>
      </div>

      <button
        className="FeSummary-button"
        onClick={() =>
          navigate("/ResultSe", {
            state: {
              currentWeight,
              desiredWeight,
              height,
              email,
              name,
              contact,
            },
          })
        }
      >
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MaSummary; 