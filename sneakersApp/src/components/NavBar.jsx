import { MdMenu } from "react-icons/md";
import LogoImg from "../assets/logo.svg";
import CartImg from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
    console.log(isClicked);
  };

  return (
    <nav className="flex md:max-w-[70%] px-4 md:border-b border-b-gray-300 mx-auto py-4 justify-between items-center ">
      <div className="flex items-center justify-between min-w-1/3">
        <div className="cursor-pointer flex gap-6  items-center justify-around">
          <button className="cursor-pointer" onClick={handleClick}>
            <MdMenu className="lg:hidden block" />
          </button>
          <Link to="/">
            <img src={LogoImg} alt="logo" className="sm:mr-5" />
          </Link>
        </div>
        {isClicked ? (
          <div className="flex flex-col gap-5 z-10 border-2  w-1/4 h-screen cursor-pointer text-gray-600 ">
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
        ) : null}
      </div>
      <div className="flex items-center justify-around md:justify-between cursor-pointer">
        <img src={CartImg} alt="cart" className="cursor-pointer " />
        <img src={Avatar} alt="Avatar" className="md:size-1/3 size-1/4" />
      </div>
    </nav>
  );
};

export default NavBar;
