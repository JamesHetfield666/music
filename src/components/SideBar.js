import { ReactComponent as Logo } from "../assets/images/logoWithText.svg";
import { useState } from "react";
import SideBarItem from "./SideBarItem.js";

import sideBar from "../staticData/sideBar.js";
import "./SideBar.scss";

const SideBar = () => {
  const [sideBarItems, setSideBarItems] = useState(sideBar);

  return (
    <div className="side-bar">
      <Logo />
      <div className="side-bar_items">
        {sideBarItems.map(item => {
          return <SideBarItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
