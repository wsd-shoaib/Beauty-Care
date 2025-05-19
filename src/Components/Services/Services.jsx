import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [serviceItem, setServiceItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("/ServicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setServiceItem(data);
        setSelectedCategory(data[0]?.category || "");
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const selectedServices =
    serviceItem.find((cat) => cat.category === selectedCategory)?.services ||
    [];

  return (
    <section className="services-section" id="service">
      <h2 className="services-heading">what can we do togehter!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero fugit
        sequi voluptatum tempore modi minima!
      </p>

      <div className="category-buttons">
        {serviceItem.map((cat, index) => (
          <button
            key={index}
            className={`category-btn ${
              selectedCategory === cat.category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="service-cards">
        {selectedServices.length > 0 ? (
          selectedServices.map((service, idx) => (
            <Link
              key={idx}
              className="service-card"
              to={`/service/${selectedCategory}/${encodeURIComponent(
                service.title
              )}`}
            >
              <img src={service.imgUrl} alt="" className="service-imgUrl" />
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.description}</p>
            </Link>
          ))
        ) : (
          <p>No services found for this category.</p>
        )}
      </div>
    </section>
  );
};

export default Services;
