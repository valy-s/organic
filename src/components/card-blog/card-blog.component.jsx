import "./card-blog.style.css";

export const CardBlog = ({ image }) => (
  <div className="card__blog-container">
    <img src={image} alt="blog post" className="card__blog-img" />
    <h4 className="card__blog-title">Blog Post One</h4>
    <p className="card__blog-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      voluptates adipisci quos.
    </p>
    <a href="/#" className="card__blog-link">
      Read More
    </a>
  </div>
);

export default CardBlog;
