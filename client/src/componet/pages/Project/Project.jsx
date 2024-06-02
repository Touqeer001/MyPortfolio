import React from "react";
import Image from "../../../assets/images/Blog pic.jpg";
import Download from "../../../assets/images/e-commerce pic.avif";
import Wheather from "../../../assets/images/Home Page.png";
import FileShairing from "../../../assets/images/filesharing.png";
import CRUD from "../../../assets/images/crud images.jpg";
import Portfolio from "../../../assets/images/Portfolio.png";
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

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">E-commerce Using MERN Stack</span>
                  <img src={Download} alt="Project 3"></img>
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Nodejs</span>
                  <span className="card-detail-badge">MongoDb</span>
                  <span className="card-detail-badge">Material Ui</span>
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h6 className="text-uppercase">
                     Feature:Seperated Admin And User Panel.
                    </h6>
                  </div>
                  <a className="ad-btn" href="https://easybuyhubs.netlify.app">
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/E-commerce-web-application-using-MERN-Stack"
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
                  <img src={Wheather} alt="Project 2"></img>
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
            <div className="col-md-4  mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Flipkart Clone</span>
                  <img src={Download} alt="Project 3"></img>
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
                     Flipkart Clone Using MERN Stack
                    </h5>
                  </div>
                  <a className="ad-btn" href="https://swipekart.000webhostapp.com">
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
            {/* File Shairing Project  */}
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">
                    File Shairing Application
                  </span>
                  <img src={FileShairing} alt="Project 4"></img>
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Nodejs</span>
                  <span className="card-detail-badge">MongoDb</span>
                  <span className="card-detail-badge">Material Ui</span>
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5 className="text-uppercase">File Shairing</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/File-Sharing-application-Using-MERN-Stack.git"
                  >
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/File-Sharing-application-Using-MERN-Stack.git"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            {/* //Project Ending  */}

            {/* Crud operation  */}

            <div className="col-md-4  mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">CRUD operations</span>
                  <img src={CRUD} alt="Project 4"></img>
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Nodejs</span>
                  <span className="card-detail-badge">MongoDb</span>
                  <span className="card-detail-badge">Material Ui</span>
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5 className="text-uppercase"> CRUD operations</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/Crud-Operations.git"
                  >
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/Crud-Operations.git"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            {/* PRoject End  */}

            {/* -------------------------------------Portfolio------------------------------------------------------ */}
            <div className="col-md-4  mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Portfolio Website</span>
                  <img src={Portfolio} alt="Project 4"></img>
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Nodejs</span>

                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5 className="text-uppercase"> Portfolio Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://my-portfolio-iota-coral.vercel.app"
                  >
                    View
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Touqeer001/MyPortfolio.git"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            {/* ----------------------------------------------------------------------------- */}
           





            {/* <div>Next</div> */}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Project;
