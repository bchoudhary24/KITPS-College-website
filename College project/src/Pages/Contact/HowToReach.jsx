import React from 'react';
import '../Detail.css';
// Make sure image path is correct

const HTR = () => {
  return (
    <div className="detail-container">
      <div className="detail-content">
        <h2>HOW TO REACH</h2>
        <P>
        KITPS is located at about 17 km. from railways / bus-station on Moradabad-Haridwar Road</P>


      </div>
      <div className="detail-image">
        <img src="/images/menu_reachmap.jpg"alt="HTR"/>
      </div>
    </div>
  );
};

export default HTR;