import "./HomePage.scss";
import videoBackground from "../../assets/videos/video-background.mp4";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import capstoneGif from "../../assets/images/capstone.gif";
import brainflixGif from "../../assets/images/BrainFlix.gif";
import bandsiteGif from "../../assets/images/BandSite.gif";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../Utils/utils";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const API_URL = process.env.REACT_APP_API_URL || "";

export default function HomePage() {
  //GIF FILE LINKS ARRAY
  const gifArr = [capstoneGif, brainflixGif, bandsiteGif];

  //DEFINE SKILLS ARRAY
  const skillArr = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "GitHub",
    "Agile Development",
    "Jest",
    "Sass",
    "BEM",
    "SQL",
    "ExpressJS",
    "NodeJS",
    "KnexJS",
    "MongoDB + Mongoose",
    "REST API",
    "GraphQL",
    "JWT Token",
    "Passport",
  ];
  //STATES AND USE EFFECT TO MANIPULATE THE WIDTH OF PROJECT PICTURES BASED ON THE WINDOW WIDTH
  const [picWidth, setPicWidth] = useState("");
  const windowSize = useWindowSize();
  const currentWindowWidth = windowSize.width;
  useEffect(() => {
    if (currentWindowWidth > 479 && currentWindowWidth < 768) {
      setPicWidth("");
    }
    if (currentWindowWidth < 479) {
      setPicWidth(currentWindowWidth - 120);
    }
    if (currentWindowWidth < 400) {
      setPicWidth(currentWindowWidth - 110);
    }
  }, [currentWindowWidth]);

  //FUNCTION TO FLIP OVER THE ELEMENT AND SHOW THE DETAILED PROJECT
  const handleOnClickFlipProject = function (event) {
    const allProjects = document.querySelectorAll(".home-page__project");
    const allGeneralInforElements = document.querySelectorAll(
      ".home-page__general-infor"
    );
    const allDetailInforElements = document.querySelectorAll(
      ".home-page__detail-infor"
    );
    const projectIndex = event.target.id;
    if (
      allProjects[projectIndex].classList.contains("home-page__project-flip") ||
      allProjects[projectIndex].classList.contains(
        "home-page__project-reverse-flip"
      )
    ) {
      allProjects[projectIndex].classList.toggle("home-page__project-flip");
      allProjects[projectIndex].classList.toggle(
        "home-page__project-reverse-flip"
      );
    }
    if (
      !allProjects[projectIndex].classList.contains(
        "home-page__project-flip"
      ) &&
      !allProjects[projectIndex].classList.contains(
        "home-page__project-reverse-flip"
      )
    ) {
      allProjects[projectIndex].classList.add("home-page__project-flip");
    }
    //SETTIMEOUT TO HANDLE THE APPEARANCE OF THE DETAILS OF PROJECTS
    setTimeout(() => {
      // setShowDetail(showDetail === false ? true : false);
      allGeneralInforElements[projectIndex].classList.toggle(
        "home-page__project-display-none"
      );
      allDetailInforElements[projectIndex].classList.toggle(
        "home-page__project-display-none"
      );
    }, 950);
  };

  //STATE FOR THE PROJECTS ARRAY
  const [projectsArr, setProjectsArr] = useState([]);
  //FUNCTION TO GET ALL PROJECTS
  const getAllProjects = function () {
    axios
      .get(`${API_URL}/projects`)
      .then((response) => {
        console.log(response.data);
        const projectsData = response.data;
        for (let i = 0; i < projectsData.length; i++) {
          projectsData[i].image_link = gifArr[i];
        }
        console.log(projectsData);
        setProjectsArr(projectsData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //USE EFFECT TO GET ALL PROJECTS WHEN THE PAGE IS LOADED
  useEffect(() => {
    getAllProjects();
  }, []);

  //FUNCTION TO FORMAT TECH STACK ARRAYS
  const formatTechStackArr = function (arr) {
    const string = arr.toString();
    const wordArr = string.split(",");
    const finalString = wordArr.join(", ");
    return finalString;
  };
  return (
    <div className="home-page">
      {/* INTRODUCTION */}
      <div className="home-page__intro">
        <video
          className="home-page__video"
          src={videoBackground}
          muted
          loop
          autoPlay
        ></video>
        <div className="home-page__content">
          {/* TYPE ANIMATION */}
          <TypeAnimation
            sequence={[
              "Hi! I am Simon Tran",
              1000,
              "Welcome to my profile website",
              2000,
            ]}
            wrapper="div"
            speed={75}
            cursor={true}
            repeat={Infinity}
            style={{ marginBottom: "0", color: "white", fontSize: "2rem" }}
          />
          {/* <h1 className="home-page__heading">Hi! I am Simon Tran</h1> */}
          <p className="home-page__text">
            I am a Full-stack developer who codes and fixes bugs as same as a
            doctor treats patients dedicatedly.
          </p>
          <ButtonComponent
            btnName="projects"
            btnClassName="btn"
            btnContent="Projects"
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="home-page__about">
        <div className="home-page__about-container">
          <h1 className="home-page__about-heading">About me</h1>
          {/* GET TO KNOW ME AND SKILLS */}
          <div className="home-page__about-content">
            <div className="home-page__about-flex-item">
              <h2>Get to know me!</h2>
              <p>
                I am a doctor and blockchain enthusiast who craves to take a
                career metamorphosis into Web Development and loves building
                full-stack single-page applications. I always find ways to
                refine and make my codes more dynamic. Besides from that,
                knowing the importance of user experience in website building, I
                am also tempted to improve the usability level of my websites.
              </p>
              <p>
                There are a lot of things to learn and share in the huge land of
                Web Development. You can connect and get to know more about me
                on my {""}
                <a
                  href="https://www.linkedin.com/in/simon-tran1501/"
                  target="_blank"
                >
                  Linkedin
                </a>
                .
              </p>
              <p>
                I am into discussing about Web Development and developing my
                Developer Network so do not postpone to connect with me. In
                addition, I am now open to any job opportunities where I can
                contribute, grow and learn. If you have a good opportunity that
                matches my skills and my experience, please do not hesitate to
                contact me.
              </p>
            </div>
            <div className="home-page__about-flex-item">
              <h2>My Skills</h2>
              <ul className="home-page__about-skills">
                {skillArr.map((skill) => (
                  <li className="home-page__about-skill">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <ButtonComponent
            btnName="contact"
            btnClassName="btn"
            btnContent="Contact"
          />
        </div>
      </div>
      {/* PROJECTS */}
      <div className="home-page__projects">
        <h1 className="home-page__projects-heading">Projects</h1>
        {projectsArr.length > 0 &&
          projectsArr.map((project, index) => (
            <div key={index} className={`home-page__project`}>
              {/* FLEX ITEM */}
              <div className="home-page__project-pic-wrap">
                <img
                  className="home-page__project-pic"
                  src={project.image_link}
                  alt="gif-image"
                  style={{ width: picWidth }}
                />
              </div>
              {/* FLEX ITEM */}
              <div className="home-page__project-text">
                <h2>{project.name}</h2>
                {/* SHOW GENERAL INFO */}
                <div className="home-page__general-infor">
                  <p>{project.description}</p>
                  <ButtonComponent
                    btnClassName="btn btn--project"
                    btnContent="Tech Stack"
                    btnName="tech-stack"
                    onClickHandler={handleOnClickFlipProject}
                    btnId={index}
                  />
                </div>

                {/* SHOW DETAILS */}
                <div className="home-page__detail-infor home-page__project-display-none">
                  <p>
                    <strong>Tech Stack Frontend</strong>: {""}
                    {formatTechStackArr(project.tech_stack.frontend)}.
                  </p>
                  {project.tech_stack.backend.length > 0 && (
                    <p>
                      <strong>Tech Stack Backend</strong>: {""}
                      {formatTechStackArr(project.tech_stack.backend)}.
                    </p>
                  )}
                  <a
                    className="home-page__project-link"
                    href={project.deployment_link}
                    target="_blanket"
                  >
                    {/* LETTER FLIP ANIMATION */}
                    <span style={{ animationDelay: "0.2s" }}>D</span>
                    <span style={{ animationDelay: "0.4s" }}>e</span>
                    <span style={{ animationDelay: "0.6" }}>p</span>
                    <span style={{ animationDelay: "0.8s" }}>l</span>
                    <span style={{ animationDelay: "1s" }}>o</span>
                    <span style={{ animationDelay: "1.2s" }}>y</span>
                    <span style={{ animationDelay: "1.4s" }}>m</span>
                    <span style={{ animationDelay: "1.6s" }}>e</span>
                    <span style={{ animationDelay: "1.8s" }}>n</span>
                    <span style={{ animationDelay: "2s" }}>t</span>
                    &nbsp;
                    <span style={{ animationDelay: "2.2s" }}>L</span>
                    <span style={{ animationDelay: "2.4s" }}>i</span>
                    <span style={{ animationDelay: "2.6s" }}>n</span>
                    <span style={{ animationDelay: "2.8s" }}>k</span>
                    {/* Deployment Link */}
                  </a>
                  <ButtonComponent
                    btnClassName="btn btn--project"
                    btnContent="Project Infor"
                    btnName="project-infor"
                    onClickHandler={handleOnClickFlipProject}
                    btnId={index}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
