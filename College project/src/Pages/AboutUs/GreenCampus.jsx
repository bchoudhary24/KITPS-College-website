import React from 'react';
import '../Detail.css';
// Make sure image path is correct

const GreenCampus = () => {
  return (
    <div className="detail-container">
      <div className="detail-content">
        <h2>History</h2>
        <p>
        BEING ECO-FRIENDLY IS NOT ONLY A SOCIAL RESPONSIBILITY OF THE CORPORATE, BUT ALSO OF EDUCATION INSTITUTES.

The signs of environment consciousness of KITPS campus are easy to spot:

KITPS CAMPUS is a “No Smoking campus”.

Lung spaces are clearly discernable with plenty of green. </p>
      </div>
      <div className="detail-image">
        <img src="/images/menu-greencampus.jpg"alt="GC" />
      </div>
    </div>
  );
};

export default GreenCampus;