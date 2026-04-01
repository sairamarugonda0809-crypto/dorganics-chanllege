import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/BodyTypeSelection.css";
import cut from "../../images/malecut.webp";
import bulk from "../../images/malebulk.webp";
import extrabulk from "../../images/maleextrabulk.webp";

const MaBodyTypeChooser = () => {
  const navigate = useNavigate();

  const handleSelection = (type) => {
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = { ...prevData, desiredBody: type };
    
    localStorage.setItem("userData", JSON.stringify(updatedData));
    navigate("/MaAreaImprove");

  };

  return (
    <div className="fe-container">
      <h1>Choose your body You want</h1>
      <ul className="fe-goal-list">
        <li className="fe-goal-item" onClick={() => handleSelection("Cut")}>
          <img src={cut} alt="cut" />
          <span>Cut</span>
          <span className="fe-arrow">›</span>
        </li>
        <li className="fe-goal-item" onClick={() => handleSelection("Bulk")}>
          <img src={bulk} alt="bulk" />
          <span>Bulk</span>
          <span className="fe-arrow">›</span>
        </li>
        <li className="fe-goal-item" onClick={() => handleSelection("Extra Bulk")}>
          <img src={extrabulk} alt="extrabulk" />
          <span>Extra Bulk</span>
          <span className="fe-arrow">›</span>
        </li>
      </ul>
    </div>
  );
};

export default MaBodyTypeChooser;
