import Leaf from "../../assets/leaf-xxl.png";
import CardBlog from "../card-blog/card-blog.component";
import Image1 from "../../assets/containers-with-products-table.jpg";
import Image2 from "../../assets/potted-plant.jpg";
import Image3 from "../../assets/eucalyptus.jpg";

import "./blog-section.style.css";

const BlogSection = () => (
  <div className="blog__section">
    <div className="leafs">
      <img src={Leaf} alt="lef" className="leaf" />
      <img src={Leaf} alt="lef" className="leaf-right" />
    </div>
    <h2 className="section__title">Read our blog</h2>
    <h4 className="section__subtitle">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
      dolores reprehenderit ratione, eveniet eaque repellat distinctio fugiat
      itaque optio natus?
    </h4>
    <div className="section__cards">
      <CardBlog image={Image3} />
      <CardBlog image={Image1} />
      <CardBlog image={Image2} />
    </div>
  </div>
);

export default BlogSection;
