import { NavLink } from "react-router-dom";

const SubmenuItem = ({ submenuItem, backArrowHandleCLick, MenuIconHandleClick }) => {
  const { title, image, link } = submenuItem;
  const handleSubmenuCardClick = () => {
    if (window.innerWidth < 1024) {
      MenuIconHandleClick();
    }
    backArrowHandleCLick();
  };
  return (
    <>
      <div className="submenu-card" onClick={handleSubmenuCardClick}>
        <NavLink to={link}>
          <figure className="card__image-container">
            <img className="card__image" src={image} alt="" />
          </figure>
          <div className="card__inner-wrapper">
            <p className="card__title">{title}</p>
            <figure className="card__decoration-icon-container">
              <img className="card__decoration-icon" src="" alt="" />
            </figure>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default SubmenuItem;
