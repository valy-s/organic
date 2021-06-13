import { Button } from "@material-ui/core";
import HeroLogo from "../../assets/blue_flower.svg";
import Lilly from "../../assets/arum-lily.png";

import "./hero.style.css";

const Hero = () => (
  <div className="hero__container">
    <div className="hero__text">
      <h4 className="hero__text-subtitle">Healthy life with</h4>
      <h1 className="hero__text-title">Nature Organic</h1>
      <p className="hero__text-p">
        Vegetables are the edible parts of a plant that is used in cooking or
        can be eaten now.
      </p>
      <Button variant="contained" color="primary" className="hero__text-btn">
        Explore now
      </Button>
    </div>
    <div className="hero__image">
      <img src={HeroLogo} className="hero__logo" alt="logo" />
      <img src={Lilly} className="hero__lilly" alt="lilly" />
    </div>
  </div>
);

export default Hero;
