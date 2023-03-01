import React from "react";
import PropTypes from "prop-types";

import "./SideBarItem.scss";

const SideBarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="side-bar-item-wrapper">
      {item.heading && <div className="side-bar-item-heading">{item.heading}</div>}
      {!item.children && (
        <div className="side-bar-item-section">
          <div className="side-bar-item">
            <Icon className="side-bar-item_icon" />
            <span className="side-bar-item_label">{item.label}</span>
          </div>
        </div>
      )}
      {item.children &&
        item.children.length &&
        item.children.map(child => (
          <div key={child.id} className="side-bar-item_group-item">
            <SideBarItem item={child} />
          </div>
        ))}
    </div>
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
};

SideBarItem.defaultProps = {
  item: [],
};

export default SideBarItem;
