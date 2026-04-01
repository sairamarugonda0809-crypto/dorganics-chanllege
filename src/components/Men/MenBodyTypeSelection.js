import { useNavigate } from "react-router-dom";
import React from "react";
import "../../styles/BodyTypeSelection.css";
import ma1 from "../../images/maskinny.webp";
import ma2 from "../../images/maregular.webp";
import ma3 from "../../images/maextra.webp";

const MenBodyTypeSelection = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const userData = JSON.parse(localStorage.getItem("userData")) || {}; // Retrieve user data from localStorage
  const { gender, ageGroup, goal } = userData; // Destructure from user data
  console.log("User Data: ", userData);

  const handleMaleGoalClick = (option) => {
    const updatedData = { ...userData, bodyType: option }; // Add bodyType to user data
    localStorage.setItem("userData", JSON.stringify(updatedData)); // Save updated data to localStorage
    navigate("/MaBodyTypeChooser"); // Navigate to the next page
  };

  return (
    <div className="fe-container">
      <h1>Choose your body type</h1>

      <ul className="fe-goal-list">
        <li
          className="fe-goal-item"
          onClick={() => handleMaleGoalClick("Skinny")}
        >
          <img src={ma1} alt="Skinny" />
          <span>Skinny</span>
          <span className="fe-arrow">›</span>
        </li>

        <li
          className="fe-goal-item"
          onClick={() => handleMaleGoalClick("Regular")}
        >
          <img src={ma2} alt="Regular" />
          <span>Regular</span>
          <span className="fe-arrow">›</span>
        </li>

        <li
          className="fe-goal-item"
          onClick={() => handleMaleGoalClick("Extra")}
        >
          <img src={ma3} alt="Extra" />
          <span>Extra</span>
          <span className="fe-arrow">›</span>
        </li>
      </ul>
    </div>
  );
};

export default MenBodyTypeSelection;
