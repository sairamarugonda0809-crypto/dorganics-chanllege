import React, { useState } from "react";
import "../../src/styles/Occasion.css";
import { useNavigate } from "react-router-dom";
import Vacation from "../../src/images/airplane.webp";
import Wedding from "../../src/images/glasses.webp";
import Sporting from "../../src/images/chalice.webp";
import Beach from "../../src/images/palm-tree.webp";
import Reunion from "../../src/images/petard.webp";
import Family from "../../src/images/cake.webp";
import Other from "../../src/images/celebration.webp";
import No from "../../src/images/red-cross.webp";

const Occasion = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const options = [
    { id: 1, label: "Vacation", image: Vacation },
    { id: 2, label: "Wedding", image: Wedding },
    { id: 3, label: "Sporting event", image: Sporting },
    { id: 4, label: "Beach trip", image: Beach },
    { id: 5, label: "Reunion", image: Reunion },
    { id: 6, label: "Family occasion", image: Family },
    { id: 7, label: "Other", image: Other },
    { id: 8, label: "No", image: No },
  ];

  const handleSelect = (option) => {
    setSelected(option);
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = {
      ...prevData,
      selectedOccasion: option,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("female data", updatedData)
    navigate("/Event");
  };

  return (
    <div className="Occasion-Container">
      <h1 className="Occasion-Heading">
        Is there a special occasion you want to lose weight for?
      </h1>
      <p className="Occasion-Subheading">
        You’re more likely to reach your goal if you have something important to
        aim for.
      </p>
      <div className="Occasion-Options">
        {options.map((option) => (
          <button
            key={option.id}
            className={`Occasion-Button ${
              selected === option.label ? "selected" : ""
            }`}
            onClick={() => handleSelect(option.label)}
          >
            <img
              src={option.image}
              alt={option.label}
              style={{
                width: "50px",
                height: "50px",
                marginRight: "-140px",
                verticalAlign: "middle",
              }}
            />
            {option.label}
            <span className="Symbol">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Occasion;
