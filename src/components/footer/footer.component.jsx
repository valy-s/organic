import SocialSection from "../social-section/social-section.component";
import FooterInfo from "../footer-info/footer-info.component";
import FooterMenu from "../footer-menu/footer-menu.component";

import "./footer.style.css";

const Footer = () => (
  <div className="footer__container">
    <FooterInfo />
    <FooterMenu />
    <SocialSection />
  </div>
);

export default Footer;
