import { headerList as navbarData } from "../assets/data/headerList.js";
import NavbarItem from "./NavbarItem.jsx";
import NavbarItemSub from "./NavbarItemSub.jsx";

const Navbar = ({ navbarOpen, setDisplayHamburger }) => {
  return (
    <>
      <div
        className={navbarOpen ? "header__menu-wrapper header__menu-wrapper--opened" : "header__menu-wrapper"}
        id="menu-wrapper"
      >
        <div className="header__menu-inner-wrapper" id="menu-inner-wrapper">
          <ul className="header__menu-list" id="header-menu-list">
            {navbarData.map((navbarItemData) => {
              return !navbarItemData.hasOwnProperty("submenu") ? (
                <NavbarItem key={navbarItemData.id} navbarItemData={navbarItemData} />
              ) : (
                <NavbarItemSub
                  key={navbarItemData.id}
                  navbarItemData={navbarItemData}
                  setDisplayHamburger={setDisplayHamburger}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
