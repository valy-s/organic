import "./social-section.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialSection = () => (
  <div className="social__section__container">
    <h6 className="social__section-title">Follow Us</h6>
    <FontAwesomeIcon className="social__section-icon" icon={faFacebookF} />
    <FontAwesomeIcon className="social__section-icon" icon={faLinkedinIn} />
    <FontAwesomeIcon className="social__section-icon" icon={faTwitter} />
    <FontAwesomeIcon className="social__section-icon" icon={faInstagram} />
  </div>
);

export default SocialSection;
