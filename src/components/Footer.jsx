import React from "react";
import Frame10 from "../assets/images/Frame10.png";
import Frame11 from "../assets/images/Frame11.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={Frame10} alt="Accountancy Cloud" />
          <p>Your new finance team</p>
        </div>
        <div className="footer__top">
          <div className="footer__columns">
            <div className="footer__column">
              <h4>How it works</h4>
              <ul>
                <li>
                  <a href="#hassle-free">Hassle Free Switching</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h4>What we do</h4>
              <ul>
                <li>
                  <a href="#finance-teams">Finance Teams</a>
                </li>
                <li>
                  <a href="#tax">Tax</a>
                </li>
                <li>
                  <a href="#rd-tax-credits">R&D Tax Credits</a>
                </li>
                <li>
                  <a href="#platform">A platform for success</a>
                </li>
                <li>
                  <a href="#software-integrations">Software Integrations</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h4>Who we help</h4>
              <ul>
                <li>
                  <a href="#startups">Startups</a>
                </li>
                <li>
                  <a href="#small-business">Small Business</a>
                </li>
                <li>
                  <a href="#medium-business">Medium Business</a>
                </li>
                <li>
                  <a href="#cfo-head-finance">CFO & Head of Finance</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#case-studies">Case Studies</a>
                </li>
                <li>
                  <a href="#blogs">Blogs</a>
                </li>
                <li>
                  <a href="#guides">Guides</a>
                </li>
                <li>
                  <a href="#podcasts">Podcasts</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__contact">
            <h4>Speak to us</h4>
            <p>
              Call <a href="tel:02045308432">020 4530 8432</a>
            </p>
            <p>
              Refer a friend for <strong>£175</strong>
            </p>
            <p>
              <a href="#partner">Partner with us</a>
            </p>
          </div>
        </div>
        <div className="footer_bottom2">
          <div className="footer__legal">
            <p>© Accountancy Cloud 2021</p>
            <a href="#privacy">Privacy Policy & Cookies</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className="footer__acca">
            <img src={Frame11} alt="ACCA" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
