import React, { useRef, useEffect } from "react";
// import React from "react";
import "./header.css";
// import Image from "next/image";
import logo from "../../images/logo2.png";




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

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
          {/* <Image src="../../images/about.png" width={32} height={32} alt="Picture of the logo" /> */}
          <img src={logo} alt="logo photo" width={200} height={60} />

          
            {/* <h2>CodeBakers</h2> */}
            
            {/* <p>Grow with us</p> */}
          </div>

          {/* {========Navigation ==========} */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    classname="menu__link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============= light mode ================ */}
          <div className="light__mode">
            <span>
            <i class="ri-instagram-line"></i>
            <i class="ri-facebook-line"></i>
            <i class="ri-linkedin-line"></i>
            </span>
          </div>

          <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;