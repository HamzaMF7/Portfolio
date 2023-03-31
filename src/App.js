// Import necessary dependencies
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useLocalStorage from "use-local-storage";

// Import animation and style
import "./App.css";
import 'animate.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

// Import components
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Section from "./components/section";

// Import background images
import backgroundImageLight from "./img/back.jpg";
import backgroundImageDark from "./img/back2.jpg";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  // Get current URL location
  const { pathname } = useLocation();

  // Set default dark mode preference based on user's system preferences
  const defaultDarkMode = window.matchMedia("(prefers-color-scheme: light)").matches;

  // Use local storage to store the dark mode preference
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", defaultDarkMode);

  // Set background image and color scheme based on dark mode preference
  useEffect(() => {
    const body = document.querySelector("body");
    const backgroundImage = isDarkMode ? backgroundImageLight : backgroundImageDark;

    body.style.setProperty("--background-image", `url(${backgroundImage})`);
    body.style.setProperty("--bodyBeforeBg", isDarkMode ? "#11111158" : "#243b550f");
  }, [isDarkMode]);

  // Set state to determine whether user is on a mobile device or not
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Update isMobile state when the window is resized
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  // Render the app
  return (
    <div className="app animate__animated animate__fadeIn" data-theme={isDarkMode ? "dark" : "light"}>
      <Header onToggleDarkMode={toggleDarkMode} />
      <main>
        <div className="container">
          {/* Render the links navigation for mobile */}
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
          {/* Render the sidebar on the homepage or on desktop devices */}
          {(pathname === "/" || !isMobile) && <SideBar />}
          <Section />
        </div>
      </main>
    </div>
  );
}

export default App;
