import React from "react";
import "./PricingSection.css";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const services = [
    {
      title: "Basic Beauty",
      price: "$29",
      features: ["Face Wash", "Threading", "Light Makeup"],
    },
    {
      title: "Premium Glow",
      price: "$49",
      features: ["Facial", "Hair Spa", "Full Makeup"],
    },
    {
      title: "Bridal Special",
      price: "$99",
      features: ["Bridal Makeup", "Hair Styling", "Skin Treatment"],
    },
  ];

  return (
    <div className="pricing-area" id="pricing">
      <h2>Our Beauty Packages</h2>
      <div className="pricing-cards">
        {services.map((service, index) => (
          <div className="price-card" key={index}>
            <h3>{service.title}</h3>
            <h4>{service.price}</h4>
            <ul>
              {service.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <a href="#booknow">
              <button className="book-btn">Get Started</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
