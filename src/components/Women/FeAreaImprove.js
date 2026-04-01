import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import femodel from "../../images/femalemodel.webp";
import "../../styles/FeAreaImprove.css";
import armsImage from "../../images/arms.webp";
import thighImage from "../../images/thighs.webp";
import glutesImage from "../../images/glutes.webp";
import absImage from "../../images/abs.webp";
import chestImage from "../../images/chest.webp";

const FeAreaImprove = () => {
  const [data, setData] = useState([]);
  const [showImages, setShowImages] = useState([]); // Track multiple body parts
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBodyPartClick = (area) => {
    setData((prev) =>
      prev.includes(area)
        ? prev.filter((item) => item !== area)
        : [...prev, area]
    );
    setShowImages((prev) =>
      prev.includes(area)
        ? prev.filter((part) => part !== area)
        : [...prev, area]
    ); // Toggle body part visibility
  };

  // Function to handle "Next" button click and navigate to DailyRoutinePage
  const handleNextClick = () => {
    const prevData = JSON.parse(localStorage.getItem("userData")) || {};
    const updatedData = { ...prevData, exercisePreference: data.join(",") };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("userdata==>", updatedData)
    navigate("/DailyRoutinePage");
  };

  return (
    <div className="area-container">
      <h1>Any areas you’d like to improve?</h1>
      <p>If you're happy with your appearance, then press Next</p>

      <div className="body-image-container">
        <img src={femodel} alt="Femodel" />

        {showImages.includes("arms") && (
          <img src={armsImage} alt="Arms Improvement" className="arms-image" />
        )}
        {showImages.includes("chest") && (
          <img
            src={chestImage}
            alt="Chest Improvement"
            className="chest-image"
          />
        )}
        {showImages.includes("abs") && (
          <img src={absImage} alt="Abs Improvement" className="abs-image" />
        )}
        {showImages.includes("glutes") && (
          <img
            src={glutesImage}
            alt="Glutes Improvement"
            className="glutes-image"
          />
        )}
        {showImages.includes("thighs") && (
          <img
            src={thighImage}
            alt="Thighs Improvement"
            className="thigh-image"
          />
        )}

        {/* Body part buttons */}
        <div
          className="body-part-button chest-button"
          onClick={() => handleBodyPartClick("chest")}
        >
          <div className="circle">+</div> Chest
        </div>
        <div
          className="body-part-button glutes-button"
          onClick={() => handleBodyPartClick("glutes")}
        >
          <div className="circle">+</div> Glutes
        </div>
        <div
          className="body-part-button arms-button"
          onClick={() => handleBodyPartClick("arms")}
        >
          <div className="circle">+</div> Arms
        </div>
        <div
          className="body-part-button abs-button"
          onClick={() => handleBodyPartClick("abs")}
        >
          <div className="circle">+</div> Abs
        </div>
        <div
          className="body-part-button thighs-button"
          onClick={() => handleBodyPartClick("thighs")}
        >
          <div className="circle">+</div> Thighs
        </div>
      </div>

      {/* Next button */}
      <button
        disabled={data?.length === 0}
        className={
          data.length === 0 ? "Improve-button-disabled" : "Improve-button"
        }
        onClick={handleNextClick}
      >
        Next <span className="arrow-icon">›</span>
      </button>
    </div>
  );
};

export default FeAreaImprove;
