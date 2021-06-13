import Image from "../../assets/vegetables.png";

import "./card-nature.style.css";

const CardNature = ({ blue }) => (
  <div
    className={`card__nature__container ${
      blue ? "card__nature__container-blue" : null
    }`}
  >
    <div className="card__nature__img-container">
      <img src={Image} alt="vegetables" className="card__nature__img" />
    </div>
    <h4 className="card__nature__title">Organic Food</h4>
    <p className="card__nature__text">Lorem ipsum dolor sit amet consectetur</p>
  </div>
);

export default CardNature;
