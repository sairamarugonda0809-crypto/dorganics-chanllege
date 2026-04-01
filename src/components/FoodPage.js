import React, { useState } from "react";
import "../../src/styles/FoodPage.css";
import { useNavigate } from "react-router-dom";

const FoodPage = () => {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    Eats: false,
    Onions: false,
    Mushrooms: false,
    Eggs: false,
    Nuts: false,
    Cheese: false,
    Milk: false,
    Avocados: false,
    //Seafood: false,
    Olives: false,
    Capers: false,
    Coconuts: false,
    GoatCheese: false,
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (name) => {
    setData((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
    setFormData((prevData) => {
      const newState = { ...prevData };

      if (name === "I eat all of them") {
        newState.Eats = !prevData.Eats;
        newState.Onions = false;
        newState.Mushrooms = false;
        newState.Eggs = false;
        newState.Nuts = false;
        newState.Cheese = false;
        newState.Milk = false;
        newState.Avocados = false;
        newState.Olives = false;
        newState.Capers = false;
        newState.Coconuts = false;
        newState.GoatCheese = false;
      } else {
        newState.Eats = false; // Reset "Eats" if another item is checked
        newState[name] = !prevData[name];
      }

      // Hide error message if any option is selected
      if (errorMessage) setErrorMessage(false);

      return newState;
    });
  };

  const handleSubmit = () => {
    // Check if at least one option is selected
    const isAnySelected = Object.values(formData).some((value) => value);

    if (!isAnySelected) {
      setErrorMessage(true); // Show error if nothing is selected
    } else {
      let selectedFoods = [];
      // If "I eat all of them" is selected, include all eats in selectedFoods
      if (formData.Eats) {
        selectedFoods = [
          "Onions",
          "Mushrooms",
          "Eggs",
          "Nuts",
          "Cheese",
          "Milk",
          "Avocados",
          "Olives",
          "Capers",
          "Coconuts",
          "GoatCheese",
        ];
      } else {
        // Otherwise, include all individual selections
        selectedFoods = Object.keys(formData).filter(
          (key) => formData[key] && key !== "Eats"
        );
      }
      const prevData = JSON.parse(localStorage.getItem("userData"));
      const updatedData = {
        ...prevData,
        selectedFoods: selectedFoods.join(","),
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("female user",updatedData)
      navigate("/Occasion");
    }
  };

  return (
    <div className="Food-container">
      <h2>Select ingredients you like</h2>
      <h5>Select all you want to be included in your plan.</h5>

      {/* Main Options */}
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

      {/* Sub-Options */}
      {[
        "Onions",
        "Mushrooms",
        "Eggs",
        "Nuts",
        "Cheese",
        "Milk",
        "Avocados",
        "Olives",
        "Capers",
        "Coconuts",
        "GoatCheese",
      ].map((item) => (
        <div
          key={item}
          className="Sub-checkbox-container"
          onClick={() => handleCheckboxChange(item)}
        >
          <label
            htmlFor={item}
            // className={formData[item] ? "strikethrough" : ""}
          >
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

export default FoodPage;
