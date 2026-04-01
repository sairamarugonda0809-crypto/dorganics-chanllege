import React, { useState } from "react";
//import '../../src/styles/AgeInput.css';  // Ensure this file is linked properly
import { useNavigate } from "react-router-dom";

const MaAgeInput = () => {
  const [age, setAge] = useState("");
  const [warning, setWarning] = useState(""); // State for age input
  const navigate = useNavigate();

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setWarning(""); // Update age state
  };

  const handleNextClick = () => {
    // Navigate to the next page without validation
    const ageValue = parseInt(age); // Convert age to an integer

    if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
      setWarning("Please enter an age between 18 and 100."); // Warning for invalid input
    } else {
      setWarning(""); // Clear the warning if input is valid
      const prevData = JSON.parse(localStorage.getItem("userData"));
      const updatedData = {
        ...prevData,
        currentAge: ageValue,
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("user ==>",updatedData)
      navigate("/MaPeakPerformance"); // Navigate to the next page
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

export default MaAgeInput;
