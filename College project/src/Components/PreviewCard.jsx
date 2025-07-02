import React from 'react';
import {  useNavigate, Link } from 'react-router-dom';
import './PreviewCard.css';

const PreviewCard = ({ title, description, image,link}) => {
  const navigate = useNavigate();

  const handleClick=()=>{
    console.log("Navigating to:",link);
    navigate(link);
  }
  return (
    <div className="preview-card" 
    onClick={handleClick}
    style={{cursor:"pointer"}} 
    >
       <img src={image} alt={title} 
       className="preview-img" />
    <div className="preview-content">
   <h2>{title}</h2>
   <p>{description}</p>
<span>VIEW MORE</span>
  

      </div>
      </div>
   
  );
};

export default PreviewCard;