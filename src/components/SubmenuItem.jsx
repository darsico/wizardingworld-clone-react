import cardDecoration from "../assets/images/header/submenu-bottom-decoration.svg";

const SubmenuItem = ({ submenuItem }) => {
  const { title, image, link } = submenuItem;

  return (
    <>
      <div className="submenu-card ">
        <a href={link}>
          <figure className="card__image-container">
            <img className="card__image" src={image} alt="" />
          </figure>
          <div className="card__inner-wrapper">
            <p className="card__title">{title}</p>
            <figure className="card__decoration-icon-container">
              <img className="card__decoration-icon" src="" alt="" />
            </figure>
          </div>
        </a>
      </div>
    </>
  );
};

export default SubmenuItem;
