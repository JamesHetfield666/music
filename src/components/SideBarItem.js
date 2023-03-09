import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./SideBarItem.scss";
import { NavLink } from "react-router-dom";

const SideBarItem = ({ item, carriageHandler, index }) => {
  const Icon = item.icon;

  const sideBarItem = useRef(null);

  useEffect(() => {
    if (sideBarItem.current && sideBarItem.current.classList.contains("side-bar__item_active")) {
      carriageHandler(sideBarItem.current);
    }
  }, []);

  const setActive = isActive => (isActive ? "side-bar__item_active" : "");

  return (
    <>
      {item.children && item.children.length ? (
        <div className="side-bar__item-group">
          <div className="side-bar__group-head">
            <div className="side-bar__group-heading">{item.heading}</div>
            {Icon && <Icon className="side-bar__group-head-icon" />}
          </div>
          {item.children.map(child => (
            <SideBarItem carriageHandler={carriageHandler} item={child} key={child.id} />
          ))}
        </div>
      ) : (
        <NavLink to={item.path}>
          {({ isActive }) => (
            <div
              ref={sideBarItem}
              className={`side-bar__item ${setActive(isActive)}`}
              onClick={event => carriageHandler(event.target)}
            >
              {Icon && <Icon className="side-bar__item-icon" />}
              {item.label && <span className="side-bar__item-label">{item.label}</span>}
            </div>
          )}
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
  item: {},
  carriageHandler: null,
  index: 0,
};

export default SideBarItem;
