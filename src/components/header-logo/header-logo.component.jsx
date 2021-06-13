import Logo from "../../assets/blue_flower.svg";
import "./header-logo.style.css";

const HeaderLogo = ({ white }) => (
  <div className={`header-logo ${white ? "header-logo-white" : null}`}>
    <img src={Logo} className="logo" alt="logo" />
    <p>organic</p>
  </div>
);

export default HeaderLogo;
