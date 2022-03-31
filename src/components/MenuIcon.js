import { Player } from "@lottiefiles/react-lottie-player";
import lottieMenu from "../assets/images/header/lottie-menu-icon.json";

const MenuIcon = () => {
  return <Player id="header-menu-icon" className="header__menu-icon" src={lottieMenu} />;
};

export default MenuIcon;
