import "./menu-item.style.css";

const MenuItem = ({ link, contact }) => (
  <a
    href="/#"
    className={`menu__item ${contact ? "menu__item-contact" : null}`}
  >
    {link}
  </a>
);

export default MenuItem;
