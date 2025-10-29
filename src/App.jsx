import { useState, useEffect } from "react";
import "./App.css";
import imageSrc from "./assets/site-background-plant.jpg";
import logoSrc from "./assets/main-logo.png";
import instagramIcon from "./assets/icons/instagram.png";
import linkedinIcon from "./assets/icons/linkedin.png";
import githubIcon from "./assets/icons/github.png";
import whatsAppIcon from "./assets/icons/whatsapp.png";
import xIcon from "./assets/icons/x.png";

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const date = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const time = currentDateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="header-container">
      <p className="dateandtime">
        {date} {time}
      </p>
    </div>
  );
}

function Body() {
  return (
    <div className="container">
      <div className="container-left">
        <img
          src={imageSrc}
          alt="Rainbow Background"
          className="container-left-image"
        />
      </div>

      <div className="container-right">
        <div className="head-logo">
          <img
            src={logoSrc}
            alt="Afraz Mishak Portfolio Logo"
            className="Afraz-Mishak-head-logo"
          />
        </div>

        <ul className="social-section">
          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/afraz.mishak29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt=""
                className="social-section-icons"
              />
            </a>
          </li>
          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/afraz-mishak-b8092b377/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="" className="social-section-icons" />
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/afrazmishak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="" className="social-section-icons" />
            </a>
          </li>

          {/* WhatsApp */}
          <li>
            <a
              href="https://wa.me/94760732923?text=Hi%20Afraz,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsAppIcon} alt="" className="social-section-icons" />
            </a>
          </li>

          {/* X */}
          <li>
            <a
              href="https://x.com/afrazmishak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIcon} alt="" className="social-section-icons" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p className="footer-name">
      © {new Date().getFullYear()} Afraz Mishak — Web Developer
    </p>
  );
}

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
