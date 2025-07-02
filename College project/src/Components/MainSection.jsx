import React from "react";
import "./MainSection.css";

import campuslife from "../assets/campuslife.jpg";
import handsOn from "../assets/hands-on.jpg";
import library from "../assets/library.jpg";
import scholarship from "../assets/scholarship.jpg";
import projects from "../assets/project.jpg";
import placementImg from "../assets/placementImg.jpg"

import { img } from "framer-motion/client";

const sections = [
  {
    title: "PLACEMENT",
    img: placementImg,
    desc: "Student employment is facilitated by the placement cell. It arranges on-campus drives...",
    reverse: false,
  },
  {
    title: "PROJECTS",
    img: projects,
    desc: "An Engineering project is a final year team project students must create...",
    reverse: true,
  },
  {
    title: "LIBRARY",
    img: library,
    desc: "The central library is double story and holds more than 200 students...",
    reverse: false,
  },
  {
    title: "HANDS ON LEARNING",
    img: handsOn,
    desc: "KITPS has a Skills Development Program to enhance student learning...",
    reverse: true,
  },
  {
    title: "CAMPUS LIFE",
    img: campuslife,
    desc: "A vibrant and inclusive environment encouraging student activities and development...",
    reverse: false,
  },
  {
    title: "SCHOLARSHIP",
    img: scholarship,
    desc: "Scholarships are available for economically weaker and meritorious students...",
    reverse: true,
  },
];

const MainSection = () => {
  return (
    <div className="main-section-wrapper">
     
      {sections.map((item, index) => (
        <div
          
          key={index}
          className={`main-section-card ${item.reverse ? "reverse" : ""}`}
        >
          <div className="image-container">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="text-container">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#">View more</a>
          
             <div className="red-bottom-line"></div>
            </div>
            </div>
 ))};
</div>
      
    
  );
};

export default MainSection;