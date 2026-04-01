import React from "react";
import "../../src/styles/UsersPage.css"; // Import the CSS file for styling
import globeImage from "../../src/images/worldgrey.webp"; // Replace with the path to your image
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleNextClick = () => {
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = { ...prevData };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("female user",updatedData)
    navigate("/HeightInput"); // Navigate to the HeightInput route
  };

  return (
    <div className="challenge-container">
      {/*<header className="challenge-header">
        <h1>NoCarbs Challenge</h1>
      </header>*/}

      <section className="challenge-content">
        {/*<p>Become one of more than</p>*/}
        {/*<h2>10 thousand users</h2>*/}

        <div className="image-container">
          <img src={globeImage} alt="WOrldImage" className="globe-image" />
        </div>

        <button className="next-button" onClick={handleNextClick}>
          Next <span className="arTow-icon">›</span>
        </button>
      </section>
    </div>
  );
};

export default UsersPage;
