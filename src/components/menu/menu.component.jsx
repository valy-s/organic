import "./menu.style.css";

import MenuItem from "../menu-item/menu-item.component";

const Menu = () => (
  <div className="menu__container">
    <MenuItem link={"Home"} />
    <MenuItem link={"Products"} />
    <MenuItem link={"Blog"} />
    <MenuItem link={"About Us"} />
    <MenuItem link={"Contact"} contact={true} />
  </div>
);

export default Menu;
