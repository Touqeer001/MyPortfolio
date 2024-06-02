import React from "react";
import photo from "../../../assets/images/PROFILE.png";
import "./About.css";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <>
      <Fade right>
        <div className="about" id="About">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
              <img src={photo} alt="profile pic" />{" "}
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                With 6 months of hands-on experience in full-stack web
                development at DevTown, I specialize in the MERN stack (MongoDB,
                Express.js, React.js, and Node.js). My background includes
                developing and deploying scalable, high-performance web
                applications, addressing real-world challenges with innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;
