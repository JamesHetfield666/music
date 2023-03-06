import "./Header.scss";
import { FiSearch } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <div className="search-control">
        <FiSearch className="search-control__search-icon" />
        <div className="search-control__input-container">
          <input className="search-control__input" placeholder="Search for songs, artists..." />
          <div className="search-control_focus-border"></div>
        </div>
      </div>
      <div className="navigation-panel">
        <AiOutlineSetting className="navigation-panel__icon navigation-panel__icon_spinning" />
        <MdOutlineNotificationsNone className="navigation-panel__icon navigation-panel__icon_ringing" />
        <div
          className="navigation-panel__avatar"
          style={{
            background:
              "url(https://faroutmagazine.co.uk/static/uploads/2020/07/Remembering-the-night-James-Hetfield-caught-fire-on-stage.jpg)",
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
