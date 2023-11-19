import React from "react";
import "./Menu.css";
import {
  FcHome,
  FcAbout,
  FcReadingEbook,
  FcBiotech,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";
import photo from "../../assets/images/My profile.jpeg";
import * as Scroll from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic ">
            <Zoom>
              <img src={photo} alt="profile pic" />
            </Zoom>
          </div>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome></FcHome>Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  {" "}
                  <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  {" "}
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  {" "}
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    TechStack
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  {" "}
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Project
                  </Link>
                </div>
              </div>
              {/*  */}
              <div className="nav-item">
                <div className="nav-link">
                  {" "}
                  <Link
                    to="Certification"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Certificates
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  {" "}
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook title="Education" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech title="TechStack" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector title="Project" />
                </Link>
              </div>
            </div>
            {/*Certification  */}
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="Certification"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact title="Certification" />
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
