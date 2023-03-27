import "./DrawerComponent.scss";
import { handleScrollToElement } from "../../Utils/utils";

export default function DrawerComponent({
  drawerDisplay,
  homeEle,
  projectEle,
  aboutEle,
  contactEle,
  handleMakeDrawerDisappear,
  handleOpenMenuState,
}) {
  //FUNCTION TO HANDLE SCROLLING TO ELEMETNS WHEN THEY ARE CLICKED
  const handleOnClickToSrollTo = function (event) {
    const id = event.target.id;
    if (id === "drawer-home") {
      handleScrollToElement(homeEle);
    }
    if (id === "drawer-about") {
      handleScrollToElement(aboutEle);
    }
    if (id === "drawer-project") {
      handleScrollToElement(projectEle);
    }
    if (id === "drawer-contact") {
      handleScrollToElement(contactEle);
    }
    handleMakeDrawerDisappear();
    handleOpenMenuState();
  };
  return (
    <div className="drawer">
      <ul className={`drawer__list ${drawerDisplay}`}>
        <li
          onClick={handleOnClickToSrollTo}
          id="drawer-home"
          className="drawer__item"
        >
          Home
        </li>
        <li
          onClick={handleOnClickToSrollTo}
          id="drawer-about"
          className="drawer__item"
        >
          About
        </li>
        <li
          onClick={handleOnClickToSrollTo}
          id="drawer-project"
          className="drawer__item"
        >
          Project
        </li>
        <li
          onClick={handleOnClickToSrollTo}
          id="drawer-contact"
          className="drawer__item"
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
