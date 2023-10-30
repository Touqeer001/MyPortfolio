import React from "react";
import Image from "../../../assets/images/Blog pic.jpg";
import Download from "../../../assets/images/e-commerce pic.avif";
import Wheather from "../../../assets/images/wether.jpg";
import "./Project.css";
import Fade from "react-reveal/Fade";
const Project = () => {
  return (
    <>
      <Fade right>
        <div className="container project " id="project">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Top Recent Project
          </h2>
          <hr></hr>
          <p className="pb-3 text-center">👉Here is My Most Recent Project</p>
          {/* Card Design  */}
          <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">
                    Blog Web Application using Mern stack!
                  </span>
                  <img src={Image} alt="Project 1"></img>
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Material UI</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Node.JS</span>
                  <span className="card-detail-badge">Axios</span>
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5 className="text-uppercase">
                      Blog Web Application using Mern stack!
                    </h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/Blog-Web-Application-Using-Mern-Stack.git"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            {/* project Section 2 */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">
                    Weather web Application
                  </span>
                  <img src={Wheather} alt="Project 1"></img>
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">Html5</span>
                  <span className="card-detail-badge">css3</span>
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Api</span>
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5 className="text-uppercase">Weather web Application</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://weather-web-base-application.vercel.app/"
                  >
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/Weather-web-base-application.git"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            {/* 2 card project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">
                    E-commerce Web Application Using MERN Stack
                  </span>
                  <img src={Download} alt="Project 1"></img>
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Nodejs</span>
                  <span className="card-detail-badge">MongoDb</span>
                  <span className="card-detail-badge">Material Ui</span>
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5 className="text-uppercase">
                      E-commerce Web Application Using MERN Stack
                    </h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/E-Commerce-Using-MERN-Stack.git"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Project;
