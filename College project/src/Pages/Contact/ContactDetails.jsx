import React from 'react';
import { Link } from 'react-router-dom';
import '../Detail.css';
 // Make sure image path is correct

const Contact = () => {
  return (
    <div className="detail-container">
      <div className="detail-content">
        <h2>CONTACT DETAIL</h2>
        <P>
Please feel free to contact us if you need any further information. Please let us know if you have any questions.
Kothiwal Institute of Technology & Professional Studies,
Pachokra, Haridwar Road,
Moradabad - 244 001 (U.P.) INDIA
Phone +91-0591-2479700, 2479707, 9897868221
Email: kitps_mbd@kothiwalinstitutetechnology.com </P>
<Link to ="/new page">
<button>View More</button>
</Link>
      </div>
      <div className="detail-image">
        <img src="/images/condetail.jpg" alt="History" />
      </div>
    </div>
  );
};

export default Contact;