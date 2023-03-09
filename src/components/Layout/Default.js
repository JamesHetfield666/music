import "./Default.scss";
import SideBar from "../SideBar.js";
import Header from "../Header.js";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Default = () => {
  const [sideBarShow, setSideBarShow] = useState(false);

  window.addEventListener("resize", () => setSideBarShow(false));

  return (
    <div className="layout-wrapper">
      {sideBarShow && (
        <div className="layout-wrapper__side-bar-background" onClick={() => setSideBarShow(false)}></div>
      )}
      <SideBar sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} />
      <div className="layout-container">
        <Header setSideBarShow={setSideBarShow} />
        <Outlet />
      </div>
    </div>
  );
};

export default Default;
