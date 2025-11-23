import React from "react";
import "../styles/CustomerReview.css";

import titleImg from "../assets/Customer.png";
import cardBg from "../assets/Customercard.png";

import stars from "../assets/Stars.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.png";

export default function CustomerReview() {
  const reviews = [
    {
      id: 1,
      img: user1,
      name: "Shelly Russel",
      desc:
      "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"

    },
    {
      id: 2,
      img: user2,
      name: "Lula Rolfson",
      desc:
        "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home..",
    },
    {
      id: 3,
      img: user3,
      name: "Carol Huels",
      desc:
        "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
  ];

  return (
    <section className="cr-section">
      <img src={titleImg} alt="" className="cr-title" />

      <div className="cr-grid">
        {reviews.map((r) => (
          <div className="cr-card" key={r.id}>
            
            <img src={cardBg} alt="" className="cr-bg" />
            <img src={r.img} className="cr-user" alt="" />

            <div className="cr-content">

              <h3 className="cr-name">{r.name}</h3>

              <img src={stars} className="cr-stars" alt="" />

           
              <div className="cr-desc-wrapper">
                <p className="cr-desc">{r.desc}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
