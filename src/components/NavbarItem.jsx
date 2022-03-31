const NavbarItem = ({ navbarItemData }) => {
  const { link, title } = navbarItemData;
  return (
    <li className="header__menu-item">
      <a href={link} className="header__menu-item-link">
        {title}
      </a>
    </li>
  );
};

export default NavbarItem;
