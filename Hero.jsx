import React from "react";
import "../styles/Hero.css";

import heroBg from "../assets/bg-plant.jpg";
import PlayButton from "../assets/PlayButton.png";

function Hero() {
  return (
    <section className="hero">

      <img src={heroBg} className="hero-bg" alt="Hero Background" />

      <div className="hero-content">

        <h1 className="hero-title">Earth's Exhale</h1>

        <p className="hero-subtext">
        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural 
    <br/>environment and its essential role in sustaining life.
        </p>

        <div className="hero-buttons">

          
          <button className="buy-button">Buy Now</button>

          
         <div className="circle-button">
              <img src={PlayButton} className="play" alt="Play" />
         </div>


         
          <span className= "live-text"> Live Demo... </span>
        </div>

      </div>
    </section>
  );
}

export default Hero;