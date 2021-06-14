import MenuItem from "../menu-item/menu-item.component";
import MobileMenu from "../mobile-menu/mobile-menu.component";
import "./menu.style.css";

const Menu = () => {
  const mobile = () => (window.innerWidth < 850 ? true : false);
  console.log(window.innerWidth, mobile());

  return mobile() ? (
    <MobileMenu />
  ) : (
    <div className="menu__container">
      <MenuItem link={"Home"} />
      <MenuItem link={"Products"} />
      <MenuItem link={"Blog"} />
      <MenuItem link={"About Us"} />
      <MenuItem link={"Contact"} contact={true} />
    </div>
  );
};

export default Menu;
