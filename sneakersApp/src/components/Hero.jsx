import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import productImg from "../data";
import HeroLayout from "../layout/HeroLayout";
import Button from "./Button";
import { IoCloseOutline } from "react-icons/io5";

const Hero = ({ cart, dispatch, state, handleAddToCart }) => {
  const [index, setIndex] = useState(0);
  const [previewProduct, setPreviewProduct] = useState(false);

  const data = [...productImg];
  // console.log("data", data);
  // console.log(cartData);

  const handleChange = (i) => {
    setIndex(i);
    setPreviewProduct(true);
  };

  return (
    <HeroLayout>
      {/*left side */}
      <div className="flex flex-auto flex-col m-0 gap-y-6 xl:ml-15">
        <img
          src={data[1].MainImg}
          alt="product"
          className="lg:w-96 lg:mt-10 lg:rounded-xl"
        />
        <ul className="hidden gap-x-6 lg:flex">
          {data.map((item, i) => (
            <li
              onClick={() => handleChange(i)}
              key={item.id}
              className="w-20 rounded-sm cursor-pointer hover:border-orange-600 hover:border-2"
            >
              <img
                src={item.ThumbImg}
                alt="image"
                className="rounded-sm cursor-pointer hover:opacity-30"
              />
            </li>
          ))}
        </ul>
      </div>
      {previewProduct ? (
        <>
          <div className=" fixed top-0 left-0 w-screen bg-black opacity-75 z-40 h-screen "></div>
          <div className=" fixed z-50 right-150">
            <div className=" flex flex-auto flex-col m-0 gap-y-6 xl:ml-15">
              <img
                src={data[index].MainImg}
                alt="product"
                className="lg:w-96 lg:mt-10 lg:rounded-xl"
              />
              <IoCloseOutline
                onClick={() => {
                  setPreviewProduct(!previewProduct);
                }}
                className="fixed z-60 size-[30px] text-white top-25 right-150 cursor-pointer"
              />
              <ul className="hidden gap-x-6 lg:flex">
                {data.map((item, i) => (
                  <li
                    onClick={() => handleChange(i)}
                    key={item.id}
                    className="w-20 rounded-sm cursor-pointer hover:border-orange-600 hover:border-2"
                  >
                    <img
                      src={item.ThumbImg}
                      alt="image"
                      className="rounded-sm cursor-pointer hover:opacity-30"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
      {/*right side  */}
      <div className=" flex-auto p-5 space-y-10 lg:min-w-[300px] lg:mt-5">
        {/*Content */}
        <div>
          <h5 className="text-sm font-bold text-gray-600 uppercase">
            Sneaker Company
          </h5>
          <h1 className="max-w-md mt-5 text-4xl font-bold text-gray-600">
            Fall Limited Edition Sneakers
          </h1>
        </div>
        {/*Heading */}
        <div className="max-w-md">
          <p className="text-md text-gray-600 ">
            These low profiles sneaker are your perfect casual wear
            companion.Featuring a durable rubber outer sole, they'll withsytand
            everything the weather can offer.
          </p>
          {/*Price */}
          <div className="flex flex-row mt-4 space-y-2 justify-between items-center">
            <div className="flex items-center">
              <h1 className="inline-block font-bold text-2xl">
                {`$${(cart?.[0]?.price ?? 125).toFixed(2)}`}
              </h1>
              <span className=" inline-block  px-2 py-1 ml-4  text-white  bg-gray-800 rounded-sm">
                50%
              </span>
            </div>
            <div>
              <del className="font-bold text-gray-600">
                {`$${(cart?.[0]?.price ?? 125).toFixed(2)}`}
              </del>
            </div>
          </div>
        </div>
        {/*Buttons  */}

        {/*increase and decrease button */}
        <div className="flex flex-col justify-center md:justify-start mb-4 items-center sm:flex-row md:gap-2">
          <div className="space-x-4 px-10 py-2 bg-slate-100 rounded-md cursor-pointer gap-4 lg:gap-4">
            <button
              className="text-orange-500 cursor-pointer"
              onClick={() => dispatch({ type: "decrease" })}
            >
              <FaMinus className="inline-block" />
            </button>
            <p className=" inline-block font-medium ">{state}</p>

            <button
              className=" text-orange-500 cursor-pointer  "
              onClick={() => dispatch({ type: "increase" })}
            >
              <FaPlus className="inline-block " />
            </button>
          </div>
          <Button handleAddToCart={handleAddToCart} />
          {/*Add to Cart button */}
        </div>
      </div>
    </HeroLayout>
  );
};

export default Hero;
