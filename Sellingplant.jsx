import React from "react";
import "../styles/Sellingplant.css";

import titleImg from "../assets/Topselling.png";
import cardBG from "../assets/Rectangle14.png";

import plant1 from "../assets/Plant.png";
import plant2 from "../assets/Trendy1.png";
import plant3 from "../assets/trendy3.png";
import plant4 from "../assets/Trendy4.png";
import plant5 from "../assets/Trendy5.png";
import plant6 from "../assets/Trendy6.png";

import rect from "../assets/Rectangle14.png";
import bag from "../assets/bag 3.png";

const plants = [
  { id: 1, img: plant1, name: "Aglaonema plant", desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.", price: "Rs. 300/-" },
  { id: 2, img: plant2, name: "Plantain Lilies", desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,.", price: "Rs. 380/-" },
  { id: 3, img: plant3, name: "Cactus", desc: "It is known for their ability to thrive in arid environments", price: "Rs. 259/-" },
  { id: 4, img: plant4, name: "Swiss Cheese Plant", desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves.", price: "Rs. 400/-" },
  { id: 5, img: plant5, name: "Sansevieria plant", desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature..", price: "Rs. 450/-" },
  { id: 6, img: plant6, name: "Agave plant", desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms..", price: "Rs. 359/-" }
];

export default function Sellingplant() {
  return (
    <section className="ts-section">

      <img src={titleImg} alt="" className="ts-title" />

      <div className="ts-grid">
        {plants.map((p) => (
          <div className="ts-card" key={p.id}>

            <img src={cardBG} alt="" className="ts-bg" />

            <img src={p.img} alt="" className="ts-plant" />

            <div className="ts-content">
              <h3 className="ts-name">{p.name}</h3>
              <p className="ts-desc">{p.desc}</p>

              <div className="ts-footer">
                <span className="ts-price">{p.price}</span>

                

                  <div className="ts-cart">
                    <img src={rect} className="ts-cart-bg" alt="" />
                    <img src={bag} className="ts-cart-bag" alt="" />
                  </div>

                  
                </div>


            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
