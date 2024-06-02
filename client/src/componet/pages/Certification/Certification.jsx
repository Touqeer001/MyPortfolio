import React from "react";
import Certificate from "../../../assets/images/certificates.png";
import Internship from "../../../assets/images/internship certificate.png";
import LOR from "../../../assets/images/Letter of Recommendation.png";
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
                <span className="card-notify-badge"></span>
                <img src={Certificate} alt="Project 1"></img>
              </div>

              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase">
                    Completed Full Stack Web Development training.
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://cert.devtown.in/verify/24A6P6"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* {...........................} */}
          <div className="col-md-4" id="Certification">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"></span>
                <img src={Internship} alt="Project 1"></img>
              </div>

              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase">
                    Completed 6 month Internship in MERN Stack.
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://cert.devtown.in/verify/LBlxB"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* ------------------ */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"></span>
                <img src={LOR} alt="Project 1"></img>
              </div>

              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase">
                    Letter OF Recommendation from Devtown.
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://cert.devtown.in/verify/2littr"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* ------------------------- */}
        </div>
      </div>
    </>
  );
};

export default Certification;
