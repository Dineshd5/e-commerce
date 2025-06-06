import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = ({ handleClose }) => {
  return (
    <div className="flex flex-col z-50 p-5 w-1/2 min-h-screen text-gray-600 bg-white border-2 cursor-pointer fixed top-0 left-0 gap-5 ">
      <div>
        <IoCloseOutline onClick={handleClose} />
      </div>
      <Link
        to="/collection"
        className=" hover:border-b-2 w-1/2 hover:border-b-orange-600"
      >
        Collection
      </Link>
      <Link
        to="/men"
        className="hover:border-b-2 w-14 hover:border-b-orange-600"
      >
        Men
      </Link>
      <Link
        to="/women"
        className="hover:border-b-2 w-14 hover:border-b-orange-600"
      >
        Women
      </Link>
      <Link
        to="/about"
        className="hover:border-b-2 w-14 hover:border-b-orange-600 "
      >
        About
      </Link>
      <Link
        to="/contact"
        className=" hover:border-b-2 w-14  hover:border-b-orange-600 "
      >
        Contact
      </Link>
    </div>
  );
};

export default SideBar;
