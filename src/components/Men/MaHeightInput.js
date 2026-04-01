import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaHeightInput = () => {
  const [unit, setUnit] = useState("ft");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cm, setCm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    if (selectedUnit === "ft") {
      setCm("");
    } else {
      setFeet("");
      setInches("");
    }
  };

  const handleFeetChange = (e) => setFeet(e.target.value);
  const handleInchesChange = (e) => setInches(e.target.value);
  const handleCmChange = (e) => setCm(e.target.value);
  const handleNextClick = () => {
    const prevData = JSON.parse(localStorage.getItem("userData")) || {};
  
    if (unit === "ft") {
      const feetValue = parseFloat(feet);
      const inchesValue = parseFloat(inches) || 0; // Default to 0 if empty
  
      if (
        isNaN(feetValue) ||
        feetValue < 2 ||
        feetValue > 8 ||
        isNaN(inchesValue) ||
        inchesValue < 0 ||
        inchesValue > 12
      ) {
        setErrorMessage("Please enter a correct height.");
      } else {
        setErrorMessage("");
        const updatedData = {
          ...prevData,
          height: { feet: feetValue, inches: inchesValue },
        };
        localStorage.setItem("userData", JSON.stringify(updatedData));
        console.log("user data (ft):", updatedData);
        navigate("/MaWeightInput");
      }
    } else if (unit === "cm") {
      const cmValue = parseFloat(cm);
      if (isNaN(cmValue) || cmValue <= 89 || cmValue > 245) {
        setErrorMessage("Please enter a correct height.");
      } else {
        setErrorMessage("");
        const updatedData = { ...prevData, height: { cm: cmValue } };
        localStorage.setItem("userData", JSON.stringify(updatedData));
        console.log("user data (cm):", updatedData);
        navigate("/MaWeightInput");
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
        Next <span className="arrow-iCon"></span>
      </button>
    </div>
  );
};

export default MaHeightInput;
