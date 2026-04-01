import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logoImage from "../images/logo.webp";
import backImage from "../images/backward-arrow.webp";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [borderWidth, setBorderWidth] = useState(
    location.pathname === "/" ? 0 : 50
  );
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setBorderWidth(0);
    } else if (isBack) {
      setBorderWidth((prevWidth) => Math.max(0, prevWidth - 50));
    } else {
      setBorderWidth((prevWidth) => prevWidth + 50);
    }
    setIsBack(false);
  }, [location.pathname]);

  const handleBackClick = () => {
    setIsBack(true);
    navigate(-1); // Go back one step in history
  };

  const navbarClass =
    location.pathname === "/dorganicschallenge"
      ? "navbar no-border"
      : "navbar border";

  return (
    <nav
      className={navbarClass}
      style={{ "--border-width": `${borderWidth}px` }}
    >
      <div className="navbar-container">
        {location.pathname !== "/dorganicschallenge" && (
          <div className="back-icon" onClick={handleBackClick}>
            <img src={backImage} alt="back option" className="back-logo" />
          </div>
        )}
        <a href="https://dorganics.in/" className="logo-img">
          <img src={logoImage} alt="D'organics Logo" className="navbar-logo" />
        </a>
        <a href="https://dorganics.in/">
          <strong>Back to Website</strong>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
