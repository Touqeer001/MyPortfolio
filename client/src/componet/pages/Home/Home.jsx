import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../../assets/docs/Touqeer_Ansari_Resume.pdf";
import { useTheme } from "../../context/ThemeContextt.js";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle Theme
  const handleThem = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="Home">
        <div className="theme-btn" onClick={handleThem}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h1>Hi 👋 I'm Touqeer Ansari</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Full Stack Developer !", "MERN Stack  Developer !","Rect Developer !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <Fade bottom big>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=919307333674"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>

              {/* <button className="btn btn-hire">Hire Me</button> */}
              <a className="btn btn-cv" href={Resume} download="Touqeer_Resume.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
