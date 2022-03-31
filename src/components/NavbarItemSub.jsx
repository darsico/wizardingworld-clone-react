import { useState } from "react";
import SubmenuItem from "./SubmenuItem";
import "animate.css";

const NavbarItemSub = ({ navbarItemData, setDisplayHamburger }) => {
  const [dropDown, setDropDown] = useState(false);

  const navbarItemHandleCLick = () => {
    setDropDown(!dropDown);
    setDisplayHamburger(false);
  };

  const { title, submenu } = navbarItemData;
  const backArrowHandleCLick = () => {
    setDropDown(!dropDown);
    setDisplayHamburger(true);
  };

  return (
    <>
      <li className="header__menu-item" onClick={navbarItemHandleCLick}>
        <div className="header__menu-item-text-arrow">
          {title}
          <svg
            width="10"
            height="15"
            className={
              dropDown ? "header__submenu-arrow-icon header__submenu-arrow-icon--clicked" : "header__submenu-arrow-icon"
            }
          >
            <g stroke="#FFF" strokeWidth="1.7" fill="none" fillRule="evenodd">
              <path d="M6.664 8.923l-5.4 5M9.364 8.09l-8.1-7.5"></path>
            </g>
          </svg>
        </div>
      </li>

      <div className={dropDown ? "sub-menu__wrapper sub-menu__wrapper--opened" : "sub-menu__wrapper"}>
        <div className="sub-menu__inner-wrapper">
          {dropDown && (
            <div class="discover-menu__back-arrow-container" onClick={backArrowHandleCLick}>
              <svg width="10" height="15" class="discover-menu__back-arrow" id="discover-back">
                <g stroke="#FFF" stroke-width="1.7" fill="none" class="arrow-icon" fill-rule="evenodd">
                  <path d="M6.664 8.923l-5.4 5M9.364 8.09l-8.1-7.5"></path>
                </g>
              </svg>
            </div>
          )}
          <div className="sub-menu__container">
            <h2 className="header__menu-discover-title">{title}</h2>
            {submenu.map((submenuItem) => {
              return <SubmenuItem key={submenuItem.subId} submenuItem={submenuItem} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarItemSub;