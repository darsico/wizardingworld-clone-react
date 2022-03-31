import { Player } from "@lottiefiles/react-lottie-player";
import { useRef} from "react";
import lottieMenu from "../assets/images/header/lottie-menu-icon.json";

const MenuIcon = ({navbarOpen}) => {
  return <Player id="header-menu-icon" className="header__menu-icon" src={lottieMenu} />;
};

export default MenuIcon;
