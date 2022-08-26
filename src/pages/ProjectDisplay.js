import React from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import YoutubeEmbed from "../components/YoutubeEmbed";

import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  let navigate = useNavigate();
  const routeChange = () => {
    let path = project.website;
    navigate(path);
    console.log("this worlksde ");
  };

  // const websiteKey = "website" in project.website;

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image}></img>
      <p>
        <p>About: {project.description}</p>
        <b>Skills:</b> {project.skills}
        <br></br> <br></br>
        <a href={project.website}> {project.website}</a>
        <br></br> <br></br>
        <a href={project.youtube1}>{project.youtube1}</a>
        <br></br>
        <a href={project.youtube2}>{project.youtube2}</a>
      </p>

      <a href={project.github} target="_blank" rel="noreferrer">
        <GitHubIcon></GitHubIcon>
      </a>

      {/* <div className="App">
        <h1>Youtube</h1>
        <YoutubeEmbed embedId={project.youtube} />
      </div> */}
    </div>
  );
}

export default ProjectDisplay;
