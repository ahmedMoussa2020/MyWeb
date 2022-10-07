import React from "react";
import "./header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },

  {
    path: "#service",
    display: "Service",
  },

  {
    path: "#about",
    display: "About",
  },

  {
    path: "#contact",
    display: "Contact",
  },

  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>CodeBakers</h2>
            {/* <p>Grow with us</p> */}
          </div>

          {/* {========Navigation ==========} */}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item">
                  <a href={item.path} classname="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============= light mode ================ */}
          <div className="light__mode">
            <span>
              <i class="ri-sun-line"></i>Light Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;