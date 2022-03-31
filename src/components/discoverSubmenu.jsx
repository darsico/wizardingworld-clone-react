import { discoverSubMenuData as discoverData } from "../assets/data/headerNavlist.js";
import SubmenuItem from "./SubmenuItem";
const DiscoverSubmenu = () => {
  return (
    <div className="sub-menu__wrapper">
      <div className="sub-menu__inner-wrapper">
        <div className="sub-menu__container">
          {" "}
          {discoverData.map((dataItem) => {
            return <SubmenuItem dataItem={dataItem} />;
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSubmenu;
