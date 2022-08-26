import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">St Benedicts</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            British Columbia Institute of Technology
          </h3>{" "}
          <p>Computer Systems Technology Diploma</p>
          <p>Specialization: Web & Mobile Option</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2022 - June 2022"
          iconStyle={{ background: "#A4DE02", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">PictureThis3D</h3>{" "}
          <p>BCIT CST Industry Sponsored Project (ISSP) </p>
          <br></br>
          <a href="https://picturethis3d.com/">https://picturethis3d.com/</a>
          <p>
            Worked in a team of four to provide detailed impovents and
            recommendations to their software through user testing, user
            experience and performance testing.
            <br /> <br />
            Skills: React.js · GitHub · Microsoft Azure · Regression Testing ·
            Manual Testing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
