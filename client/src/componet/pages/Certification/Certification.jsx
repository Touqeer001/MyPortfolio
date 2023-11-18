import React from "react";

const Certification = () => {
  return (
    <>
      <div className="container project " id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certification
        </h2>
        <hr></hr>
        <p className="pb-3 text-center">👉Here is My Certification</p>

        {/* Card Design  */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">
              Blog Web Application using Mern stack!
            </span> */}
                <img src={Image} alt="Project 1"></img>
              </div>
              {/* <div className="card-image-overly">
            <span className="card-detail-badge">React</span>
            <span className="card-detail-badge">Material UI</span>
            <span className="card-detail-badge">MongoDB</span>
            <span className="card-detail-badge">Node.JS</span>
            <span className="card-detail-badge">Axios</span>
          </div> */}
              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase">
                    Blog Web Application using Mern stack!
                  </h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
                {/* <a
              className="ad-btn"
              href="https://github.com/Touqeer001/Blog-Web-Application-Using-Mern-Stack.git"
            >
              Github
            </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
