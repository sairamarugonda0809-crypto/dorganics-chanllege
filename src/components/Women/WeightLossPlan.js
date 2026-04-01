import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/WeightLossPlan.css";
import "../footer.css";
import agefemale1 from "../../images/agefemale1.webp";
import agefemale2 from "../../images/agefemale2.webp";
import agefemale3 from "../../images/agefemale3.webp";
import agefemale4 from "../../images/agefemale4.webp";

const WeightLossPlan = () => {
  const navigate = useNavigate();

  const handleButtonClick = (ageGroup) => {
    const prevData = JSON.parse(localStorage.getItem("userData")) || {};
    const updatedData = { ...prevData, ageGroup };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("data", updatedData);
    navigate("/Goalpage");
  };

  return (
    <div className="weight-loss-plan">
      <div className="weight-plan-heading">Weight Loss Plan</div>
      <p className="sub-heading">
        According to your <strong>age</strong> and <strong>BMI</strong>
      </p>
      <p className="quiz-text">
        <strong>1-MINUTE</strong> QUIZ
      </p>

      <div className="age-groups">
        <div className="age-group">
          <div className="age-group-img-container">
            <img src={agefemale1} alt="18-29" className="age-group-img" />
          </div>
          <button
            onClick={() => handleButtonClick("18-29")}
            className="age-button"
          >
            18-29
          </button>
        </div>
        <div className="age-group">
          <div className="age-group-img-container">
            <img src={agefemale2} alt="30-39" className="age-group-img" />
          </div>
          <button
            onClick={() => handleButtonClick("30-39")}
            className="age-button"
          >
            30-39
          </button>
        </div>
        <div className="age-group">
          <div className="age-group-img-container">
            <img src={agefemale3} alt="40-49" className="age-group-img" />
          </div>
          <button
            onClick={() => handleButtonClick("40-49")}
            className="age-button"
          >
            40-49
          </button>
        </div>
        <div className="age-group">
          <div className="age-group-img-container">
            <img src={agefemale4} alt="50+" className="age-group-img" />
          </div>
          <button
            onClick={() => handleButtonClick("50+")}
            className="age-button"
          >
            50+
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeightLossPlan;
