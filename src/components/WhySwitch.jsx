import React from "react";
import Rectangle2 from "../assets/images/Rectangle2.png";
import Rectangle3 from "../assets/images/Rectangle3.png";
import Rectangle4 from "../assets/images/Rectangle4.png";

function WhySwitch() {
  return (
    <section class="why-switch">
      <div class="container">
        <h2>Why Switch?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <img
              src={Rectangle2}
              alt="Powerful software icon"
            />
            <h3>Powerful software</h3>
            <p>
              Included in our service, each customer gets in-house software to
              access live <a href="#dashboards">financial dashboards</a> and
              real-time management reports.
            </p>
          </div>
          <div class="feature-card">
            <img
              src={Rectangle3}
              alt="Track cashflow icon"
            />
            <h3>Track cashflow</h3>
            <p>
              Stay on top of your working capital, <a href="#taxes">taxes</a>,
              and cashflow, to ensure your business is performing at its best.
            </p>
          </div>
          <div class="feature-card">
            <img
              src={Rectangle4}
              alt="Award winning support icon"
            />
            <h3>Award winning support</h3>
            <p>
              Expect the best from us. Get a dedicated finance team that will
              handle all your accounting, R&D credits and CFO needs.
            </p>
          </div>
        </div>
        <div class="cta-button">
          <button class="btn btn--secondary">Discover what we do</button>
        </div>
      </div>
    </section>
  );
}

export default WhySwitch;
