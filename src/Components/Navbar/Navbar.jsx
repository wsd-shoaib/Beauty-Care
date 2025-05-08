import React, { useState } from "react";
import "./Navbar.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [active, setActive] = useState("Home");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleNavClick = (sectionId, navItem) => {
    setActive(navItem);
    setMenu(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="Nav-Container">
        <span className="nav-bar" onClick={toggleMenu}>
          {menu ? <FaTimes /> : <HiBars3BottomRight />}
        </span>
        <a href="#" className="nav-logo">
          Beauty <span className="care">Care</span>
        </a>
        <ul className={menu ? "" : "hidemenu"}>
          {["Home", "About", "Service", "Testimonial", "Pricing"].map(
            (navItem) => (
              <li
                key={navItem}
                className={`mt-3 ${active === navItem ? "active" : ""}`}
                onClick={() => handleNavClick(navItem.toLowerCase(), navItem)}
              >
                <span>{navItem}</span>
              </li>
            )
          )}
        </ul>
        <div>
          <button
            className="contact"
            onClick={() => handleNavClick("contact", "Contact")}
          >
            <a href="#contact">Contact Us</a>
          </button>
          <span className="dark-light-mode ">
            {theme === "dark" ? (
              <MdLightMode onClick={() => setTheme("light")} />
            ) : (
              <MdDarkMode onClick={() => setTheme("dark")} />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
