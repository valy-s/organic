import "./social-section.style.css";

import Facebook from "../../assets/Group 99.png";
import Linkedin from "../../assets/Group 100.png";
import Twiter from "../../assets/Group 105.png";
import Instagram from "../../assets/Group 99.png";

const SocialSection = () => (
  <div className="social__section__container">
    <h6 className="social__section-title">Follow Us</h6>
    <img src={Facebook} alt="facebook-icon" className="social__section-icon" />
    <img src={Linkedin} alt="linkedin-icon" className="social__section-icon" />
    <img src={Twiter} alt="twiter-icon" className="social__section-icon" />
    <img
      src={Instagram}
      alt="instagram-icon"
      className="social__section-icon"
    />
  </div>
);

export default SocialSection;
