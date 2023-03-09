import { ReactComponent as Logo } from "../assets/images/logoWithText.svg";
import SideBarItem from "./SideBarItem.js";
import { useRef } from "react";
import PropTypes from "prop-types";
import React from "react";

import sideBar from "../staticData/sideBar.js";
import "./SideBar.scss";

import { BiLeftArrowAlt } from "react-icons/bi";

const SideBar = ({ sideBarShow, setSideBarShow }) => {
  const carriageElem = useRef(null);

  const getCurrentItem = target => {
    if (target.classList.contains("side-bar__item")) return target;
    else return getCurrentItem(target.parentNode);
  };

  const carriageHandler = target => {
    const currentItem = getCurrentItem(target);
    const coordinates = currentItem.getBoundingClientRect();
    const { top } = coordinates;
    carriageElem.current.style.top = `${top}px`;
  };

  return (
    <div className={`side-bar ${sideBarShow ? "side-bar_showing" : ""}`}>
      <div className="side-bar__logo">
        <Logo />
        <BiLeftArrowAlt className="side-bar__arrow-icon" onClick={() => setSideBarShow(false)} />
      </div>
      <div className="side-bar__items">
        <div className="side-bar__carriage" ref={carriageElem}></div>
        {sideBar.map((item, index) => {
          return <SideBarItem carriageHandler={carriageHandler} index={index} item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  sideBarShow: PropTypes.bool,
  setSideBarShow: PropTypes.func,
};

SideBar.defaultProps = {
  sideBarShow: false,
  setSideBarShow: null,
};

export default SideBar;
