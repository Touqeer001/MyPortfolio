import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="Work">
        <div className="container work-exp">
          <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h1>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="March. 2023 - Sept 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Devtown, pvt ltd
              </h4>
              <p style={{ textAlign: "justify" }}>
                Technology Used React , Express , MongoDb, Node.js. Collaborated
                on various projects, acquiring proficiency in contemporary web
                development tools and methodologies, achieving a proficiency
                level of 90%.Worked on the server-side logic and API development
                using Node.js with 80% accuracy.Integrated and interacted with
                MongoDB, gaining practical experience in database management
                with 80% accuracy.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Nov. 2023 - Dec 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                React Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Skyscanner</h4>
              <p style={{ textAlign: "justify" }}>
                Technology used React , Backpack , JavaScript (ES6+) , Tailwind
                CSS, GitHub Configured a Backpack React application, achieving a
                100% successful setup rate for development environments
                Implemented the Backpack Calendar component seamlessly into the
                application, resulting in a 100% completion rate for feature
                integration tasks.
              </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2018 - 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                xyz, pvt ltd
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
