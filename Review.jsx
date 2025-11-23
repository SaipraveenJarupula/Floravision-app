import React from "react";
import "../styles/Review.css";

import reviewBg from "../assets/Review.png";   
import userImg from "../assets/User.png";        

function Review() {
  return (
    <div className="review-wrapper"> 
      <div 
        className="review-card"
        style={{
          backgroundImage: `url(${reviewBg})`
        }}
      >
        <img src={userImg} alt="user" className="review-user-img" />

       
        <p className="review-text">
          I can't express how thrilled I am with my 
          <br/> new natural plants! They bring such a
          <br/> fresh and vibrant energy to my home..
        </p>
      </div>
    </div>
  );
}

export default Review;
