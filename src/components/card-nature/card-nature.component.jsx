import Image from "../../assets/Group 207.png";
import Image2 from "../../assets/Group 205.png";

import "./card-nature.style.css";

export const CardNature = () => (
  <div className="card__nature__container">
    <img src={Image} alt="vegetables" className="card__nature__img" />
  </div>
);

export const CardNatureBlue = () => (
  <div className="card__nature__container">
    <img src={Image2} alt="vegetables" className="card__nature__img" />
  </div>
);
