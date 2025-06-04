import MenuImg from "../assets/icon-menu.svg";
import LogoImg from "../assets/logo.svg";
import CartImg from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";

const NavBar = () => {
  return (
    <nav className="flex py-5 justify-around items-center ">
      <div className="flex items-center justify-between min-w-1/3 ">
        <div>
          <img src={LogoImg} alt="logo" />
        </div>
        <div className="flex gap-5 text-gray-600 ">
          <h2>Collection</h2>
          <h2>Men</h2>
          <h2>Women</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <img src={CartImg} alt="cart" />
        <img src={Avatar} alt="Avatar" className="size-1/3 " />
      </div>
    </nav>
  );
};

export default NavBar;
