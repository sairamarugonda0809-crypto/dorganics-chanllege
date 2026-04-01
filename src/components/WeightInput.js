import React, { useState } from "react";
import "../styles/WeightInput.css";
import { useNavigate } from "react-router-dom";

const WeightInput = () => {
  const [weight, setWeight] = useState("");
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    setWarning(""); // Clear warning on input change
  };

  const handleNextClick = () => {
    const weightValue = parseFloat(weight);
  
    if (weight === "") {
      setWarning("Please enter a valid weight.");
    } else if (isNaN(weightValue)) {
      setWarning("Please enter a valid weight.");
    } else if (weightValue < 24.9 || weightValue > 300.2) {
      setWarning("Please enter a correct weight.");
    } else {
      setWarning(""); // Clear the warning if input is valid
      const prevData = JSON.parse(localStorage.getItem("userData")) || {}; // Default to an empty object
      const updatedData = {
        ...prevData,
        currentWeight: weightValue,
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("updated data", updatedData);
      navigate("/DesiredInput");
    }
  };
  

  return (
    <div className="weight-input-container">
      <h1>What is your current weight?</h1>
      <div className="weight-input-box">
        <input
          type="text"
          placeholder="0"
          value={weight}
          onChange={handleWeightChange}
        />
        <span>kg</span>
      </div>
      {warning && <p className="WArning-message">{warning}</p>}{" "}
      {/* Conditionally render warning */}
      <button className="forward-button" onClick={handleNextClick}>
        Next <span className="arrow-on">›</span>
      </button>
    </div>
  );
};

export default WeightInput;
