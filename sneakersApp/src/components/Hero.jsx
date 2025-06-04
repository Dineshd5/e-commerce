import product1 from "../assets/image-product-1.jpg";
import cart from "../assets/icon-cart.svg";
import thumbnailImg from "../data";
import { IoCartOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <header className="max-w-[70%] mt-2 border-t border-t-gray-300 mx-auto ">
      <section className="flex mt-6">
        {/*left side bar */}
        <div className="flex flex-col gap-y-6 flex-1">
          <img
            src={product1}
            alt="product"
            className="w-96 rounded-xl mt-10 "
          />

          <ul className="flex gap-x-6 ">
            {thumbnailImg.map((item, i) => (
              <li
                key={item.id}
                className="hover:border-orange-600 hover:border-2 rounded-sm w-20 "
              >
                <img
                  src={item.img}
                  alt="image"
                  className="rounded-sm hover:opacity-30 "
                />
              </li>
            ))}
          </ul>
        </div>
        {/*right side bar */}
        <div className=" flex-1 content-center space-y-10 mt-5 ">
          <div>
            <h5 className="uppercase text-sm font-bold text-gray-500">
              Sneaker company
            </h5>
            <h1 className="text-4xl mt-5 max-w-md font-bold text-gray-800">
              Fall Limited Edition Sneakers
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-md text-gray-600">
              The low-profile sneakers are perfect casual wear
              companion.featuring a durable rubber outer sole. they'll withstand
              everything the weather can offer.
            </p>
            <div className="flex mt-4 items-center gap-6">
              <h1 className="font-bold text-2xl">&#36; 125.00</h1>
              <span className="px-2 py-1 bg-gray-800 text-white rounded-sm">
                50%
              </span>
            </div>
            <del className="font-bold text-gray-600">&#36; 125.00</del>
          </div>
          <div className="flex gap-10  ">
            <div className="px-6 py-2 flex items-center justify-evenly gap-6 bg-slate-100 rounded-md">
              <button className="text-orange-500 ">+</button>
              <p className="font-medium">{0}</p>
              <button className="text-orange-500">-</button>
            </div>
            <div>
              <button className="bg-orange-500 flex text-black items-center gap-4 justify-around font-medium px-10 py-2 rounded-md">
                <IoCartOutline />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
