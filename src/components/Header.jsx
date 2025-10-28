import React from "react";
import Logo from "../assets/images/Frame.png";
import Frame10 from "../assets/images/Frame10.png";

function Header() {
  return (
    <header className="header">
      <div className="container header1">
        <div className="header__logo">
          <img src={Logo} alt="Accountancy Cloud" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#what-we-do">What we do</a>
            </li>
            <li>
              <a href="#who-we-help">Who we help</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <button className="btn btn--outline">Login</button>
          <button className="btn btn--primary">Talk to an Expert</button>
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label for="menu-toggle" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>

      <div className="sidebar">
        <div className="header__logo2">
          <img src={Frame10} alt="Accountancy Cloud" />
        </div>
        <label for="menu-toggle" className="sidebar-close">
          <i className="fas fa-xmark"></i>
        </label>
        <ul className="header__nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="#what-we-do">What we do</a>
          </li>
          <li>
            <a href="#who-we-help">Who we help</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </ul>
        <button className="btn2">Login</button>
        <button className="btn2">Talk to an Expert</button>
      </div>
    </header>
  );
}

export default Header;
