import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/styles/Event.css"; // Ensure the path is correct
import { FaLock } from "react-icons/fa";

const Event = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    if (!selectedDate) {
      setErrorMessage(true);
    } else {
      const prevData = JSON.parse(localStorage.getItem("userData"));
      const updatedData = {
        ...prevData,
        selectedEvent: selectedDate,
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      console.log("female data", updatedData)
      navigate("/ResultFirst"); // Pass height here
    }
  };
  const handleSkipSubmit = () => {
    const prevData = JSON.parse(localStorage.getItem("userData"));
    const updatedData = {
      ...prevData,
      selectedEvent: selectedDate,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    navigate("/ResultFirst"); // Pass height here
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
        <button className="Skip-button" onClick={handleSkipSubmit}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default Event;
