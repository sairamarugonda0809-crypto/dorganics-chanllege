import React, { useState } from "react";
import "../styles/GoalPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const GoalPage = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { gender, ageGroup } = location.state || {};

  const options = [
    { id: 1, label: "Lose weight" },
    { id: 2, label: "Get fit" },
    { id: 3, label: "Tone muscles" },
  ];

  const handleSelect = (option) => {
    setSelected(option);
    const prevData = JSON.parse(localStorage.getItem("userData")) || {};
    const updatedData = { ...prevData, goal: option };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    navigate("/BodyTypeSelection");
  };

  return (
    <div className="goal-page-container">
      <h2 className="content">What is your goal?</h2>

      <div className="goal-list">
        {options.map((option) => (
          <button
            key={option.id}
            className={`goal-item ${
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

export default GoalPage;
