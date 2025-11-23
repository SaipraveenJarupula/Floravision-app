import React from "react";
import "../styles/Trendingplant1.css";

import bgA from "../assets/Trendy.png";
import titleA from "../assets/Trendy plant.png";
import plantA from "../assets/Trendy1.png";
import rect from "../assets/Rectangle4.png"
import bag from "../assets/bag 3.png"

function Trendingplant1() {
  return (
    <section className="plant1-section">

      <div
        className="plant1-bg"
        style={{ backgroundImage: `url(${bgA})` }}
      ></div>

      <img src={titleA} className="plant1-title" />

      <img src={plantA} className="plant1-img" />

    <div className="plant1-content">
        <h2 className="plant1-heading">For Your Desks Decorations</h2>

        <p className="plant1-desc">
          I recently added a beautiful desk decoration plant to my workspace, <br />
          and it has made such a positive difference!
        </p>

        <div className="plant1-bottom">
          <span className="plant1-price">Rs. 599/-</span>
          </div>

        <div className="plant1-actions">
           <button className="plant1-explore">Explore</button>


          <div className="cart-box">
             <img src={rect} alt="" className="cart-rect" />
           <img src={bag} alt="" className="cart-bag" />
          </div>

         

        </div>

      </div>

    </section>
  );
}

export default Trendingplant1;
