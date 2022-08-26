import React from "react";
// import { LinkedIn, Email, Github } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Footer from "../components/Footer";
import Beach from "../assets/Beach.png";

import Cat from "../assets/cat.gif";
import Sunset from "../assets/sunset.gif";
import Plane from "../assets/plane.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import "../styles/Home.css";

import Background from "../assets/background.jpg";
import Background2 from "../assets/background2.jpg";
import Background3 from "../assets/waterbackground2.jpg";

function Home() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${Background3})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.1, end: 0.9 }}
          style={{ textAlign: "center" }}
        >
          <img src={Sunset} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.05}
          onClick={() => ref.current.scrollTo(2)}
        >
          <div className="home">
            <div className="about">
              <h2> Hi, my name is Timmy</h2>
              <div className="prompt">
                <p>Up and coming software developer</p>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(0)}
        >
          <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
              <li className="item">
                <h2>Front-End</h2>
                <span>
                  React, HTML, CSS, JS, Flutter, PHP, BootStrap, MaterialUI
                </span>
              </li>
              <li className="item">
                <h2>Back-end</h2>
                <span>NodeJS, MySQL, Laravel, Docker, Azure</span>
              </li>
              <li className="item">
                <h2>Languages</h2>
                <span>Python, JavaScript, Java</span>
              </li>
            </ol>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;
