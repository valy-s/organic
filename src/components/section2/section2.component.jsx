import CardNature from "../card-nature/card-nature.component";
import Leaf from "../../assets/leaf-xxl.png";
import Sponsor1 from "../../assets/sponsor1.jpg";
import Sponsor2 from "../../assets/sponsor2.jpg";
import Sponsor3 from "../../assets/sponsor3.jpg";
import Sponsor4 from "../../assets/sponsor4.jpg";

import "./section2.style.css";

const Section2 = () => (
  <div className="section2">
    <div className="leafs">
      <img src={Leaf} alt="lef" className="leaf" />
      <img src={Leaf} alt="lef" className="leaf-right" />
    </div>
    <div className="section2__nature">
      <h2 className="section__title">Welcome to Nature</h2>
      <h4 className="section__subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        dolorum porro esse a ea ab quaerat aliquam explicabo mollitia quasi!
      </h4>
      <div className="card__section">
        <CardNature />
        <CardNature blue={true} />
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
