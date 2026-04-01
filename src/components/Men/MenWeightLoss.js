import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MenWeightLoss.css";
import "../footer.css";
import agemale1 from "../../images/agemale1.webp";
import agemale2 from "../../images/agemale2.webp";
import agemale3 from "../../images/agemale3.webp";
import agemale4 from "../../images/agemale4.webp";

const MenWeightLoss = () => {
  const navigate = useNavigate();
  const prevData = JSON.parse(localStorage.getItem("userData")) || {};
  const gender = prevData.gender;

  console.log("gender", gender); // Now this should show "Male"

  const handleButtonClick = (ageGroup) => {
    const updatedData = { ...prevData, ageGroup };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    navigate("/MenGoalPage");
  };

  return (
    <div className="men-weight-loss-plan">
      <div className="weight-plan-heading">Weight Loss Plan</div>

      <p className="sub-heading">
        According to your <strong>age</strong> and <strong>BMI</strong>
      </p>
      <p className="quiz-text">
        <strong>1-MINUTE</strong> QUIZ
      </p>

      <div className="age-groups">
        {[
          { age: "18-29", img: agemale1 },
          { age: "30-39", img: agemale2 },
          { age: "40-49", img: agemale3 },
          { age: "50+", img: agemale4 },
        ].map(({ age, img }) => (
          <div className="age-group" key={age}>
            <div className="age-group-img-container">
              <img src={img} alt={age} className="age-group-img" />
            </div>
            <button
              onClick={() => handleButtonClick(age)}
              className="age-button"
            >
              {age}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenWeightLoss;
