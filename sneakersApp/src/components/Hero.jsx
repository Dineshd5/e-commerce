import { useState } from "react";
import product1 from "../assets/image-product-1.jpg";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import thumbnailImg from "../data";
import HeroLayout from "../layout/HeroLayout";
import Button from "./Button";

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <HeroLayout>
      <section className="flex lg:gap-10  flex-col lg:flex-row lg:mt-6">
        {/*left side bar */}
        <div className="flex flex-col gap-y-6 flex-1">
          <img
            src={product1}
            alt="product"
            className="lg:w-96 lg:rounded-xl lg:mt-10 "
          />
          <ul className="lg:flex gap-x-6 hidden">
            {thumbnailImg.map((item, _) => (
              <li
                key={item.id}
                className="hover:border-orange-600 hover:border-2 
                rounded-sm w-20 cursor-pointer  "
              >
                <img
                  src={item.img}
                  alt="image"
                  className="rounded-sm hover:opacity-30 cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
        {/*right side bar */}
        <div className=" flex-1 content-center p-5 lg:p-0 space-y-10 lg:mt-5 ">
          {/*Content */}
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
          {/*Buttons  */}
          <div className="flex gap-10 md:flex-row flex-col items-center xl:max-w-5xl min-w-50% ">
            <div className="px-10 py-2 flex items-center justify-evenly gap-6 bg-slate-100 rounded-md cursor-pointer max-w-sm">
              {/*correct here */}
              <button className="text-orange-500 cursor-pointer ">
                <img src={plus} alt="plus" />
              </button>
              <p className="font-medium">{0}</p>
              <button className="text-orange-500 cursor-pointer">
                <img src={minus} alt="minus" />
              </button>
            </div>
            <Button />
          </div>
        </div>
      </section>
    </HeroLayout>
  );
};

export default Hero;
