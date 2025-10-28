import React from "react";
import Rectangle from "../assets/images/Rectangle.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero1">
        <div className="hero__content">
          <h1>Get your finances right</h1>
          <p className="hero__description">
            Get your finances right with Accountancy Cloud. We offer the best
            accounting, R&D credits and CFO services for ambitious businesses
            who want to grow.
          </p>
          <div className="hero__cta">
            <p>Switching to us is simple</p>
            <button className="btn btn--primary">Talk to us</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={Rectangle} alt="Accountancy Cloud dashboard on laptop" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
