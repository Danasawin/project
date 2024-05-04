import React from 'react';
import './small-card.css'; // Import the CSS file

export default function small_card({ img, title }) {
  return (
    <a href="">
      <div className="small-card">
        <img className="img-small-card" src={img.src} alt="" />
        <p className="text-small-card">{title}</p>
      </div>
    </a>
  );
}
