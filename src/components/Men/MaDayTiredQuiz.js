import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const MaDayTiredQuiz = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const options = [
    { id: 1, label: "I usually feel tired all day long" },
    { id: 2, label: "I feel tired before meals" },
    { id: 3, label: "I have a couple of afternoon yawns" },
    { id: 4, label: " I' m a ball of fire all day long " },
  ];

  const handleSelect = (option) => {
    setSelected(option);
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = { ...prevData, tirednessLevel: option };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("user data :", updatedData)
    navigate("/MaUsersPage");
  };

  return (
    <div className="tquiz-Container">
      <h1 className="tquiz-Heading">
        How tired do you typically feel during the day?
      </h1>
      <p className="tquiz-Subheading">
        Our weight loss programs help you keep your energy level steady
        throughout the day.
      </p>
      <div className="routin-options">
        {options.map((option) => (
          <button
            key={option.id}
            className={`tquiz-Button ${
              selected === option.label ? "selected" : ""
            }`}
            onClick={() => handleSelect(option.label)}
          >
            {option.label}
            <span className="tquiz-arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MaDayTiredQuiz;
