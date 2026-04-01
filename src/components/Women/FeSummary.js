import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../../styles/FeSummary.css";
import scale from "../../images/scale.webp";
import scale2 from "../../images/scale-overweight.webp";
import scale3 from "../../images/scale-normal.webp";
import bodyImage from "../../images/feobese.webp";
import bodyImage2 from "../../images/feoverweight.webp";
import bodyImage3 from "../../images/femalenormal.webp";
import Hand from "../../images/lifestyle-icon.webp";
import ExImage from "../../images/exercise-icon.webp";
import FrImage from "../../images/frequency-icon.webp";

const FeSummary = () => {
  const navigate = useNavigate();
  const [bmiData, setBmiData] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const prevData = JSON.parse(localStorage.getItem("userData"));
  const {
    gender,
    ageGroup,
    goal,
    bodyType,
    desiredBody,
    exercisePreference,
    selectedRoutine,
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
    selectedEvent,
    formData,
  } = prevData || {};

  const { name, email, contact } = formData || {};

  // Helper function to convert height from feet and inches to meters
  const convertToMeters = (feet, inches) => {
    const totalInches = feet * 12 + inches; // Convert feet to inches and add remaining inches
    const heightInMeters = totalInches * 0.0254; // Convert inches to meters
    return heightInMeters;
  };

  useEffect(() => {
    if (!height || !currentWeight) {
      return; // If required data is not present, exit early
    }

    let heightInMeters;

    // Check if height is in cm or feet & inches
    if (height.cm) {
      heightInMeters = height.cm / 100; // Convert cm to meters directly
    } else if (height.feet && height.inches !== undefined) {
      heightInMeters = convertToMeters(height.feet, height.inches);
    }

    const weightInKg = currentWeight;

    // Calculate BMI
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let bmiCategory;
    let bodyImg;
    let risksMessage;

    // Determine BMI category and messages
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
      bodyImg = null;
      risksMessage = (
        <h5>
          <span>Healthy BMI: </span>It's important to reach a healthy weight to
          avoid health risks.
        </h5>
      );
    } else if (bmi < 24.9) {
      bmiCategory = "Normal";
      bodyImg = bodyImage3;
      risksMessage = (
        <h5>
          <span>Healthy BMI: </span>Good starting BMI to tone up and get your
          dream body.
        </h5>
      );
    } else if (bmi < 29.9) {
      bmiCategory = "Overweight";
      bodyImg = bodyImage2;
      risksMessage = (
        <h5>
          <span>Risks of unhealthy BMI: </span>High blood pressure, increased
          risk of heart attack, stroke, type 2 diabetes, chronic back and joint
          pain.
        </h5>
      );
    } else {
      bmiCategory = "Obese";
      bodyImg = bodyImage;
      risksMessage = (
        <h5>
          <span>Risks of unhealthy BMI: </span>High blood pressure, increased
          risk of heart attack, stroke, type 2 diabetes, chronic back and joint
          pain.
        </h5>
      );
    }

    setBmiData({
      bmiCategory,
      bmi: bmi.toFixed(1),
      risksMessage,
      bodyImg,
    });
  }, []);

  const handleNextClick = async () => {
    if (isSending) return;
    setIsSending(true);

    const templateParams = {
      gender: gender || "N/A",
      user_email: email || "N/A",
      user_name: name || "N/A",
      contact: contact || "N/A",
      bmi: bmiData?.bmi || "N/A",
      bmi_category: bmiData?.bmiCategory || "N/A",
      current_weight: currentWeight || "N/A",
      desired_weight: desiredWeight || "N/A",
      height: height?.cm
        ? `${height.cm} cm`
        : `${height?.feet || 0} ft ${height?.inches || 0} in`,
      selected_goal: goal || "N/A",
      selected_body_type: bodyType || "N/A",
      desired_body_type: desiredBody || "N/A",
      selected_routine: selectedRoutine || "N/A",
      exercise_preference: exercisePreference || "N/A",
      selected_habits: selectedHabits || "N/A",
      confidence_log: confidenceLog || "N/A",
      tiredness_level: tirednessLevel || "N/A",
      age: currentAge || "N/A",
      sleep_duration: sleepDuration || "N/A",
      water_intake: waterIntake || "N/A",
      selected_meats: selectedMeats || "N/A",
      selected_foods: selectedFoods || "N/A",
      selected_occasion: selectedOccasion || "N/A",
      event_date: selectedEvent || "N/A",
    };

    try {
      await emailjs.send(
        "service_qxfs2ci",
        "template_uxwot6g",
        templateParams,
        { publicKey: "Uh6r7Lar2GwxiYyiA" }
      );
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSending(false);
      const prevData = JSON.parse(localStorage.getItem("userData")) || {};
      const updateData = { ...prevData };
      localStorage.setItem("userData", JSON.stringify(updateData));
      navigate("/ResultSe");
    }
  };

  if (!bmiData) {
    return <h2>Loading...</h2>;
  }
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
          <div className="details-text">
            <div className="detail-item">
              <img src={Hand} alt="lifestyle" className="icon" />
              <p>
                Lifestyle: <span>Change seeker</span>
              </p>
            </div>
            <div className="detail-item">
              <img src={ExImage} alt="exercise" className="icon" />
              <p>
                Exercise: <span>Hard exercise</span>
              </p>
            </div>
            <div className="detail-item">
              <img src={FrImage} alt="frequency" className="icon" />
              <p>
                Workout frequency: <span>High</span>
              </p>
            </div>
          </div>

          <div className="person-image">
            {bmiData.bodyImg && <img src={bmiData.bodyImg} alt="body" />}
          </div>
        </div>
      </div>

      <button
        className="FeSummary-button"
        onClick={handleNextClick}
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Next"}<span>›</span>
      </button>
    </div>
  );
};

export default FeSummary;
