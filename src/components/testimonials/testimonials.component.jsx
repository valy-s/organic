import CardTestimonials from "../../components/card-testimonials/card-testimonials.component";
import Leaves from "../../assets/Group 134.png";
import Quote from "../../assets/Group 86.png";

import "./testimonials.css";

const TestimonialsSection = () => (
  <div className="testimonials__section">
    <img src={Leaves} alt="leaves" className="testimonials__image" />
    <img src={Quote} alt="leaves" />
    <CardTestimonials />
    <div className="newsletter">
      <h2 className="section__title">Subscribe to our newsletter</h2>
      <h4 className="section__subtitle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius cum vero
        suscipit iure ab distinctio mollitia blanditiis, pariatur optio. Quo?
      </h4>
      <form className="testimonials__form">
        <input
          type="text"
          placeholder="Enter your email address"
          className="testimonials__form-input"
        />
        <button type="submit" className="testimonials__from-button">
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

export default TestimonialsSection;
