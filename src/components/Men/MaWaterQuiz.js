import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MaWaterQuiz = () => {
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
    sleepDuration,
  } = location.state || {};

  const handleGoalClick = (option) => {
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = {
      ...prevData,
      waterIntake: option,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("data =>", updatedData);
    navigate("/MaMeatsPage");
  };

  return (
    <div className="Water-page-container">
      <div className="Water-content">
        <h2>How much water do you drink daily?</h2>
        <p>We mean clean water, excluding coffee, tea and other drinks</p>
        <ul className="Water-list">
          <li
            className="Water-item"
            onClick={() => handleGoalClick("Only coffee or tea")}
          >
            <span>Only coffee or tea</span>
            <span className="s-arrow">›</span>
          </li>
          <li
            className="Water-item"
            onClick={() => handleGoalClick("Less than 0.5 L")}
          >
            <span>Less than 0.5 L</span>
            <span>Less than 2 glasses</span>
            <span className="s-arrow">›</span>
          </li>
          <li
            className="Water-item"
            onClick={() => handleGoalClick("0.5 L - 1.5 L")}
          >
            <span>0.5 L - 1.5 L</span>
            <span>2 - 6 glasses</span>
            <span className="s-arrow">›</span>
          </li>
          <li
            className="Water-item"
            onClick={() => handleGoalClick("1.5 L - 2.5 L")}
          >
            <span>1.5 L - 2.5 L</span>
            <span>7-10 glasses</span>
            <span className="s-arrow">›</span>
          </li>
          <li
            className="Water-item"
            onClick={() => handleGoalClick("Don't count")}
          >
            <span>Don't count</span>
            <span className="s-arrow">›</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MaWaterQuiz;
