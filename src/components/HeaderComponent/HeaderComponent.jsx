import "./HeaderComponent.scss";
import menu from "../../assets/icons/menu.png";
import cross from "../../assets/icons/cross.png";
import AvatarComponent from "../AvatarComponent/AvatarComponent";
import { handleScrollToElement } from "../../Utils/utils";
import { useLocation } from "react-router-dom";

export default function HeaderComponent({
  homeEle,
  aboutEle,
  projectEle,
  contactEle,
  handleOnClickMenuIcon,
  openMenu,
}) {
  //FUNCTION TO HANDLE SCROLLING TO ELEMETNS WHEN THEY ARE CLICKED
  const handleOnClickToSrollTo = function (event) {
    const id = event.target.id;
    if (id === "home") {
      handleScrollToElement(homeEle);
    }
    if (id === "about") {
      handleScrollToElement(aboutEle);
    }
    if (id === "project") {
      handleScrollToElement(projectEle);
    }
    if (id === "contact") {
      handleScrollToElement(contactEle);
    }
  };
  //GET THE CURRENT PATH
  const currentPath = useLocation().pathname;

  if (currentPath !== "/submitted") {
    return (
      <div className="site-header">
        <div className="site-header__container">
          <div>
            <AvatarComponent width={70} height={70} />
          </div>
          <p className="site-header__name">Simon Tran</p>
          {!openMenu && (
            <img
              onClick={handleOnClickMenuIcon}
              className="site-header__icon"
              src={menu}
              alt="menu"
            />
          )}
          {openMenu && (
            <img
              onClick={handleOnClickMenuIcon}
              className="site-header__icon"
              src={cross}
              alt="cross"
            />
          )}
          <ul className="site-header__list">
            <li
              onClick={handleOnClickToSrollTo}
              id="home"
              className="site-header__text"
            >
              Home
            </li>
            <li
              onClick={handleOnClickToSrollTo}
              id="about"
              className="site-header__text"
            >
              About
            </li>
            <li
              onClick={handleOnClickToSrollTo}
              id="project"
              className="site-header__text"
            >
              Projects
            </li>
            <li
              id="contact"
              onClick={handleOnClickToSrollTo}
              className="site-header__text"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
