import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/UserSelection.css"; // Make sure to create this file

const FeUserSelection = () => {
  const navigate = useNavigate();
  const prevData = JSON.parse(localStorage.getItem("userData"));
  const {
    gender,
    ageGroup,
    goal,
    bodyType,
    desiredBody,
    exercisePreference,
    selectedRoutine,
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
    selectedFoods,
    selectedOccasion,
    selectedEvent,
    formData,
  } = prevData || {};

  const { name, email, contact } = formData || {};

  const displayData = {
    Name: name,
    Email: email,
    Contact: contact,
    Gender: gender,
    "Age Group": ageGroup,
    Goal: goal,
    "Body Type": bodyType,
    "Desired Body": desiredBody,
    "Exercise Preference": exercisePreference,
    "Daily Routine": selectedRoutine,
    "Confidence Log": confidenceLog,
    "Selected Habits": selectedHabits,
    "Tiredness Level": tirednessLevel,
    Height: height?.cm
      ? `${height.cm} cm`
      : `${height?.feet || 0} ft ${height?.inches || 0} in`,
    "Current Weight": currentWeight,
    "Desired Weight": desiredWeight,
    Age: currentAge,
    "Sleep Duration": sleepDuration,
    "Water Intake": waterIntake,
    "Selected Meats": selectedMeats,
    "Selected Foods": selectedFoods,
    Occasion: selectedOccasion,
    "Event Date": selectedEvent,
  };

  const handleSubmit = () => {
    const updateData = { ...prevData };
    localStorage.setItem("userData", JSON.stringify(updateData));
    navigate("/FeSummary");
  };
  return (
    <div className="user-selection-container">
      <h2 className="title">Please Review Your Details</h2>
      <div className="data-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(displayData).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="button-wrapper">
        <button className="next-button" onClick={handleSubmit}>
          Next <span className="arrow">›</span>
        </button>
      </div>
    </div>
  );
};

export default FeUserSelection;
