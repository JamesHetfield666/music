import { ReactComponent as Logo } from "../assets/images/logoWithText.svg";
import { useState } from "react";
import SideBarItem from "./SideBarItem.js";
import { useRef } from "react";

import sideBar from "../staticData/sideBar.js";
import "./SideBar.scss";

const SideBar = () => {
  const [sideBarItems, setSideBarItems] = useState(sideBar);

  const carriageElem = useRef(null);

  const getCurrentItem = target => {
    if ([...target.classList].includes("side-bar__item")) return target;
    else return getCurrentItem(target.parentNode);
  };

  const carriageHandler = target => {
    const currentItem = getCurrentItem(target);
    const coordinates = currentItem.getBoundingClientRect();
    const { top } = coordinates;
    carriageElem.current.style.top = `${top}px`;
  };

  return (
    <>
      <div className="side-bar">
        <div className="side-bar__logo">
          <Logo />
        </div>
        <div className="side-bar__items">
          <div className="side-bar__carriage" ref={carriageElem}></div>
          {sideBarItems.map((item, index) => {
            return <SideBarItem carriageHandler={carriageHandler} index={index} item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
