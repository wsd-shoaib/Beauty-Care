import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Services from "./Components/Services/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceSingle from "./Components/Services/ServiceSingle";
import WorkHow from "./Components/WorkHow/WorkHow";
import PricingSection from "./Components/PricingSection/PricingSection";
import Testimonials from "./Components/Testimonials/Testimonials";
import BookAppointment from "./Components/BookAppointment/BookAppointment";
import Footer from "./Components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <WorkHow />
              <PricingSection />
              <Testimonials />
              <BookAppointment />
            </>
          }
        />
        <Route path="/service/:category/:title" element={<ServiceSingle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
