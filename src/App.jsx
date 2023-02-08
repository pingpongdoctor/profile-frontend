import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import HomePage from "./pages/HomePage/HomePage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";
import { useWindowSize } from "./Utils/utils";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import SideBar from "./components/SideBar/SideBar";

function App() {
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
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent
          handleOnClickMenuIcon={handleOnClickMenuIcon}
          openMenu={openMenu}
          homeEle={homeEle}
          aboutEle={aboutEle}
          projectEle={projectEle}
        />
        <DrawerComponent
          homeEle={homeEle}
          aboutEle={aboutEle}
          projectEle={projectEle}
          drawerDisplay={drawerDisplay}
        />
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
              />
            }
          />
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
