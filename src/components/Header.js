import { useState } from "react";
import "../assets/css/header.css";
import logo from "../assets/images/header/logo.svg";

import MenuIcon from "./MenuIcon";
import Navbar from "./Navbar";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hideHamburger, setHideHamburger] = useState(false);
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
          style={
            window.innerWidth < 1024 && hideHamburger
              ? { visibility: "hidden", opacity: "0" }
              : { visibility: "visible", opacity: "1" }
          }
        >
          <MenuIcon navbarOpen={navbarOpen} />
        </a>
        <Navbar navbarOpen={navbarOpen} setHideHamburger={setHideHamburger} />
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
