import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./SideBarItem.scss";
import { NavLink } from "react-router-dom";

const SideBarItem = ({ item, carriageHandler, index }) => {
  const Icon = item.icon;

  const elements = useRef([]);

  const setActive = ({ isActive }) => (isActive ? "side-bar__item_active" : "");

  useEffect(() => {
    const element = elements[index];
    if (element && [...element.classList].includes("side-bar__item_active"))
      carriageHandler(element.firstElementChild);
  }, []);

  return (
    <>
      {item.children && item.children.length ? (
        <div className="side-bar__item-group">
          <div className="side-bar__group-heading">{item.heading}</div>
          {item.children.map(child => (
            <SideBarItem carriageHandler={carriageHandler} item={child} key={child.id} />
          ))}
        </div>
      ) : (
        <NavLink to={item.path} className={setActive} ref={ref => (elements[index] = ref)}>
          <div className="side-bar__item" onClick={event => carriageHandler(event.target)}>
            {Icon && <Icon className="side-bar__item-icon" />}
            {item.label && <span className="side-bar__item-label">{item.label}</span>}
          </div>
        </NavLink>
      )}
    </>
  );
};

SideBarItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.func,
    children: PropTypes.array,
    heading: PropTypes.string,
  }),
  carriageHandler: PropTypes.func,
  index: PropTypes.number,
};

SideBarItem.defaultProps = {
  item: [],
  carriageHandler: null,
  index: 0,
};

export default SideBarItem;
