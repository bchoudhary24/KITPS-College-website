import React from 'react';
import '../Detail.css';

// Make sure image path is correct

const PrincipalMessage = () => {
  return (
    <div className="detail-container">
      <div className="detail-content">
        <h2>PRINCIPAL-MESSAGE</h2>
        <p>
         I am enchanted to welcome you to the website of Kothiwal Institute of Technology and Professional Studies, Moradabad.KITPS is a leader in the area of innovative teaching and learning, student and parent relationship and overall growth of students as well as faculties.
        </p>
      </div>
      <div className="detail-image">
        <img src="/images/menu_principal.jpg" alt="princiapl" />
      </div>
    </div>
  );
};

export default PrincipalMessage;