import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Onions from "../../images/onions.webp";
import Mushrooms from "../../images/mushrooms.webp";
import Eggs from "../../images/eggs.webp";
import Nuts from "../../images/nuts.webp";
import Cheese from "../../images/cheese.webp";
import Milk from "../../images/milk.webp";
import Avocados from "../../images/avocados.webp";
import Olives from "../../images/olives.webp";
import Capers from "../../images/capers.webp";
import Coconuts from "../../images/coconuts.webp";
import GoatCheese from "../../images/goatcheese.webp";

const MaFoodPage = () => {
  const [selected, setSelected] = useState([]);
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
    selectedMeats,
  } = location.state || {};
  console.log("state", location.state);

  const [formData, setFormData] = useState({
    Eats: false,
    Onions: false,
    Mushrooms: false,
    Eggs: false,
    Nuts: false,
    Cheese: false,
    Milk: false,
    Avocados: false,
    Olives: false,
    Capers: false,
    Coconuts: false,
    GoatCheese: false,
  });

  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const images = {
    Onions,
    Mushrooms,
    Eggs,
    Nuts,
    Cheese,
    Milk,
    Avocados,
    Olives,
    Capers,
    Coconuts,
    GoatCheese,
  };

  const handleCheckboxChange = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
    setFormData((prevData) => {
      const newState = { ...prevData };
      
      if (name === "I eat all of them") {
        newState.Eats = !prevData.Eats;
        Object.keys(images).forEach(item => newState[item] = false); // Uncheck all items
      } else {
        newState.Eats = false; // Uncheck "I eat all of them" if individual items are selected
        newState[name] = !prevData[name];
      }

      if (errorMessage) setErrorMessage(false); // Hide error if any option is selected
      return newState;
    });
  };

  const handleSubmit = () => {
    const isAnySelected = Object.values(formData).some((value) => value);

    if (!isAnySelected) {
      setErrorMessage(true); // Show error if nothing is selected
    } else {
      let selectedFoods = [];
      // If "I eat all of them" is selected, include all items
      if (formData.Eats) {
        selectedFoods = Object.keys(formData).filter(
          (key) => key !== "Eats" && formData[key]
        );
      } else {
        // Otherwise, include individual selected items
        selectedFoods = Object.keys(formData).filter(
          (key) => formData[key] && key !== "Eats"
        );
      }

      const prevData = JSON.parse(localStorage.getItem("userData"));
      const updatedData = {
        ...prevData,
        selectedFoods: selectedFoods.join(", "),
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("userdata ==>", updatedData);
      navigate("/MaOccasion");
    }
  };

  return (
    <div className="Food-container">
      <h2>Select foods you like</h2>
      <h5>Select all you want to be included in your plan.</h5>

      {/* Main Option - "I eat all of them" */}
      <div
        className="Meats-checkbox-container"
        onClick={() => handleCheckboxChange("I eat all of them")}
      >
        <label htmlFor="Eats">I eat all of them</label>
        <input
          type="checkbox"
          id="Eats"
          name="Eats"
          checked={formData.Eats}
          onChange={() => handleCheckboxChange("I eat all of them")}
        />
        <span className="Meats-custom-checkbox">
          {formData.Eats ? "✓" : ""}
        </span>
      </div>

      {/* Sub-options */}
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
            disabled={formData.Eats} // Disable individual options if "I eat all of them" is selected
            onChange={() => handleCheckboxChange(item)}
          />
          <span className="Fish-custom-checkbox">
            {formData[item] ? "✓" : ""}
          </span>
        </div>
      ))}

      {/* Error message */}
      {errorMessage && (
        <div className="option-select">Please select at least one option</div>
      )}

      <button className="Eats-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MaFoodPage;
