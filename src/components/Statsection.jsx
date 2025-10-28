import React from "react";
import Rectangle1 from "../assets/images/Rectangle1.png";

function Statsection() {
  return (
     <section class="stat-section">
  <div class="container stat-section1">
    <div class="stat-section__image">
      <img src={Rectangle1} alt="70% statistic illustration" />
    </div>
    <div class="stat-section__content">
      <h2>The best finance stack for entrepreneurs</h2>
      <p>
        70% of companies switch to us from their DIY or legacy system. Now, get your bookkeeping, tax prep and CFO problems, solved. Complete our <a href="#contact-form">contact form</a>, and find out why 9 out of 10 customers recommend us.
      </p>
    </div>
  </div>
</section>
  );
}

export default Statsection;
