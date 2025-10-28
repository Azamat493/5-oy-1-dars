import React from "react";
import Rectangle from "../assets/images/Rectangle.png";

function Hero() {
  return (
    <section class="hero">
      <div class="container hero1">
        <div class="hero__content">
          <h1>Get your finances right</h1>
          <p class="hero__description">
            Get your finances right with Accountancy Cloud. We offer the best
            accounting, R&D credits and CFO services for ambitious businesses
            who want to grow.
          </p>
          <div class="hero__cta">
            <p>Switching to us is simple</p>
            <button class="btn btn--primary">Talk to us</button>
          </div>
        </div>
        <div class="hero__image">
          <img src={Rectangle} alt="Accountancy Cloud dashboard on laptop" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
