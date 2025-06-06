import { useState } from "react";
import { MdMenu } from "react-icons/md";
import LogoImg from "../assets/logo.svg";
import Cart from "./Cart";
import Avatar from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const NavBar = ({ handleOpen }) => {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const handleCart = () => {
    setIsCartClicked((isCartClicked) => !isCartClicked);
  };
  return (
    <nav className=" flex px-4 mx-auto py-4 relative border-b-gray-300  justify-between items-center md:max-w-[70%] md:border-b ">
      {/* Left: Logo + Menu */}
      <div className="flex min-w-1/3 items-center justify-between">
        <div className="flex cursor-pointer gap-6 items-center justify-around ">
          <button onClick={handleOpen} className="cursor-pointer ">
            <MdMenu className="block lg:hidden" />
          </button>
          <Link to="/">
            <img src={LogoImg} alt="logo" className="sm:mr-5 " />
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
      <div className=" flex cursor-pointer items-center justify-around md:justify-between">
        {isCartClicked && <Cart handleCart={handleCart} />}
        <div className="cursor-pointer md:w-1/3 ">
          <IoCartOutline onClick={handleCart} className="w-6 h-6" />
          {/* <span>{state}</span> */}
        </div>
        <img
          src={Avatar}
          alt="Avatar"
          className="cursor-pointer w-1/4 md:w-1/3 "
        />
      </div>
    </nav>
  );
};

export default NavBar;
