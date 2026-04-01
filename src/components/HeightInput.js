import React, { useState } from "react";
import "../../src/styles/HeightInput.css"; // Link to your CSS file
import { useNavigate } from "react-router-dom";

const HeightInput = () => {
  const [unit, setUnit] = useState("ft"); // Manage unit state
  const [feet, setFeet] = useState(""); // Feet value state
  const [inches, setInches] = useState(""); // Inches value state
  const [cm, setCm] = useState(""); // Centimeters value state
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    if (selectedUnit === "ft") {
      setCm(""); // Clear cm when switching to feet
    } else {
      setFeet(""); // Clear feet when switching to cm
      setInches(""); // Clear inches when switching to cm
    }
  };
  const handleFeetChange = (e) => setFeet(e.target.value);
  const handleInchesChange = (e) => setInches(e.target.value);
  const handleCmChange = (e) => setCm(e.target.value);

  const handleNextClick = () => {
    if (unit === "ft") {
      const feetValue = parseFloat(feet);
      const inchesValue = parseFloat(inches);
  
      // Ensure inputs are valid numbers and not empty
      if (
        isNaN(feetValue) ||
        feetValue < 2 ||
        feetValue > 8 ||
        isNaN(inchesValue) ||
        inchesValue < 0 ||
        inchesValue > 12 ||
        feet === "" ||
        inches === ""
      ) {
        setErrorMessage("Please enter a correct height.");
      } else {
        setErrorMessage("");
        const prevData = JSON.parse(localStorage.getItem("userData")) || {}; // Handle missing userData
        const updatedData = {
          ...prevData,
          height: { feet: feetValue, inches: inchesValue },
        };
        localStorage.setItem("userData", JSON.stringify(updatedData));
        console.log("updated data", updatedData);
        navigate("/WeightInput");
      }
    } else if (unit === "cm") {
      const cmValue = parseFloat(cm);
  
      if (isNaN(cmValue) || cmValue <= 89 || cmValue > 245 || cm === "") {
        setErrorMessage("Please enter a correct height.");
      } else {
        setErrorMessage("");
        navigate("/WeightInput", { state: { height: { cm: cmValue } } });
      }
    }
  };
  

  return (
    <div className="height-input-container">
      <h1>What is your height?</h1>
      <div className="unit-buttons-box">
        <div className="unit-buttons-container">
          <button
            className={`unit-button ${unit === "ft" ? "active" : ""}`}
            onClick={() => handleUnitChange("ft")}
          >
            FT
          </button>
          <button
            className={`unit-button ${unit === "cm" ? "active" : ""}`}
            onClick={() => handleUnitChange("cm")}
          >
            CM
          </button>
        </div>
      </div>
      <div className="input-container">
        {unit === "ft" ? (
          <>
            <div className="height-input">
              <input
                type="text"
                placeholder="0"
                value={feet}
                onChange={handleFeetChange}
              />
              <span>ft</span>
            </div>
            <div className="height-input">
              <input
                type="text"
                placeholder="0"
                value={inches}
                onChange={handleInchesChange}
              />
              <span>in</span>
            </div>
          </>
        ) : (
          <div className="height-input">
            <input
              type="text"
              placeholder="0"
              value={cm}
              onChange={handleCmChange}
            />
            <span>cm</span>
          </div>
        )}
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button className="neXt-button" onClick={handleNextClick}>
        Next <span className="arrow-iCon">›</span>
      </button>
    </div>
  );
};

export default HeightInput;
