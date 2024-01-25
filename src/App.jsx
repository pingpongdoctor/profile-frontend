import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import HomePage from "./pages/HomePage/HomePage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";
import { useWindowSize } from "./Utils/utils";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import SideBar from "./components/SideBar/SideBar";
import capstoneGif from "./assets/images/capstone.gif";
import brainflixGif from "./assets/images/BrainFlix.gif";
import bandsiteGif from "./assets/images/BandSite.gif";
import profilePic from "./assets/images/profile-pic.png";
import lovePetGif from "./assets/images/Love-Pet.gif";
import glowyLab from "./assets/images/glowy-lab.png";
import axios from "axios";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
const API_URL = process.env.REACT_APP_API_URL || "";

function App() {
  //MAKE THE PAGE SCROLL TO THE TOP BEFORE IT IS UNLOADED SO THAT IT REMEMBER THE LAST SCROLL POSITION AS THE TOP OF THE PAGE
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  //GIF FILE LINKS ARRAY
  const gifArr = [
    glowyLab,
    capstoneGif,
    profilePic,
    lovePetGif,
    brainflixGif,
    bandsiteGif,
  ];
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
        projectsData.sort((a, b) => a.index_value - b.index_value);
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

  //GET THE CURRENT WINDOW SIZE
  const windowSize = useWindowSize();
  //STATE FOR OPENING MENU
  const [openMenu, setOpenMenu] = useState(false);
  //STATE FOR THE DRAWER APPEARANCE CLASSNAME
  const [drawerDisplay, setDrawerDisplay] = useState("");
  //FUNCTION TO HANDLE WHEN THE MENU ICON IS CLICKED
  const handleOnClickMenuIcon = function () {
    if (openMenu === false) {
      setOpenMenu(true);
      setDrawerDisplay("drawer__list--appear");
    }
    if (openMenu === true) {
      setOpenMenu(false);
      setDrawerDisplay("drawer__list--disappear");
    }
  };
  //FUNCTION TO MAKE DRAWER DISAPPEAR
  const handleMakeDrawerDisappear = function () {
    setDrawerDisplay("drawer__list--disappear");
  };
  //FUNCTION TO CLOSE THE MENU
  const handleOpenMenuState = function () {
    setOpenMenu(false);
  };
  //USE EFFECT TO SET THE OPEN MENU AND THE DRAWER APPEARANCE CLASSNAME STATES BASED ON THE WINDOW SIZE
  useEffect(() => {
    if (windowSize.width >= 768) {
      setOpenMenu(false);
      setDrawerDisplay("");
    }
  }, [windowSize]);
  //USE USE REF
  const homeEle = useRef();
  const aboutEle = useRef();
  const projectEle = useRef();
  const contactEle = useRef();

  //UPDATE THE SHOWPAGE STATE WHEN THE PROJECT ARRAY IS FULLY LOADED
  const [loadingComponentState, setLoadingComponentState] = useState("");
  useEffect(() => {
    if (projectsArr.length > 0) {
      setTimeout(() => {
        setLoadingComponentState("loading-component__display-none");
      }, 2000);
    }
  }, [projectsArr]);

  return (
    <BrowserRouter>
      <div className="App">
        {/* LOADING COMPONENT */}
        <LoadingComponent
          windowSize={windowSize}
          loadingComponentState={loadingComponentState}
        />

        {/* HEADER */}
        <HeaderComponent
          handleOnClickMenuIcon={handleOnClickMenuIcon}
          openMenu={openMenu}
          homeEle={homeEle}
          aboutEle={aboutEle}
          projectEle={projectEle}
          contactEle={contactEle}
        />

        {/* DROPDOWN MENU*/}
        <DrawerComponent
          homeEle={homeEle}
          aboutEle={aboutEle}
          projectEle={projectEle}
          contactEle={contactEle}
          drawerDisplay={drawerDisplay}
          handleMakeDrawerDisappear={handleMakeDrawerDisappear}
          handleOpenMenuState={handleOpenMenuState}
        />

        {/*SIDE BAR */}
        <SideBar />

        <Routes>
          {/* HOMEPAGE ROUTE */}
          <Route
            path="/"
            element={
              <HomePage
                homeEle={homeEle}
                aboutEle={aboutEle}
                projectEle={projectEle}
                contactEle={contactEle}
                projectsArr={projectsArr}
              />
            }
          />

          {/* SUBMITTED ROUTE */}
          <Route
            path="/submitted"
            element={
              <HomePage
                homeEle={homeEle}
                aboutEle={aboutEle}
                projectEle={projectEle}
                contactEle={contactEle}
                projectsArr={projectsArr}
              />
            }
          />
        </Routes>

        {/* FOOTER COMPONENT */}
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
