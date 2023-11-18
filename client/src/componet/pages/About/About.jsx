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
              <img
                // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                src={photo}
                alt="profile pic"
              />{" "}
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Dedicated MERN Developer with a passion for crafting innovative
                web applications.Experienced in leveraging MongoDB, Express.js,
                React,and Node.js to create dynamic and user-friendly
                solutions.Adept at collaborating with cross-functional teams to
                deliver high-quality projects.Seeking opportunities to
                contribute technical expertise and creativity to a
                forward-thinking organization.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;
