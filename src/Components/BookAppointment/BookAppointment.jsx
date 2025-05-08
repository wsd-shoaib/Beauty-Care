import React, { useState } from "react";
import "./BookAppointment.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSpa } from "react-icons/fa";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    package: "",
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Show thank you message
    setSubmitted(true);

    // Reset form fields
    setFormData({
      package: "",
      name: "",
      email: "",
      phone: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="book-appointment" id="booknow">
      <h2>Book Your Appointment</h2>

      <div className="appointment-container">
        {/* Left Side - Form */}
        <form className="appointment-form" onSubmit={handleSubmit}>
          <label>
            Select Package:
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="bridal">Bridal Package</option>
              <option value="facial">Facial Treatment</option>
              <option value="hair">Hair Styling</option>
              <option value="makeup">Makeup</option>
            </select>
          </label>

          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Your Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </label>

          <button type="submit">Book Now</button>
          <div className="form-thanks">
            {submitted && (
              <p className="thank-you-message">
                🎉 Thank you for your booking!
              </p>
            )}
          </div>
        </form>

        {/* Right Side - Contact Info */}
        <div className="contact-info" id="contact">
          <h3>Contact Us</h3>
          <p>
            <FaPhoneAlt /> +880 1234 567890
          </p>
          <p>
            <FaEnvelope /> info@beautycare.com
          </p>
          <p>
            <FaMapMarkerAlt /> 123 Gulshan, Dhaka
          </p>
          <p>
            <FaSpa /> Open: 10 AM - 8 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
