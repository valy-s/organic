import { Avatar } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import Image from "../../assets/woman-in-brown.jpg";

import "./card-testimonials.css";

const CardTestimonials = () => (
  <div className="card__testimonials-container">
    <Avatar className="card__testimonials-img" alt="Jane Doe" src={Image} />
    <h4 className="card__testimonials-name">Jane Doe</h4>
    <Rating />
    <p className="card__testimonials-text">
      Thank you for all the amazing produce and products you deliver each
      week... you make my life so easy and bring goodness into our family
      eating. I've been roasting a lot of brussel sprouts and
    </p>
  </div>
);

export default CardTestimonials;
