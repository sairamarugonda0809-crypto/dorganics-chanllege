import React from "react";
import { useNavigate } from "react-router-dom";
import Result1 from "../../images/graph.webp"; // Import your graph image

const MaResultFirst = () => {
  const navigate = useNavigate();

  const prevData = JSON.parse(localStorage.getItem("userData"));
  const { currentWeight, desiredWeight, eventDate } = prevData || {};

  const handleSubmit = () => {
    const updatedData = {
      ...prevData,
      eventDate: eventDate,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    navigate("/MaDetailsForm"); // Adjust this path as needed
  };

  return (
    <div className="ResultFirst-container">
      <h2>
        With D'organics diet you will reach your desired weight of{" "}
        {desiredWeight}kg
      </h2>

      <div className="graph-container">
        <img src={Result1} alt="graph" className="graph-image" />
        <div className="weight-label current-weight">{currentWeight} kg</div>
        <div className="weight-label desired-weight">{desiredWeight} kg</div>
      </div>
      <button className="ResultFirst-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MaResultFirst;
