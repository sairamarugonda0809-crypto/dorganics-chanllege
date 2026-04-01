import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaBodyConfidenceLog = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const options = [
    { id: 1, label: "Less than a year Ago" },
    { id: 2, label: "1-3 years ago" },
    { id: 3, label: "More than 3 years ago" },
    { id: 4, label: "Never" },
  ];

  const handleSelect = (option) => {
    setSelected(option);
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = { ...prevData, confidenceLog: option };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("Updated userData:", updatedData);
    navigate("/MaExercise");
  };

  return (
    <div className="Routine-container">
      <h1 className="Routine-heading">
        When was the last time you were content with your body weight?
      </h1>
      {/*<p className="routine-subheading"></p>*/}
      <div className="Routine-options">
        {options.map((option) => (
          <button
            key={option.id}
            className={`Routine-button ${
              selected === option.label ? "selected" : ""
            }`}
            onClick={() => handleSelect(option.label)}
          >
            {option.label}
            <span className="Arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MaBodyConfidenceLog;
