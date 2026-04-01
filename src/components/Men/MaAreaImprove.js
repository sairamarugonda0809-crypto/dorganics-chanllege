import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mamodel from "../../images/malemodel.webp";
import "../../styles/MaAreaImprove.css";
import armsImage from "../../images/arms.webp";
import thighImage from "../../images/thighs.webp";
import glutesImage from "../../images/glutes.webp";
import absImage from "../../images/abs.webp";
import chestImage from "../../images/chest.webp";

const MaAreaImprove = () => {
  const [data, setData] = useState([]);
  const [showImages, setShowImages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { gender, ageGroup, goal, bodyType, desiredBody } = location.state || {};

  const handleBodyPartClick = (area) => {
    setData((prev) =>
      prev.includes(area) ? prev.filter((item) => item !== area) : [...prev, area]
    );
    setShowImages((prev) =>
      prev.includes(area) ? prev.filter((img) => img !== area) : [...prev, area]
    );
  };

  const handleNextClick = () => {
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = { ...prevData, exercisePreference: data.join(", ") };
    console.log("Updated userData:", updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
    navigate("/MaDailyRoutinePage");
  };

  return (
    <div className="area-container">
      <h1>Any areas you’d like to improve?</h1>
      <p>If you're happy with your appearance, then press Next</p>

      <div className="body-image-container">
        <img src={mamodel} alt="Male Model" />

        {showImages.includes("arms") && <img src={armsImage} alt="Arms" className="Arms" />}
        {showImages.includes("chest") && <img src={chestImage} alt="Chest" className="Chest" />}
        {showImages.includes("abs") && <img src={absImage} alt="Abs" className="Abs" />}
        {showImages.includes("glutes") && <img src={glutesImage} alt="Glutes" className="Glute" />}
        {showImages.includes("thighs") && <img src={thighImage} alt="Thighs" className="Thigh" />}

        <div className="body-part-button Chest-button" onClick={() => handleBodyPartClick("chest")}>
          <div className="circle">+</div> Chest
        </div>
        <div className="body-part-button Glutes-button" onClick={() => handleBodyPartClick("glutes")}>
          <div className="circle">+</div> Glutes
        </div>
        <div className="body-part-button Arms-button" onClick={() => handleBodyPartClick("arms")}>
          <div className="circle">+</div> Arms
        </div>
        <div className="body-part-button Abs-button" onClick={() => handleBodyPartClick("abs")}>
          <div className="circle">+</div> Abs
        </div>
        <div className="body-part-button Thighs-button" onClick={() => handleBodyPartClick("thighs")}>
          <div className="circle">+</div> Thighs
        </div>
      </div>

      <button
        disabled={data.length === 0}
        className={data.length === 0 ? "net-button-disabled" : "net-button"}
        onClick={handleNextClick}
      >
        Next <span className="arrow-icon">›</span>
      </button>
    </div>
  );
};

export default MaAreaImprove;
