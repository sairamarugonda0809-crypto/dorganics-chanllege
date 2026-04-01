import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Fish from "../../images/fish.webp";
import Poultry from "../../images/poultry.webp";
import Pork from "../../images/pork.webp";
import Beef from "../../images/beef.webp";
import Lamb from "../../images/lamb.webp";
import Shellfish from "../../images/shellfish.webp";

const MaMeatsPage = () => {
  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useState({
    Meats: false,
    Vegetarian: false,
    Poultry: false,
    Pork: false,
    Beef: false,
    Fish: false,
    Lamb: false,
    Shellfish: false,
  });
  const [errorMessage, setErrorMessage] = useState(false);
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
    waterIntake,
  } = location.state || {};

  console.log("selected meats", selected);

  const images = { Poultry, Pork, Beef, Fish, Lamb, Shellfish };

  const handleCheckboxChange = (name) => {
    setFormData((prevData) => {
      const newState = { ...prevData };

      // Handling "I eat all meats" selection
      if (name === "I eat all meats") {
        newState.Meats = !prevData.Meats;
        newState.Vegetarian = false; // Ensures Vegetarian is disabled when Meats is selected
        // Uncheck all individual meat items
        Object.keys(newState).forEach((key) => {
          if (key !== "Meats" && key !== "Vegetarian") {
            newState[key] = false;
          }
        });
      }
      // Handling "I am Vegetarian" selection
      else if (name === "I am Vegetarian") {
        newState.Meats = false; // Ensures Meats is disabled when Vegetarian is selected
        newState.Vegetarian = !prevData.Vegetarian;
        // Uncheck all individual meat items
        Object.keys(newState).forEach((key) => {
          if (key !== "Meats" && key !== "Vegetarian") {
            newState[key] = false;
          }
        });
      } else {
        newState[name] = !prevData[name];
        // Disable Meats and Vegetarian if any individual option is selected
        newState.Meats = false;
        newState.Vegetarian = false;
      }

      if (errorMessage) setErrorMessage(false);
      return newState;
    });
  };

  const handleSubmit = () => {
    const isAnySelected = Object.values(formData).some((value) => value);

    if (!isAnySelected) {
      setErrorMessage(true);
    } else {
      let selectedMeats = [];

      // If "I eat all meats" is selected, include all meats in selectedMeats
      if (formData.Meats) {
        selectedMeats = [
          "Poultry",
          "Pork",
          "Beef",
          "Fish",
          "Lamb",
          "Shellfish",
        ];
      }
      // If "I am Vegetarian" is selected, no meats should be included
      else if (formData.Vegetarian) {
        selectedMeats = ["I am Vegetarian"];
      } else {
        // Otherwise, include all individual selections
        selectedMeats = Object.keys(formData).filter(
          (key) => formData[key] && key !== "Meats" && key !== "Vegetarian"
        );
      }

      const prevData = JSON.parse(localStorage.getItem("userData"));
      const updatedData = {
        ...prevData,
        selectedMeats: selectedMeats.join(", "),
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("user data", updatedData);
      navigate("/MaResultFirst");
    }
  };

  return (
    <div className="Meats-container">
      <h2>Select meats you like</h2>
      <h5>Select all you want to be included in your plan.</h5>

      <div
        className="Meats-checkbox-container"
        onClick={() => handleCheckboxChange("I eat all meats")}
      >
        <label htmlFor="Meats">I eat all meats</label>
        <input
          type="checkbox"
          id="Meats"
          name="Meats"
          checked={formData.Meats}
          onChange={() => handleCheckboxChange("I eat all meats")}
        />
        <span className="Meats-custom-checkbox">
          {formData.Meats ? "✓" : ""}
        </span>
      </div>

      {Object.keys(images).map((item) => (
        <div
          key={item}
          className="Sub-checkbox-container"
          onClick={() => handleCheckboxChange(item)}
        >
          <label htmlFor={item}>
            <img
              src={images[item]}
              alt={item}
              style={{
                width: "40px",
                height: "40px",
                marginRight: "25px",
                verticalAlign: "middle",
              }}
            />
            {item}
          </label>
          <input
            type="checkbox"
            id={item}
            name={item}
            checked={formData[item]}
            disabled={formData.Meats || formData.Vegetarian}
            onChange={() => handleCheckboxChange(item)}
          />
          <span className="Fish-custom-checkbox">
            {formData[item] ? "✓" : ""}
          </span>
        </div>
      ))}

      <div
        className="Meats-checkbox-container"
        onClick={() => handleCheckboxChange("I am Vegetarian")}
      >
        <label htmlFor="Vegetarian">I am vegetarian</label>
        <input
          type="checkbox"
          id="Vegetarian"
          name="Vegetarian"
          checked={formData.Vegetarian}
          onChange={() => handleCheckboxChange("I am Vegetarian")}
        />
        <span className="Meats-custom-checkbox">
          {formData.Vegetarian ? "✓" : ""}
        </span>
      </div>

      {errorMessage && (
        <div className="option-select">Please select at least one option</div>
      )}

      <button className="Meats-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MaMeatsPage;
