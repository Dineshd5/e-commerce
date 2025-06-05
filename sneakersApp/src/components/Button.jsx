import { IoCartOutline } from "react-icons/io5";
const Button = () => {
  return (
    <button className="bg-orange-500 cursor-pointer flex text-black items-center gap-4 justify-around font-medium px-10 py-2 rounded-md">
      <IoCartOutline />
      Add to cart
    </button>
  );
};

export default Button;
