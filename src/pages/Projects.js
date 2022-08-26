import React from "react";
import ProjectItem from "../components/ProjectItem";

import "../styles/Projects.css";
import "../helpers/ProjectList";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1 id="projectsHeading">My Projects</h1>

      <div className="projectList">
        {/* <ProjectItem name="We Sell Stuff" image={Proj1}></ProjectItem>
        <ProjectItem name="Park" image={Proj2}></ProjectItem> */}
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
