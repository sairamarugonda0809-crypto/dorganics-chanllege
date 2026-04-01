import React, { useState } from "react";
import "../../src/styles/MeatsPage.css";
import { useNavigate } from "react-router-dom";

const MeatsPage = () => {
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

  const handleCheckboxChange = (name) => {
    setFormData((prevData) => {
      const newState = { ...prevData };

      // Handle "I eat all meats"
      if (name === "I eat all meats") {
        newState.Meats = !prevData.Meats;
        newState.Vegetarian = false;
        newState.Poultry = false;
        newState.Pork = false;
        newState.Beef = false;
        newState.Fish = false;
        newState.Lamb = false;
        newState.Shellfish = false;
      }
      // Handle "I am vegetarian"
      else if (name === "I am vegetarian") {
        newState.Meats = false;
        newState.Vegetarian = !prevData.Vegetarian;
        newState.Poultry = false;
        newState.Pork = false;
        newState.Beef = false;
        newState.Fish = false;
        newState.Lamb = false;
        newState.Shellfish = false;
      } else {
        newState.Meats = false;
        newState.Vegetarian = false;
        newState[name] = !prevData[name];
      }

      return newState;
    });
    setErrorMessage(false); // Reset error message when an option is clicked
  };

  const handleSubmit = () => {
    const isAnySelected = Object.values(formData).some((value) => value);

    if (!isAnySelected) {
      setErrorMessage(true); // Show error if nothing is selected
      return;
    }

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

    const prevData = JSON.parse(localStorage.getItem("userData")) || {};
    const updatedData = {
      ...prevData,
      selectedMeats: selectedMeats.join(","),
    };

    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("user data", updatedData);
    navigate("/ResultFirst");
  };

  return (
    <div className="Meats-container">
      <h2>Select meats you like</h2>
      <h5>Select all you want to be included in your plan.</h5>

      {/* Main Options */}
      <div className="Meats-checkbox-container">
        <label htmlFor="Meats">I eat all meats</label>
        <input
          type="checkbox"
          id="Meats"
          name="Meats"
          checked={formData.Meats}
          onChange={() => handleCheckboxChange("I eat all meats")}
        />
        <span className="Meats-custom-checkbox">{formData.Meats ? "✓" : ""}</span>
      </div>

      {/* Sub-Options */}
      {["Poultry", "Pork", "Beef", "Fish", "Lamb", "Shellfish"].map((item) => (
        <div key={item} className="Sub-checkbox-container">
          <label htmlFor={item}>
            <img
              src={require(`../../src/images/${item.toLowerCase()}.webp`)}
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
            onChange={() => handleCheckboxChange(item)}
          />
          <span className="Fish-custom-checkbox">{formData[item] ? "✓" : ""}</span>
        </div>
      ))}

      {/* Vegetarian Option */}
      <div className="Meats-checkbox-container">
        <label htmlFor="Vegetarian">I am vegetarian</label>
        <input
          type="checkbox"
          id="Vegetarian"
          name="Vegetarian"
          checked={formData.Vegetarian}
          onChange={() => handleCheckboxChange("I am vegetarian")}
        />
        <span className="Meats-custom-checkbox">{formData.Vegetarian ? "✓" : ""}</span>
      </div>

      {/* Error message */}
      {errorMessage && <div className="option-select">Please select an answer</div>}

      <button className="Meats-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MeatsPage;
