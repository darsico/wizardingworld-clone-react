import { newsFeaturesSubMenuData as newsFeaturesData } from "../assets/data/headerNavlist.js";
import SubmenuItem from "./SubmenuItem.jsx";
const NewsFeaturesSubmenu = () => {
  return (
    <div className="sub-menu__wrapper">
      <div className="sub-menu__inner-wrapper">
        <div className="sub-menu__container">
          {" "}
          {newsFeaturesData.map((dataItem) => {
            return <SubmenuItem dataItem={dataItem} />;
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default NewsFeaturesSubmenu;
