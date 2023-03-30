import "./App.css";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Section from "./components/section"
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import img1 from "./img/back.jpg";
import img2 from "./img/back2.jpg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


function App() {
  //************************ dark and light mode *********************************
  const defaultDark = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [mode, setMode] = useLocalStorage(
    "mode",
    defaultDark ? "light" : "dark"
  );

  useEffect(() => {
    var body = document.querySelector("body");
    if (mode === "dark") {
      body.style.setProperty("--background-image", `url(${img1})`);
      body.style.setProperty("--bodyBeforeBg", "#11111158");
    } else {
      body.style.setProperty("--background-image", `url(${img2})`);
      body.style.setProperty("--bodyBeforeBg", "#243b550f");
    }
  }, [mode]);

  function theme() {
    const newTheme = mode === "dark" ? "light" : "dark";
    setMode(newTheme);
  }
  //********************************************************************************
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get the current route

  let location = useLocation();
  const currentRoute = location.pathname;
  console.log(location)

  return (
    
      <div className="app" data-theme={mode}>
        <Header theme={theme} />
        <main>
          <div className="container">
            {/* links for mobile  */}
            {/* <div className="links-nav">
            <ul>
              <li>
                <i className="fa-regular fa-user opacity"></i>
                <a className="a-nav opacity" href="/">
                  About
                </a>
              </li>
              <li>
                <i className="fa-regular fa-file opacity"></i>
                <a className="a-nav opacity" href="/resume">
                  Resume
                </a>
              </li>
              <li>
                <i className="fa-solid fa-briefcase opacity"></i>
                <a className="a-nav opacity" href="/works">
                  Works
                </a>
              </li>
              <li>
                <i className="fa-solid fa-address-book opacity"></i>
                <a className="a-nav opacity" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          <div className="links-nav">
              <ul>
                <li>
                  <i className="fa-regular fa-user opacity"></i>
                  <Link className="a-nav opacity" to="/">
                    About
                  </Link>
                </li>
                <li>
                  <i className="fa-regular fa-file opacity"></i>
                  <Link className="a-nav opacity" to="/resume">
                    Resume
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-briefcase opacity"></i>
                  <Link className="a-nav opacity" to="/works">
                    Works
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-address-book opacity"></i>
                  <Link className="a-nav opacity" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {(currentRoute === "/" || !isMobile) && <SideBar />}
            <Section />
          </div>
        </main>
      </div>
  );
}

export default App;



















            