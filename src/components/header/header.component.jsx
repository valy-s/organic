import Menu from "../menu/menu.component";
import HeaderLogo from "../header-logo/header-logo.component";

import "./header.style.css";

const Header = () => (
  <div className="header__container">
    <HeaderLogo />
    <Menu />
  </div>
);

export default Header;
