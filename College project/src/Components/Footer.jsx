import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram,FaFacebook,FaTwitter,FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-section">
      <h2>Social Media</h2>
      <div className="social-icons">
        
        <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
        <a href="https://Instagram.com" target="_blank"><FaInstagram /></a>
        <a href="https://youtube.com" target="_blank"><FaYoutube /></a>
      
      </div>
    </div>
    <div className="footer-section">
      <h2>Admissions</h2>
      
      <li><a href="Facilities">Facilities</a></li>
      <li><a href="Fees">Fees</a></li>
      <li><a href="Scholarship">Scholarship</a></li>
      <li><a href="Civil Engineering">Civil Engineering</a></li>
      <li><a href="Computer science">Computer Science & Engineering</a></li>
     <li><a href="Electronics & Communictions">Electronics & Communications</a></li>
      <li><a href="Information Technology">Information Technologies</a></li>
      <li><a href="Mechanical Engineering">Mechanical Engineering</a></li>
    
    </div>
    <div className="footer-section quick-links">
      
    <h2>Quick links</h2>
    <li><a href="TheInstitute">The Institute</a></li>
      <li><a href="History">History</a></li>
      <li><a href="Mission&vission">Mission & Vision</a></li>
      <li><a href="Cultural Events">Cultural Events</a></li>
</div>

    <div className="footer-section Contact-Us">
      <h2>ContactUs</h2>
 <li>Kothiwal Institute of Technology & Professional Studie,</li>
<li>Pachokra, Haridwar Road,</li>
<li>Moradabad - 244 001 (U.P.) India</li>
<li>+91-0591-2479700, 2479707, 9897868221</li>
 <li><a href="mailto:kitps_mbd@kothiwalinstitutetechnology.com"> kitps_mbd@kothiwalinstitutetechnology.com</a></li>
<li>Mon - Sat 9.00 AM- 4.00PM</li>
</div>
   
      { /*horizontal line at bottom */}
      <div className="footer-bottom-line">
      © KITPS - 2016-23 - All rights reserved.
      </div>
      </div>
  )}


export default Footer;