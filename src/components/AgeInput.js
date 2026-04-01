import React, { useState } from "react";
import "../../src/styles/AgeInput.css"; // Ensure this file is linked properly
import { useNavigate } from "react-router-dom";

const AgeInput = () => {
  const [age, setAge] = useState("");
  const [warning, setWarning] = useState(""); // State for age input
  const navigate = useNavigate();

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setWarning(""); // Update age state
  };

  const handleNextClick = () => {
    const ageValue = parseInt(age);
  
    // Check if the input is numeric
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
      setWarning("Please enter a valid age between 18 and 100.");
    } else {
      setWarning(""); // Clear warning
  
      const prevData = JSON.parse(localStorage.getItem("userData")) || {}; // Ensure prevData exists
      const updatedData = {
        ...prevData,
        currentAge: ageValue,
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("Updated data", updatedData);
      navigate("/PeakPerformance");
    }
  };
  

  return (
    <div className="Age-input-container">
      <h1>How old are you?</h1>
      <div className="Age-input-box">
        <input
          type="text"
          placeholder="0"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      {warning && <p className="waRNing-message">{warning}</p>}
      <button className="Agebutton" onClick={handleNextClick}>
        Next <span className="Age-on">›</span>
      </button>
    </div>
  );
};

export default AgeInput;
