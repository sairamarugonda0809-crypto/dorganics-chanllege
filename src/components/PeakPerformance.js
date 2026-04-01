import React from "react";
import { useNavigate } from "react-router-dom";
import "../../src/styles/PeakPerformance.css";
import girl20 from "../../src/images/info_female_20.webp";
import girl30 from "../../src/images/info_female_30.webp";
import girl40 from "../../src/images/info_female_40.webp";
import girl50 from "../../src/images/info_female_50.webp";
import girl60 from "../../src/images/info_female_60.webp";
import girl70 from "../../src/images/info_female_70.webp";

const PeakPerformance = () => {
  const navigate = useNavigate();

  const prevData = JSON.parse(localStorage.getItem("userData"));
  const { currentWeight, desiredWeight, currentAge } = prevData || {};

  const handleNextClick = () => {
    const updatedData = {
      ...prevData,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("female user",updatedData)
    navigate("/Checkboxone");
  };

  return (
    <div className="PeakPerformance-container">
      {currentAge >= 18 && currentAge <= 29 && (
        <div className="card">
          <div className="Image-container">
            <img src={girl20} alt="girl20Image" className="card-image" />
          </div>
          <h2 className="card-title">Keep It Healthy</h2>
          <p className="card-description">
            Women in Your 20s, take note: Improving your habits to achieve and
            maintain a weight range of {desiredWeight} kg from {currentWeight}{" "}
            kg can speed up your journey toward a healthy, strong body.
          </p>
        </div>
      )}
      {/* Card for Women in 30s*/}
      {currentAge >= 30 && currentAge <= 39 && (
        <div className="card">
          <div className="Image-container">
            <img src={girl30} alt="girl30Image" className="card-image" />
          </div>
          <h2 className="card-title">Maintain Peak Performance</h2>
          <p className="card-description">
            Women in Your 30s, take note: Improving your habits to achieve and
            maintain a weight range of {desiredWeight} kg from {currentWeight}{" "}
            kg can speed up your journey toward a healthy, strong body.
          </p>
        </div>
      )}

      {/* Card for Women in 40s */}
      {currentAge >= 40 && currentAge <= 49 && (
        <div className="card">
          <div className="Image-container">
            <img src={girl40} alt="girl40Image" className="card-image" />
          </div>
          <h2 className="card-title">Energize Your Peak Years</h2>
          <p className="card-description">
            Women in Your 40s, focus on: Tailoring your fitness routine to fit a
            weight range of {desiredWeight} kg from {currentWeight} kg will
            boost your energy levels and overall health.
          </p>
        </div>
      )}
      {/* Card for Women in 50s */}
      {currentAge >= 50 && currentAge <= 59 && (
        <div className="card">
          <div className="Image-container">
            <img src={girl50} alt="girl50Image" className="card-image" />
          </div>
          <h2 className="card-title">Vitality Through Awareness</h2>
          <p className="card-description">
            For Women in Their 50s, understanding and adapting to their body's
            needs especially maintaining a weight between {desiredWeight} kg to{" "}
            {currentWeight} kg is key to long-term health and energy.
          </p>
        </div>
      )}
      {/* Card for Women in 60s*/}
      {currentAge >= 60 && currentAge <= 69 && (
        <div className="card">
          <div className="Image-container">
            <img src={girl60} alt="girl60Image" className="card-image" />
          </div>
          <h2 className="card-title">Vitality Through Awareness</h2>
          <p className="card-description">
            For Women Navigating Their 60s, if you want to achieve and maintain
            a weight between {desiredWeight} kg to {currentWeight}kg , be
            mindful of your body's needs for health, strength, and longevity.
          </p>
        </div>
      )}
      {/* Card for Women in 70s */}
      {currentAge >= 70 && (
        <div className="card">
          <div className="Image-container">
            <img src={girl70} alt="girl70Image" className="card-image" />
          </div>
          <h2 className="card-title">Vitality Through Awareness</h2>
          <p className="card-description">
            For Women Navigating Their 70s, if you want to achieve and maintain
            a weight between {desiredWeight} kg to {currentWeight} kg and,might
            be mindful of your body's needs for health, strength, and longevity.
          </p>
        </div>
      )}
      <button className="Peak-button" onClick={handleNextClick}>
        Next
        <span>›</span>
      </button>
    </div>
  );
};

export default PeakPerformance;
