import React, { useState } from "react";
import "../../src/styles/DesiredInput.css"; // Ensure this file is linked properly
import { useNavigate } from "react-router-dom";

const DesiredInput = () => {
  const [desiredWeight, setDesiredWeight] = useState("");
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();
  const prevData = JSON.parse(localStorage.getItem("userData"));
  const { currentWeight } = prevData;
  const handleWeightChange = (e) => {
    setDesiredWeight(e.target.value);
    setWarning(""); // Clear warning on input change
  };

  const handleNextClick = () => {
    const desiredWeightValue = parseFloat(desiredWeight);
  
    if (desiredWeight === "") {
      setWarning("Please enter a valid weight.");
    } else if (isNaN(desiredWeightValue)) {
      setWarning("Please enter a valid weight.");
    } else if (desiredWeightValue < 23.58) {
      setWarning("Please enter a correct weight.");
    } else if (desiredWeightValue >= currentWeight) {
      setWarning("Desired weight should be smaller than your current weight.");
    } else if (desiredWeightValue >= 25 && desiredWeightValue <= 49.8) {
      setWarning(
        "Your target weight is below the normal BMI range, which could lead to serious health issues."
      );
    } else {
      setWarning(""); // Clear the warning if the input is valid
      const updatedData = {
        ...prevData,
        desiredWeight: desiredWeightValue,
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("updated data", updatedData);
      navigate("/AgeInput"); // Navigate to the next step
    }
  };
  

  return (
    <div className="Desired-input-container">
      <h1>What is your desired weight?</h1>
      <div className="Desired-input-box">
        <input
          type="text"
          placeholder="0"
          value={desiredWeight}
          onChange={handleWeightChange}
        />
        <span>kg</span>
      </div>
      {warning && <p className="red-message">{warning}</p>}{" "}
      {/* Conditionally render warning */}
      <button className="Desired-button" onClick={handleNextClick}>
        Next <span className="arrow-on">›</span>
      </button>
    </div>
  );
};

export default DesiredInput;
