import React from "react";
import Logo from "../assets/images/Frame.png";
import Frame10 from "../assets/images/Frame10.png";

function Header() {
  return (
    <header class="header">
      <div class="container header1">
        <div class="header__logo">
          <img src={Logo} alt="Accountancy Cloud" />
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
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
        <div class="header__actions">
          <button class="btn btn--outline">Login</button>
          <button class="btn btn--primary">Talk to an Expert</button>
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" class="menu-toggle" />
      <label for="menu-toggle" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>

      <div class="sidebar">
        <div class="header__logo2">
          <img src={Frame10} alt="Accountancy Cloud" />
        </div>
        <label for="menu-toggle" class="sidebar-close">
          <i class="fas fa-xmark"></i>
        </label>
        <ul class="header__nav-list">
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
        <button class="btn2">Login</button>
        <button class="btn2">Talk to an Expert</button>
      </div>
    </header>
  );
}

export default Header;
