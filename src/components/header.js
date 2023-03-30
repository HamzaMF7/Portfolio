import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

  const [nav, setNav] = useState(false);

  function barMenu() {
    setNav((prevNav) => !prevNav);
  }

  const transition = useCallback(() => {
    setNav(false);
  }, []);
  
  useEffect(() => {
    const linksNav = document.getElementsByClassName("links-nav")[0];
    if (nav && window.innerWidth <= 992) {
      linksNav.style.transform = "translateY(0%)";
    } else if (!nav && window.innerWidth <= 992) {
      linksNav.style.transform = "translateY(-150%)";
    }
  }, [nav]);
  

  useEffect(() => {
    const links = Array.from(document.querySelectorAll(".a-nav"));
    links.forEach(link => link.addEventListener("click", transition));
    return () => {
      links.forEach(link => link.removeEventListener("click", transition));
    };
  }, [transition]);


  return (
    <header>
      <div className="container">
         <Link to="/" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">Hamza Maerof</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        {/* links for desktop  */}
        <div className="links">
          <div className="links-section">
            <ul>
              <li key="about">
                <i className="fa-regular fa-user opacity"></i>
                <Link className="a opacity" to="/">
                  About
                </Link>
              </li>
              <li key="resume">
                <i className="fa-regular fa-file opacity"></i>
                <Link className="a opacity" to="/resume">
                  Resume
                </Link>
              </li>
              <li key="works">
                <i className="fa-solid fa-briefcase opacity"></i>
                <Link className="a opacity" to="/works">
                  Works
                </Link>
              </li>
              <li key="contact">
                <i className="fa-solid fa-address-book opacity"></i>
                <Link className="a opacity" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <div onClick={props.theme} className="sun">
              <i className="fa-solid fa-sun"></i>
            </div>
            <div onClick={barMenu} className="menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
