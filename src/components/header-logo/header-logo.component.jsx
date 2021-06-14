import Logo from "../../assets/Group 226.png";
import "./header-logo.style.css";

const HeaderLogo = () => (
  <div className="header__logo">
    <img src={Logo} className="logo" alt="logo" />
  </div>
);

export default HeaderLogo;
