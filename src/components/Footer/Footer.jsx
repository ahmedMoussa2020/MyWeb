import React from "react";
import "./footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Documentation",
  },
  {
    path: "#",
    display: "Guides",
  },
];

const quickLinks03 = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#",
    display: "Jobs",
  },
  {
    path: "#blog",
    display: "BBlog",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Digency</h2>
            <p className="description">Grow wirh us</p>
            <p className="small__text description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur, assumenda quas? Incidunt voluptatibus ex fugiat
              delectus odit architecto autem harum!
            </p>
          </div>

          <div className="footer__quick-links">
            <div className="quick__links-title">Solutions</div>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <div className="quick__links-title">Support</div>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <div className="quick__links-title">Company</div>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright {year}. Developed by CodeBakers. All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
