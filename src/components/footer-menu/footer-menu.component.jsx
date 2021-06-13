import "./footer-menu.style.css";
import FooterLink from "../footer-link/footer-link.component";

const FooterMenu = () => (
  <div className="footer__menu-container">
    <h6 className="social__section-title">Information</h6>
    <div className="social__section-links">
      <FooterLink link={"About Us"} />
      <FooterLink link={"Products"} />
      <FooterLink link={"Contact Us"} />
      <FooterLink link={"Terms of Service"} />
      <FooterLink link={"About Us"} />
      <FooterLink link={"Products"} />
    </div>
  </div>
);

export default FooterMenu;
