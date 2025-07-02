// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutItems from "./dropdownData/AboutDropData.jsx";
import admissionItems from "./dropdownData/AdmissionDropData.jsx";
import campusItems from "./dropdownData/CampusDropData.jsx";
import departmentItems from "./dropdownData/DepartmentDropData.jsx";
import studentCornerItems from "./dropdownData/StudentCornerDropData.jsx";
import contactItems from "./dropdownData/ContactUsDropData.jsx";
import antiRaggingItems from "./dropdownData/AntiRaggingDropData.jsx";

import PreviewCard from "./PreviewCard";
import "./Navbar.css";
import logo from "../assets/logo.png";
import slider1 from "../assets/slider3.jpg";
import slider2 from "../assets/sliderfair.jpg";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showCovidCard, setShowCovidCard] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const sliderImages = [slider1, slider2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderDropdown = (items) => {
    if (!Array.isArray(items)) return null;
    return (
      <div className="dropdown-preview-container">
        <div className="dropdown-preview">
          {items.map((item, index) => (
            <PreviewCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="navbar">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="top-left">
          <span>kitps_mbd@kothiwalinstituteoftechnology.com</span>
          <span>+91-0591-2479700 / 2479707 / 989786822</span>
        </div>
        <div className="top-right">
          <span>Mon-Sat: 09:00AM - 4:00PM</span>
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.google.com"><i className="fab fa-google"></i></a>
        </div>
        <div className="logo-section">
          <img src={logo} alt="Logo" />
          <div className="logo-text">
            <h1>KOTHIWAL INSTITUTE OF TECHNOLOGY AND PROFESSIONAL STUDIES</h1>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <ul>
          <li
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            ABOUT US
            {activeDropdown === "about" && renderDropdown(aboutItems)}
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("admission")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            ADMISSION
            {activeDropdown === "admission" && renderDropdown(admissionItems)}
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("campus")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            CAMPUS
            {activeDropdown === "campus" && renderDropdown(campusItems)}
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("department")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            DEPARTMENTS
            {activeDropdown === "department" && renderDropdown(departmentItems)}
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("student")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            STUDENT-CORNER
            {activeDropdown === "student" && renderDropdown(studentCornerItems)}
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("contact")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            CONTACT-US
            {activeDropdown === "contact" && renderDropdown(contactItems)}
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("ragging")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            ANTI-RAGGING
            {activeDropdown === "ragging" && renderDropdown(antiRaggingItems)}
          </li>
          <li
            className="nav-item covid-dropdown-wrapper"
            onMouseEnter={() => setShowCovidCard(true)}
            onMouseLeave={() => setShowCovidCard(false)}
          >
            <div className="nav-link">COVID-19</div>
            {showCovidCard && (
              <div className="covid-dropdown">
                <strong>COVID-19 Guidelines</strong>
                <p>
                Dear Students/Parents, as the government announced the nation-wide lockdown, we closed down the College talking a serious note of the impact the spread of the virus would make on the people, especially our students and their families. I request you to keep your wards at home till an official intimation is sent from the College via the College Website along with the date of re-joining. You are advised to ensure that the students revise their courses for the End Semester Examinations.
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Slideshow */}
      <div className="slideshow-container">
        <img
          src={sliderImages[currentImage]}
          alt="Slideshow"
          className="slideshow-image"
        />
      </div>
    </div>
  );
};

export default Navbar;