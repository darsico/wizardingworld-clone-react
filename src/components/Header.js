import { useState } from "react";
import "../assets/css/header.css";
import logo from "../assets/images/header/logo.svg";
import submenuDecoration from "../assets/images/header/submenu-bottom-decoration.svg";

import MenuIcon from "./MenuIcon";
import Navbar from "./Navbar";

const Header = () => {
  const [open, setOpen] = useState(false);

  const MenuIconHandleClick = () => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <nav className="header__container">
        <a
          href
          className="toggle-menu header__menu-icon-link"
          role="button"
          aria-controls="menu-wrapper"
          aria-label="Open navigation"
          aria-expanded="false"
        >
          <MenuIcon MenuIconHandleClick={MenuIconHandleClick} />
        </a>
        <Navbar />
        <a href="true" className="header__logo-link">
          <figure className="header__logo-container">
            <img src={logo} className="header__logo" alt="" />
          </figure>
        </a>
        <button className="header__button-login">login</button>
      </nav>
      {/* <div className="sub-menu__wrapper" id="discover-desktop-wrapper">
        <div className="sub-menu__inner-wrapper">
          <div className="sub-menu__container" id="submenu-container-discover" />
          <figure className="sub-menu__bottom-decoration-container"></figure>
        </div>
      </div>
      <div className="sub-menu__wrapper" id="news-features-desktop-wrapper">
        <div className="sub-menu__inner-wrapper">
          <div className="sub-menu__container" id="submenu-container-news-features" />
          <figure className="sub-menu__bottom-decoration-container">
            <img src={submenuDecoration} alt="Decoración de submenu" className="sub-menu__bottom-decoration" />
          </figure>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
