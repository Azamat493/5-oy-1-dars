import React from "react";
import Rectangle5 from "../assets/images/Rectangle5.png";
import Rectangle6 from "../assets/images/Rectangle6.png";
import Rectangle7 from "../assets/images/Rectangle7.png";

function PlansGrowth() {
  return (
     <section className="plans-growth">
  <div className="container">
    <h2>Plans built for growth</h2>
    <div className="plans-grid">
      <div className="plan-card">
        <img src={Rectangle5} alt="Early stage startup" />
        <h3>Early stage startup</h3>
        <p>
          Need your accounting system set up? Learn financial best practice and prime your business for the next stage of growth. We get you moving quickly with an accounting solution that does what you need.
        </p>
      </div>
      <div className="plan-card">
        <img src={Rectangle6} alt="Scale up" />
        <h3>Scale up</h3>
        <p>
          Spend less time worrying about your finances and more time shaping your company’s future. Get your bookkeeping, R&D credits and CFO problems, solved.
        </p>
      </div>
      <div className="plan-card">
        <img src={Rectangle6} alt="High growth" />
        <h3>High growth</h3>
        <p>
          Gain the financial accuracy, visibility, and real-time analysis you need to make smarter decisions, drive efficiency, and achieve total organizational alignment.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}

export default PlansGrowth;
