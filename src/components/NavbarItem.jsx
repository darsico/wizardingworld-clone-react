import { NavLink } from "react-router-dom";

const NavbarItem = ({ navbarItemData }) => {
  const { link, title } = navbarItemData;
  return (
    <li className="header__menu-item">
      <NavLink to={link} className="header__menu-item-link">
        {title}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
