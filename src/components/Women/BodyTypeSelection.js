import { useNavigate } from "react-router-dom";
import React from "react";
import "../../styles/BodyTypeSelection.css";
import fe1 from "../../images/regular.webp";
import fe2 from "../../images/plump.webp";
import fe3 from "../../images/extra.webp";

const BodyTypeSelection = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleGoalClick = (option) => {
    const prevData = JSON.parse(localStorage.getItem("userData")) || {};
    const updatedData = {
      ...prevData,
      bodyType: option,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("user==>", updatedData);
    navigate("/FeBodyTypeChooser");
  };

  return (
    <div className="fe-container">
      <h1>Choose your body type</h1>

      <ul className="fe-goal-list">
        <li className="fe-goal-item" onClick={() => handleGoalClick("Regular")}>
          <img src={fe1} alt="Regular" />
          <span>Regular</span>
          <span className="fe-arrow">›</span>
        </li>

        <li className="fe-goal-item" onClick={() => handleGoalClick("Plump")}>
          <img src={fe2} alt="Plump" />
          <span>Plump</span>
          <span className="fe-arrow">›</span>
        </li>

        <li className="fe-goal-item" onClick={() => handleGoalClick("Extra")}>
          <img src={fe3} alt="Extra" />
          <span>Extra</span>
          <span className="fe-arrow">›</span>
        </li>
      </ul>
    </div>
  );
};

export default BodyTypeSelection;
