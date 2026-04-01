import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/styles/DetailsForm.css";

const DetailsForm = () => {
  const prevData = JSON.parse(localStorage.getItem("userData"));

  // Destructure the received state from location
  const { height, currentWeight, desiredWeight } = prevData || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    currentWeight: currentWeight || "", // Set default values from passed data
    desiredWeight: desiredWeight || "",
    height: height || "",
  });
  
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here, like sending data to an API
  //   console.log("Form Data Submitted:", formData);
  //   const updatedData = {
  //     ...prevData,
  //     formData: formData,
  //   };
  //   localStorage.setItem("userData", JSON.stringify(updatedData));
  //   console.log("female contact", updatedData);
  //   navigate("/FeUserSelection");
  // };

  const handleSubmit = (e) => {
  e.preventDefault();

  const nameRegex = /^[A-Za-z ]{4,}$/; // Name with at least 4 letters
  const contactRegex = /^[0-9]{10}$/; // Exactly 10 digits
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern

  if (!nameRegex.test(formData.name)) {
    alert("Name should be at least 4 alphabetic characters.");
    return;
  }

  if (!contactRegex.test(formData.contact)) {
    alert("Contact number must be exactly 10 digits.");
    return;
  }

  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If all validations pass
  const updatedData = {
    ...prevData,
    formData: formData,
  };
  localStorage.setItem("userData", JSON.stringify(updatedData));
  console.log("female contact", updatedData);
  navigate("/FeUserSelection");
};


  return (
    <div className="box-Container">
      <h4>Personal Details</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text" 
            id="name"
            name="name"
            className="input-with-placeholder"
            placeholder="Enter your name to get your plan"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            className="input-with-placeholder"
            placeholder="Enter your contact number to get your plan"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-with-placeholder"
            placeholder="Enter your email to get your plan"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DetailsForm;
