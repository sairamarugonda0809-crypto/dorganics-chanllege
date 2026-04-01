import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const MaExercise = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const options = [
    { id: 1, label: "No" },
    { id: 2, label: "No, but I try to stay active" },
    { id: 3, label: "Yes, occasionally" },
    { id: 4, label: "yes, regularly" },
  ];

  const prevData = JSON.parse(localStorage.getItem("userData"));

  const handleSelect = (option) => {
    setSelected(option);
    const updatedData = { ...prevData, exerciseAnswer: option };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("Updated userData:", updatedData);

    navigate("/MaDayTiredQuiz");
  };

  return (
    <div className="routine-Container">
      <h1 className="routine-Heading">Do you enjoy exercising?</h1>
      <p className="routine-Subheading">
        A great way to quicken your results is by working out.
      </p>
      <div className="routine-Options">
        {options.map((option) => (
          <button
            key={option.id}
            className={`routine-Button ${
              selected === option.label ? "selected" : ""
            }`}
            onClick={() => handleSelect(option.label)}
          >
            {option.label}
            <span className="aRrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MaExercise;
