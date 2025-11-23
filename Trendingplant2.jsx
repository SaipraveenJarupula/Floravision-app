import React from "react";
import "../styles/Trendingplant2.css";

import bgA from "../assets/Trendyplant.png";
import plantA from "../assets/Trendy2.png";
import bag from "../assets/bag 3.png"
import rect from "../assets/Rectangle4.png"
function Trendingplant2() {
  return (
    <section className="plant2-section">

      <div
        className="plant2-bg"
        style={{ backgroundImage: `url(${bgA})` }}
      ></div>

     

      <img src={plantA} className="plant2-img" />

    <div className="plant2-content">
        <h2 className="plant2-heading">For Your Desks Decorations</h2>

        <p className="plant2-desc">
          I recently added a beautiful desk decoration plant to my workspace, <br />
          and it has made such a positive difference!
        </p>

        <div className="plant2-bottom">
          <span className="plant2-price">Rs. 599/-</span>
          </div>


      <div className="plant2-actions">
                 <button className="plant2-explore">Explore</button>
      
      
                <div className="cart-box">
                   <img src={rect} alt="" className="cart-rect" />
                 <img src={bag} alt="" className="cart-bag" />
                </div>
      
        </div>
        </div>
      

    </section>
  );
}

export default Trendingplant2;
