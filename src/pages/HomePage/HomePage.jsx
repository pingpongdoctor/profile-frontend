import "./HomePage.scss";
import videoBackground from "../../assets/videos/video-background.mp4";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import capstoneGif from "../../assets/images/capstone.gif";
import brainflixGif from "../../assets/images/BrainFlix.gif";
import bandsiteGif from "../../assets/images/BandSite.gif";
import profilePic from "../../assets/images/profile-pic.png";
import lovePetGif from "../../assets/images/Love-Pet.gif";
import { handleScrollToElement } from "../../Utils/utils";
import { useState, useEffect, useRef, forwardRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate, useLocation } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;
const API_URL = process.env.REACT_APP_API_URL || "";

export default function HomePage({
  homeEle,
  aboutEle,
  projectEle,
  contactEle,
}) {
  //GIF FILE LINKS ARRAY
  const gifArr = [
    capstoneGif,
    profilePic,
    lovePetGif,
    brainflixGif,
    bandsiteGif,
  ];
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
        const projectsData = response.data;
        for (let i = 0; i < projectsData.length; i++) {
          projectsData[i].image_link = gifArr[i];
        }
        setProjectsArr(projectsData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //USE EFFECT TO GET ALL PROJECTS WHEN THE PAGE IS LOADED
  useEffect(() => {
    getAllProjects();
    // eslint-disable-next-line
  }, []);

  //FUNCTION TO FORMAT TECH STACK ARRAYS
  const formatTechStackArr = function (arr) {
    const string = arr.toString();
    const wordArr = string.split(",");
    const finalString = wordArr.join(", ");
    return finalString;
  };
  //STATES FOR FORM INPUTS
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //FUNCTION TO HANDLE THE INPUT STATES WHEN USERS ARE TYPING
  const handleName = function (event) {
    setName(event.target.value);
  };
  const handleEmail = function (event) {
    setEmail(event.target.value);
  };
  const handleMessage = function (event) {
    setMessage(event.target.value);
  };
  //FUNCTION TO VALIDATE THE INPUTE STATES
  const isNameValid = function () {
    if (name) {
      return true;
    }
    return false;
  };
  const isEmailValid = function () {
    if (email) {
      return true;
    }
    return false;
  };
  const isMessageValid = function () {
    if (message) {
      return true;
    }
    return false;
  };
  //STATE FOR THE SNACKBAR APPEARANCE
  const [snackbarSuccessOpen, setSnackbarSuccessOpen] = useState(false);
  const [snackbarErrorOpen, setSnackbarErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //SET UP
  const form = useRef();
  const submitForm = form.current;
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  //STATE TO SHOW THE SUBMISSION BOX
  const [showSubmit, setShowSubmit] = useState(false);
  //GET CURRENT LOCATION
  const currentLocation = useLocation().pathname;
  //FUNCTION TO NAVIGATE BACK TO HOMEPAGE
  const navigate = useNavigate();
  const handleNavigateBackToHome = function () {
    navigate("/");
    handleScrollToElement(homeEle);
  };
  //USE EFFECT TO SET SHOW SUBMIT STATE BASED ON THE CURRENT LOCATION
  useEffect(() => {
    if (currentLocation === "/submitted") {
      setShowSubmit(true);
    }
    if (currentLocation === "/") {
      setShowSubmit(false);
    }
  }, [currentLocation]);

  //FUNCTION TO HANDLE SUBMITTING
  const handleOnSubmitInfor = function (event) {
    event.preventDefault();
    if (isNameValid() && isEmailValid() && isMessageValid()) {
      emailjs
        .sendForm(
          REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID,
          submitForm,
          REACT_APP_PUBLIC_KEY
        )
        .then((response) => {
          console.log(response);
          setSnackbarSuccessOpen(true);
          navigate("/submitted");
          setTimeout(() => {
            handleNavigateBackToHome();
          }, 5000);
          setMessage("");
          setEmail("");
          setName("");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      if (!isNameValid()) {
        setErrorMessage("Please enter your name");
        setSnackbarErrorOpen(true);
      } else if (!isEmailValid()) {
        setErrorMessage("Please enter your email");
        setSnackbarErrorOpen(true);
      } else if (!isMessageValid()) {
        setErrorMessage("Please enter your message");
        setSnackbarErrorOpen(true);
      }
    }
    setTimeout(() => {
      setSnackbarSuccessOpen(false);
      setSnackbarErrorOpen(false);
    }, 3000);
  };
  //STATE FOR THE COUNTDOWN TIME
  const [countdown, setCountdown] = useState(4);
  //USE EFFECT TO COUNTDOWN TIME TO REDIRECT BACK TO HOME PAGE
  useEffect(() => {
    if (currentLocation === "/submitted") {
      if (countdown >= 0)
        setTimeout(() => {
          setCountdown(countdown - 1);
        }, 1000);
    }
    if (currentLocation === "/") {
      setCountdown(4);
    }
  });
  if (!showSubmit) {
    return (
      <div ref={homeEle} className="home-page">
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
            <p className="home-page__text">
              I am a Full-Stack Web Developer who approaches coding and bug
              fixing with the same dedication and care as a doctor treats their
              patients. I strive to provide the highest quality solutions, and
              take pride in my work.
            </p>
            <ButtonComponent
              btnName="projects"
              btnClassName="btn"
              btnContent="My Resume"
              onClickHandler={(e) => {
                window.open(
                  "https://drive.google.com/file/d/14hLthsIoN-QhKOxbnR2YQmrRpNhl7sBo/view?usp=share_link",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div ref={aboutEle} className="home-page__about">
          <div className="home-page__about-container">
            <h1 className="home-page__about-heading">About me</h1>
            {/* GET TO KNOW ME AND SKILLS */}
            <div className="home-page__about-content">
              <div
                className="home-page__about-flex-item"
                data-aos="slide-right"
              >
                <h2>Get to know me!</h2>
                <p>
                  I am a full stack developer naturally curious to learn and
                  grow in the software development industry. With the emerging
                  urge to enhance user experience, I consequently desire to
                  develop high-usability web applications.
                </p>
                <p>
                  There is a wealth of knowledge to be gained and shared in the
                  expansive world of Web Development. If you would like to learn
                  more about me, please connect with me on my {""}
                  <a
                    className="home-page__about-link"
                    href="https://www.linkedin.com/in/simon-tran1501/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                  .
                </p>
                <p>
                  I am very enthusiastic about discussing web development topics
                  and building my network of developers. Additionally, I am now
                  open to any job opportunities where I can contribute, grow,
                  and learn. If you have a remarkable opportunity that suits my
                  skills and experience, please do not hesitate to contact me.
                </p>
              </div>
              <div className="home-page__about-flex-item" data-aos="slide-left">
                <h2>My Skills</h2>
                <ul className="home-page__about-skills">
                  {skillArr.map((skill, index) => (
                    <li key={index} className="home-page__about-skill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ButtonComponent
              onClickHandler={() => {
                handleScrollToElement(contactEle);
              }}
              btnName="contact"
              btnClassName="btn"
              btnContent="Contact"
            />
          </div>
        </div>
        {/* PROJECTS */}
        <div ref={projectEle} className="home-page__projects">
          <div className="home-page__projects-container">
            <h1 className="home-page__projects-heading">My Projects</h1>
            {projectsArr.length > 0 &&
              projectsArr.map((project, index) => (
                <div key={index} className={`home-page__project`}>
                  {/* FLEX ITEM */}
                  <div
                    data-aos="flip-left"
                    className="home-page__project-pic-wrap"
                  >
                    <img
                      className="home-page__project-pic"
                      src={project.image_link}
                      alt="gif-file"
                    />
                  </div>
                  {/* FLEX ITEM */}
                  <div
                    data-aos="flip-right"
                    className="home-page__project-text"
                  >
                    <h2>{project.name}</h2>
                    {/* SHOW GENERAL INFO */}
                    <div className="home-page__general-infor">
                      <p>{project.description}</p>
                      {index === 0 && (
                        <div>
                          <p>
                            You can create a new account or use the demo account
                            to quickly access full website features.
                          </p>
                        </div>
                      )}
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
        {/* CONTACT */}
        <div ref={contactEle} className="home-page__contact">
          <div className="home-page__contact-container">
            <h1 className="home-page__contact-heading">Contact</h1>
            <form
              data-aos="slide-left"
              onSubmit={handleOnSubmitInfor}
              ref={form}
              className="home-page__contact-form"
            >
              <div className="home-page__contact-wrapper">
                <label className="home-page__contact-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="home-page__contact-input-box"
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={handleName}
                  name="user_name"
                />
              </div>
              <div className="home-page__contact-wrapper">
                <label className="home-page__contact-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="home-page__contact-input-box"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmail}
                  name="user_email"
                />
              </div>

              <div className="home-page__contact-wrapper">
                <label className="home-page__contact-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="home-page__contact-textarea"
                  name="user_message"
                  id="message"
                  wrap="hard"
                  placeholder="Enter Your Message"
                  value={message}
                  onChange={handleMessage}
                ></textarea>
              </div>
              <ButtonComponent
                btnType="submit"
                btnClassName="btn btn--contact-form"
                btnContent="Submit"
              />
            </form>
            {/* SNACKBAR */}
            <Snackbar open={snackbarErrorOpen}>
              <Alert severity="error">{errorMessage}</Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-page__submit">
        <video
          className="home-page__submit-video"
          src={videoBackground}
          muted
          loop
          autoPlay
        ></video>
        <div className="home-page__submit-box">
          <p className="home-page__submit-text">Thank you for submitting</p>
          <p className="home-page__submit-text">
            You will be back to the main page in {countdown} seconds
          </p>
          <Snackbar open={snackbarSuccessOpen}>
            {/* SNACKBAR */}
            <Alert severity="success">Thank you for your submission</Alert>
          </Snackbar>
        </div>
      </div>
    );
  }
}
