import HeaderLogo from "../../components/header-logo/header-logo.component";

import "./footer-info.style.css";

const FooterInfo = () => (
  <div className="footer__info-container">
    <HeaderLogo white={true} />
    <p className="footer__info-text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In adipisci
      quisquam placeat.
    </p>
    <h6 className="footer__info-copyright">@ Copyright 2020 Nature</h6>
  </div>
);

export default FooterInfo;
