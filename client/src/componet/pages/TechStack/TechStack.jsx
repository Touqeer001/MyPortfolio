import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../utils/util";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
const TechStack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <Pulse>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr></hr>
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        </Pulse>
        <div className="row">
          {TechStackList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h6>{tech.name}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
