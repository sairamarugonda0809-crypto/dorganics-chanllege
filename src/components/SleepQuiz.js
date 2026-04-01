import React, { useState, useEffect } from "react";
import "../styles/SleepQuiz.css";
import { useNavigate } from "react-router-dom";

const SleepQuiz = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const options = [
    { id: 1, label: "Less than 5 hours" },
    { id: 2, label: "5-6 hours" },
    { id: 3, label: "7-8 hours" },
    { id: 4, label: "More than 8 hours" },
  ];

  useEffect(() => {
    // Check if there is a previous selection in localStorage
    const prevData = JSON.parse(localStorage.getItem("userData"));
    if (prevData?.sleepDuration) {
      setSelected(prevData.sleepDuration);
    }
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    const prevData = JSON.parse(localStorage.getItem("userData")) || {}; // Fallback in case of no data
    const updatedData = {
      ...prevData,
      sleepDuration: option,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("user data", updatedData);
    navigate("/WaterQuiz"); // Navigate to WaterQuiz page
  };

  return (
    <div className="Sleep-page-container">
      <h1 className="Sleep-content">What is your sleep duration?</h1>

      <div className="Sleep-list">
        {options.map((option) => (
          <button
            key={option.id}
            className={`Sleep-item ${selected === option.label ? "selected" : ""}`}
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

export default SleepQuiz;
