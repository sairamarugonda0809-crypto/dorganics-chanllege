import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Event.css"; // Ensure the path is correct
import { FaLock } from "react-icons/fa";

const MaEvent = () => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [errorMessage, setErrorMessage] = useState(false);
  const handleSubmit = () => {
    if (!selectedDate) {
      setErrorMessage(true);
    } else {
      const prevData = JSON.parse(localStorage.getItem("userData"));
      const updatedData = {
        ...prevData,
        eventDate: selectedDate,
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("userdata" , updatedData)
      navigate("/MaResultFirst"); // Pass height here
    }
  };
  const handleSubmitSkip = () => {
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = {
      ...prevData,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("Selected date:", selectedDate);
    navigate("/MaResultFirst"); // Pass height here
  };

  return (
    <div className="Event-container">
      <h2>When is your event?</h2>
      <h5>
        Once we know this, we’ll be able to put together a personalized plan to
        help you get in shape. Your data will not be shared with any third
        parties.
      </h5>
      <div>
        <label htmlFor="event-date" className="Event-label">
          Select date
        </label>
        <input
          type="date"
          id="event-date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="Event-date-picker"
          min={today}
        />
      </div>
      <div className="privacy-info">
        <FaLock className="lock-icon" />
        <span>
          Your data will be processed in accordance with our
          <span
            className="privacy-link"
            onClick={() => navigate("/PrivacyPolicy")}
          >
            {" "}
            Privacy Policy
          </span>
        </span>
        {/* Error message */}
        {errorMessage && (
          <div className="event-option-select">Please select date</div>
        )}
      </div>

      <div>
        <button className="Event-button" onClick={handleSubmit}>
          Next
        </button>
      </div>
      <div>
        <button className="Skip-button" onClick={handleSubmitSkip}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default MaEvent;
