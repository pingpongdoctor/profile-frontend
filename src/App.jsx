import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailedProject from "./pages/DetailedProjectPage/DetailedProject";
import HomePage from "./pages/HomePage/HomePage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";
import { useWindowSize } from "./Utils/utils";
import FooterComponent from "./components/FooterComponent/FooterComponent";
const API_URL = process.env.REACT_APP_API_URL || "";
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

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent
          handleOnClickMenuIcon={handleOnClickMenuIcon}
          openMenu={openMenu}
        />
        <DrawerComponent drawerDisplay={drawerDisplay} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailed-project/:id" element={<DetailedProject />} />
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
