import React from "react";
import Rectangle8 from "../assets/images/Rectangle8.png";


function AcHub() {
  return (
   <section className="ac-hub">
  <div className="container">
    <div className="ac-hub__content">
      <h2>The AC Hub</h2>
      <p>
        Explore our dedicated online resources. We’ve got the tips, tricks and online accounting know-how for business success.
      </p>
      <button className="btn btn--secondary">View Hub</button>
    </div>
    <div className="ac-hub__image">
      <img src={Rectangle8} alt="AC Hub resources illustration: documents, video, audio" />
    </div>
  </div>
</section>
  );
}

export default AcHub;
