import React, { useState } from "react";
//import '../../src/styles/Checkboxone.css';
import { useNavigate, useLocation } from "react-router-dom";

const MaCheckboxone = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    lateNight: false,
    sweets: false,
    softDrinks: false,
    hardDrinks: false,
    fattySalty: false,
  });

  const [error, setError] = useState(false);
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
    tirednessLevel,
    height,
    currentWeight,
    desiredWeight,
    currentAge,
  } = location.state || {};

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setData((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
    setError(false); // Reset error when any checkbox is clicked
  };

  const handleSubmit = () => {
    const isSelected = Object.values(formData).some((value) => value === true);

    if (!isSelected) {
      setError(true); // Show error if no checkbox is selected
      return;
    }

    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = {
      ...prevData,
      selectedHabits: data.join(", "),
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("data==>", updatedData)
    navigate("/MaSleepquiz");
  };

  return (
    <div className="container">
      <h2>Select all that you tend to do:</h2>

      {[
        { label: "I eat late at night", name: "lateNight" },
        { label: "I can't give up eating sweets", name: "sweets" },
        { label: "I love soft drinks", name: "softDrinks" },
        {
          label: "I consume hard drinks from time to time",
          name: "hardDrinks",
        },
        { label: "I love fatty or salty foods", name: "fattySalty" },
      ].map((item) => (
        <div className="checkbox-container" key={item.name}>
          <label>
            {item.label}
            <input
              type="checkbox"
              name={item.name}
              checked={formData[item.name]}
              onChange={handleCheckboxChange}
            />
            <span className="custom-checkbox"></span>
          </label>
        </div>
      ))}

      {error && <div className="option-select">Please select an answer</div>}

      <button className="onebutton" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MaCheckboxone;
