import React from "react";
import "../styles/Best.css";

import titleO2 from "../assets/O2.png";
import rect9 from "../assets/Rectangle9.png";
import plantO2 from "../assets/Plant.png";
import arrowLeft from "../assets/left-arrow.png";
import arrowRight from "../assets/right-arrow.png";

export default function Best() {
  return (
    <section className="o2-section">

      
      <img src={titleO2} alt="Best O2" className="o2-title" />

      
      <div className="o2-card">

        <img src={rect9} alt="" className="o2-bg" />

       
        <img src={plantO2} alt="O2 Plant" className="o2-plant" />

      
        <div className="o2-content">
          <h2 className="o2-heading">
            We Have Small And Best O2 Plants Collection's
          </h2>

          <p className="o2-desc">
           Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
           <br/>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>

          <button className="o2-explore">Explore</button>

         
          <div className="o2-pagination">
            <img src={arrowLeft} alt="" className="o2-arrow" />
            <span className="o2-page">01 / 04</span>
            <img src={arrowRight} alt="" className="o2-arrow" />
          </div>
        </div>
      </div>

     
      <div className="o2-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

    </section>
  );
}
