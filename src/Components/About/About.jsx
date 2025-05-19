import React, { useState } from "react";
import "./About.css";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { FaTimes } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const handleVideoClose = () => {
    setIsVideoPlaying(false);
  };
  return (
    <div id="about" className="about-area">
      <div className="about-left">
        {!isVideoPlaying ? (
          <div>
            <img src="assets/makup.jpg" alt="" />
            <span className="video-icon" onClick={handleVideoPlay}>
              <SiGoogledisplayandvideo360 className="icon" />
            </span>
          </div>
        ) : null}
      </div>
      {isVideoPlaying && (
        <div className="About-Video-series">
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/8-KcPOuptT0?si=6Qefipxm5vUQp48L"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <span onClick={handleVideoClose}>
            <FaTimes />
          </span>
        </div>
      )}

      <div className="about-right">
        <h1>🌿 About of Beauty Care</h1>
        <p>
          Beauty is not just about appearance — it’s about care, confidence, and
          consistency. Beauty Care is a modern web application dedicated to
          helping people explore, select, and shop premium beauty products with
          ease. Whether you're looking for skincare essentials, hair treatments,
          or daily beauty tips — we provide a clean and user-friendly platform
          that ensures comfort and satisfaction. Our goal is to make beauty
          simple, natural, and accessible for everyone.
        </p>
        <a className="button" href="#booknow">
          Get Started
          <span className="ms-1">
            <FaArrowRightLong />
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
