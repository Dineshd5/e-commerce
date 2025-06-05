import MenuImg from "../assets/icon-menu.svg";
import LogoImg from "../assets/logo.svg";
import CartImg from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex py-4 justify-around items-center">
      <div className="flex items-center justify-between min-w-1/3">
        <div className="cursor-pointer flex gap-6 items-center justify-around">
          <Link to="/">
            <img src={MenuImg} alt="logo" className="lg:hidden block" />
          </Link>
          <Link to="/">
            <img src={LogoImg} alt="logo" />
          </Link>
        </div>
        <div className="lg:flex gap-5 cursor-pointer hidden text-gray-600 ">
          <Link
            to="/collection"
            className="hover:border-b-2 hover:border-b-orange-600"
          >
            Collection
          </Link>
          <Link
            to="/men"
            className="hover:border-b-2 hover:border-b-orange-600"
          >
            Men
          </Link>
          <Link
            to="/women"
            className=" hover:border-b-2 hover:border-b-orange-600"
          >
            Women
          </Link>
          <Link
            to="/about"
            className=" hover:border-b-2 hover:border-b-orange-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className=" hover:border-b-2 hover:border-b-orange-600"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between cursor-pointer">
        <img src={CartImg} alt="cart" className="cursor-pointer" />
        <img src={Avatar} alt="Avatar" className="size-1/3" />
      </div>
    </nav>
  );
};

export default NavBar;
