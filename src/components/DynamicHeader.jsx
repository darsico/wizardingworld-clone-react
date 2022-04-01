import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 200));
    }
  }, []);

  // <header className={`header ${
  //       small ? "small" : ""
  //     }`}>
  //   Logo etc.
  // </header>

  return (
    <header className="header dynamic-header">
      <nav className="header__container">
        {window.innerWidth < 1024 && hideHamburger ? null : (
          <a
            href
            className="toggle-menu header__menu-icon-link"
            role="button"
            aria-controls="menu-wrapper"
            aria-label="Open navigation"
            aria-expanded="false"
            onClick={MenuIconHandleClick}
          >
            <MenuIcon navbarOpen={navbarOpen} />
          </a>
        )}

        <Navbar navbarOpen={navbarOpen} setHideHamburger={setHideHamburger} MenuIconHandleClick={MenuIconHandleClick} />
        <NavLink to="/" className="header__logo-link">
          <figure className="header__logo-container">
            <img src={logo} className="header__logo" alt="" />
          </figure>
        </NavLink>
        <button className="header__button-login">login</button>
      </nav>
    </header>
  );
};

export default Header;
