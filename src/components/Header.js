import { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import logo from "../assets/images/header/logo.svg";

import MenuIcon from "./MenuIcon";
import Navbar from "./Navbar";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hideHamburger, setHideHamburger] = useState(false);
  const [dynamic, setDynamic] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && typeof window !== "undefined" && window.innerWidth > 1024) {
      window.addEventListener("scroll", () => setDynamic(window.pageYOffset > 0));
    }
  }, [location]);

  const MenuIconHandleClick = () => {
    setNavbarOpen(!navbarOpen);
  };
  const dynamicColorClick = () => {
    setDynamic(true);
  };
  const handleEnterHeader = () => {
    setDynamic(true);
  };
  const handleLeaveHeader = () => {
    if (window.pageYOffset === 0) setDynamic(false);
  };

  return (
    <header className="header" onMouseEnter={handleEnterHeader} onMouseLeave={handleLeaveHeader}>
      <nav
        className={
          location.pathname === "/"
            ? dynamic
              ? "header__container "
              : "header__container dynamic-header"
            : "header__container"
        }
      >
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

        <Navbar
          navbarOpen={navbarOpen}
          setHideHamburger={setHideHamburger}
          MenuIconHandleClick={MenuIconHandleClick}
          dynamicColorClick={dynamicColorClick}
        />

        <NavLink to="/" className="header__logo-link">
          <figure className="header__logo-container">
            <img src={logo} className="header__logo" alt="" />
          </figure>
        </NavLink>
        <NavLink to="/login" className="header__button-login">
          login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
