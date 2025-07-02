import React from "react";
import "./NewsEvents.css";
import jyotisir from "../assets/jyotisir.jpg"; // replace with actual image paths
import gallery from "../assets/gallery.jpg";
import covid19 from "../assets/covid19.jpg";


const NewsEventsSection = () => {
  return (
    <div className="news-events-section">
      <h2 className="section-title">NEWS & EVENTS</h2>

      <div className="news-events-grid">
        <div className="news-block">
          <img src={jyotisir} alt="News" className="news-image" />
        </div>

        <div className="gallery-block">
          <div className="gallery-grid">
            <img src={gallery} alt="Gallery 1" />
          
          </div>
         
        </div>

      <div className="covid-block">
  <img
    src={covid19}
    alt="COVID-19 Info"
    className="covid-image"
  />
</div>
      </div>
    </div>
  );
};

export default NewsEventsSection;