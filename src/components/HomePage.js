import React from "react";
import "../styles/HomePage.css"; // Import CSS for HomePage styling
import Footer from "./Footer"; // Import the Footer component
import homePage from "../images/avac.webp"; // Home page background image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // Hook for navigation

  // Navigate to men's weight loss plan
  const handleMenNavigate = () => {
    const gender = "male"
    localStorage.setItem("userData", JSON.stringify({ gender}));
    console.log("select gener", gender)
    navigate("/MenWeightLoss");
  };

  
  const handleWomenNavigate = () => {
    const gender = "female"
    localStorage.setItem("userData", JSON.stringify({ gender}));
    console.log("select gender",gender)
    navigate("/WeightLossPlan");
  };

  return (
    <div className="page-container">
      <div className="home-section">
        <div className="image-background">
          <img src={homePage} alt="img-home" className="home-img" />

          <div className="text-content">
            <h2 className="headline">
              Start losing weight
              <br />
              within days
            </h2>
            <p className="sub-text">Select the D'organics diet type:</p>

            <div className="button-group">
              <button className="btn btn-women" onClick={handleWomenNavigate}>
                <FontAwesomeIcon
                  icon={faFemale}
                  style={{ marginRight: "40px" }}
                />
                Diet for women
              </button>
              <button className="btn btn-men" onClick={handleMenNavigate}>
                <FontAwesomeIcon
                  icon={faMale}
                  style={{ marginRight: "40px" }}
                />
                Diet for men
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
