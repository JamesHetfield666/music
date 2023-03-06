import "./Default.scss";
import SideBar from "../SideBar.js";
import Header from "../Header.js";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <div className="layout-wrapper">
      <SideBar />
      <div className="layout-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Default;
