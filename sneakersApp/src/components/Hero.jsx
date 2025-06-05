import { useState } from "react";
import product1 from "../assets/image-product-1.jpg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import thumbnailImg from "../data";
import HeroLayout from "../layout/HeroLayout";
import Button from "./Button";

const Hero = () => {

  return (
    <HeroLayout>
      {/*left side bar */}
      <div className="flex xl:ml-15 m-0 flex-auto flex-col gap-y-6 ">
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
      <div className=" p-5 flex-auto lg:min-w-[300px] space-y-10  lg:mt-5 ">
        {/*Content */}
        <div>
          <h5 className="uppercase text-sm font-bold text-gray-600">
            Sneaker company
          </h5>
          <h1 className="text-4xl mt-5 max-w-md font-bold text-gray-600">
            Fall Limited Edition Sneakers
          </h1>
        </div>
        {/*Heading */}
        <div className="max-w-md">
          <p className="text-md text-gray-600">
            The low-profile sneakers are perfect casual wear companion.featuring
            a durable rubber outer sole. they'll withstand everything the
            weather can offer.
          </p>
          {/*Price */}
          <div className="mt-4 flex flex-row justify-between items-center space-y-2 ">
            <div className="flex items-center">
              <h1 className="font-bold text-2xl inline-block">&#36; 125.00</h1>
              <span className="px-2 py-1 ml-4 inline-block bg-gray-800 text-white rounded-sm ">
                50%
              </span>
            </div>
            <div>
              <del className="font-bold text-gray-600">&#36; 125.00</del>
            </div>
          </div>
        </div>
        {/*Buttons  */}

        <div className="flex md:gap-2 sm:flex-row flex-col items-center mb-4">
          {/*increase and decrease button */}
          <div className=" gap-4 space-x-4 lg:gap-4 px-10 py-2 bg-slate-100 rounded-md cursor-pointer ">
            {/*correct here */}

            <button className="text-orange-500 cursor-pointer ">
              <FaPlus className="inline-block" />
            </button>

            <p className="font-medium inline-block ">{0}</p>

            <button className="text-orange-500 cursor-pointer">
              <FaMinus className="inline-block" />
            </button>
          </div>
          <Button />
          {/*Add to Cart button */}
        </div>
      </div>
    </HeroLayout>
  );
};

export default Hero;
