import { useState } from "react";
import SubmenuItem from "./SubmenuItem";

const NavbarItemSub = ({ navbarItemData }) => {
  const [dropDown, setDropDown] = useState(false);

  const navbarItemHandleCLick = () => {
    setDropDown(!dropDown);
  };

  const { title, submenu } = navbarItemData;
  return (
    <>
      <li className="header__menu-item" onClick={navbarItemHandleCLick}>
        <div className="header__menu-item-text-arrow">
          {title}
          <svg width="10" height="15" className="header__submenu-arrow-icon" id="submenu-arrow-icon-news-features">
            <g stroke="#FFF" strokeWidth="1.7" fill="none" fillRule="evenodd">
              <path d="M6.664 8.923l-5.4 5M9.364 8.09l-8.1-7.5"></path>
            </g>
          </svg>
        </div>
      </li>
      {dropDown && (
        <>
          <div className="sub-menu__wrapper">
            <div className="sub-menu__inner-wrapper">
              <div className="sub-menu__container">
                {submenu.map((submenuItem) => {
                  return <SubmenuItem key={submenuItem.subId} submenuItem={submenuItem} />;
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarItemSub;
