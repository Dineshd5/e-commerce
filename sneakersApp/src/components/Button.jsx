import { IoCartOutline } from "react-icons/io5";
// adjust the path based on your file structure

const Button = ({ handleAddToCart }) => {
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-orange-500 text-nowrap cursor-pointer flex items-center text-black gap-4 font-medium xl:px-16 px-5 py-2 rounded-md mt-5 md:mt-0"
      >
        <IoCartOutline className="inline-block mr-5" />

        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default Button;
