import React from "react";
import Frame1 from "../assets/images/Frame1.png";
import Frame2 from "../assets/images/Frame2.png";
import Frame3 from "../assets/images/Frame3.png";
import Frame4 from "../assets/images/Frame4.png";
import Frame5 from "../assets/images/Frame5.png";
import Frame6 from "../assets/images/Frame6.png";
import Frame7 from "../assets/images/Frame7.png";
import Frame8 from "../assets/images/Frame8.png";
import Frame9 from "../assets/images/Frame9.png";

function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <div className="clients__text">
          <p>Join 200+ amazing companies</p>
        </div>
        <div className="clients__logos">
          <img src={Frame1} alt="Frizzenti" />
          <img src={Frame2} alt="Very" />
          <img src={Frame3} alt="Feel" />
          <img src={Frame4} alt="Manyone" />
          <img src={Frame5} alt="OLIO" />
          <img src={Frame6} alt="Buffer" />
          <img src={Frame7} alt="beam" />
          <img src={Frame8} alt="Fuel Ventures" />
          <img src={Frame9} alt="CHASER" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
