import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaDetailsForm = () => {
  const prevData = JSON.parse(localStorage.getItem("userData"));

  const { height, currentWeight, desiredWeight } = prevData || {};

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    currentWeight: currentWeight || "",
    desiredWeight: desiredWeight || "",
    height: height || "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...prevData,
      formData: formData,
    };
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log("user data ===>", updatedData);
    navigate("/MaUserSelection");
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

export default MaDetailsForm;
