import { useState } from "react";
import "../assets/css/header.css";
import logo from "../assets/images/header/logo.svg";
import submenuDecoration from "../assets/images/header/submenu-bottom-decoration.svg";

import MenuIcon from "./MenuIcon";
import Navbar from "./Navbar";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [displayHamburger, setDisplayHamburger] = useState(true);
  const MenuIconHandleClick = () => {
    setNavbarOpen(!navbarOpen);
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
          onClick={MenuIconHandleClick}
          style={displayHamburger ? { display: "block" } : { display: "none" }}
        >
          <MenuIcon navbarOpen={navbarOpen} />
        </a>
        <Navbar navbarOpen={navbarOpen} setDisplayHamburger={setDisplayHamburger} />
        <a href="true" className="header__logo-link">
          <figure className="header__logo-container">
            <img src={logo} className="header__logo" alt="" />
          </figure>
        </a>
        <button className="header__button-login">login</button>
      </nav>
    </header>
  );
};

export default Header;
