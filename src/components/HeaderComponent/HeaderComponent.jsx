import "./HeaderComponent.scss";
import menu from "../../assets/icons/menu.png";
import cross from "../../assets/icons/cross.png";
import AvatarComponent from "../AvatarComponent/AvatarComponent";
import { useWindowSize } from "../../Utils/utils";
import { useEffect, useState } from "react";

export default function HeaderComponent({ handleOnClickMenuIcon, openMenu }) {
  //STATES FOR THE PROFILE IMAGE SIZE
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  //GET WINDOW SIZE
  const windowSize = useWindowSize();
  //SET WIDTH AND HEIGHT OF THE PROFILE PICTURE BASED ON WINDOW SIZES
  useEffect(() => {
    if (windowSize.width >= 768) {
      setWidth(70);
      setHeight(70);
    }
    if (windowSize.width < 768) {
      setWidth(50);
      setHeight(50);
    }
  });
  return (
    <div className="site-header">
      <div className="site-header__container">
        <div>
          <AvatarComponent width={width} height={height} />
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
          <li className="site-header__text">Home</li>
          <li className="site-header__text">About</li>
          <li className="site-header__text">Projects</li>
          <li className="site-header__text">Contact</li>
        </ul>
      </div>
    </div>
  );
}
