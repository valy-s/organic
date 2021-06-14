import {
  CardNature,
  CardNatureBlue,
} from "../card-nature/card-nature.component";
import Leaf from "../../assets/Group 114.png";
import Sponsor1 from "../../assets/Group 39.png";
import Sponsor2 from "../../assets/Group 55.png";
import Sponsor3 from "../../assets/Group 64.png";
import Sponsor4 from "../../assets/Group 39.png";

import "./section2.style.css";

const Section2 = () => (
  <div className="section2">
    <div className="leafs">
      <img src={Leaf} alt="leafs" className="leaf" />
    </div>
    <div className="section2__nature">
      <h2 className="section__title">Welcome to Nature</h2>
      <h4 className="section__subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        dolorum porro esse a ea ab quaerat aliquam explicabo mollitia quasi!
      </h4>
      <div className="card__section">
        <CardNature />
        <CardNatureBlue />
        <CardNature />
        <CardNature />
      </div>
    </div>
    <div className="section2__sponsors">
      <h2 className="section__title">Proudly presented by</h2>
      <h4 className="section__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident esse
        ab vitae eligendi sequi aliquid rem voluptas officia asperiores dolore.
      </h4>
      <div className="card__section">
        <img src={Sponsor1} alt="sposnor" className="sponsor__image" />
        <img src={Sponsor2} alt="sposnor" className="sponsor__image" />
        <img src={Sponsor3} alt="sposnor" className="sponsor__image" />
        <img src={Sponsor4} alt="sposnor" className="sponsor__image" />
        <img src={Sponsor2} alt="sposnor" className="sponsor__image" />
      </div>
    </div>
  </div>
);

export default Section2;
