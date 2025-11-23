import React from "react";
import "../styles/Mainplant.css";

import plantImg from "../assets/1.png";
import arrowIcon from "../assets/arrow.png";
import cardBg from "../assets/Rectangle14.png";

function Mainplant() {
  return (
    <div
      className="mainplant-card"
      style={{
        backgroundImage: `url(${cardBg})`
      }}
    >
      <img src={plantImg} alt="Plant" className="mainplant-img" />
      

      <div className="mainplant-content">
        <p className="mainplant-small">Indoor Plant</p>
        <h2 className="mainplant-title">Aglaonema plant</h2>
        <button className="mainplant-button">Buy Now</button>
      </div>

      <img src={arrowIcon} alt="Arrow" className="mainplant-arrow" />

      <div className="mainplant-indicator">
         <span className="indicator-line"></span>
         <span className="indicator-dot"></span>
         <span className="indicator-dot"></span>
      </div>
    </div>
  );
}

export default Mainplant;
