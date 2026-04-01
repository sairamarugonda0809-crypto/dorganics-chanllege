import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MaSleepQuiz = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
  } = location.state || {};

  const options = [
    { id: 1, label: "Less than 5 hours" },
    { id: 2, label: "5-6 hours" },
    { id: 3, label: "7-8 hours" },
    { id: 4, label: "More than 8 hours" },
  ];

  const handleSelect = (option) => {
    setSelected(option);
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = {
      ...prevData,
      sleepDuration: option,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("user data ==>",updatedData)
    navigate("/MaWaterQuiz"); // Navigate to WaterQuiz page
  };

  return (
    <div className="Sleep-page-container">
      <h1 className="Sleep-content">What is your sleep duration?</h1>

      <div className="Sleep-list">
        {options.map((option) => (
          <button
            key={option.id}
            className={`Sleep-item ${
              selected === option.label ? "selected" : ""
            }`}
            onClick={() => handleSelect(option.label)}
          >
            {option.label}
            <span className="arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MaSleepQuiz;
