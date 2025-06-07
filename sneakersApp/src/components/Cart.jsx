import React from "react";
import { Trash2 } from "lucide-react"; // or use any trash icon SVG
import Image from "../assets/image-product-1-thumbnail.jpg";
export default function Cart({ cart = [], handleCart, handleDeleteFromCart }) {
  return (
    <div className=" absolute top-15 left-10 sm:left-80 lg:left-100 xl:left-150 w-[230px] md:w-[300px] p-4 rounded-xl shadow-xl bg-white">
      <h2 className="font-bold text-lg mb-4">Cart</h2>
      {cart?.length === 0 ? (
        <p className="py-3"> No items in the cart </p>
      ) : (
        <>
          {cart.map((item) => (
            <li key={item.id} className="flex items-center gap-3 mb-4">
              <img
                src={item?.MainImg ?? { Image }}
                alt="Product"
                className="w-12 h-12 rounded-md "
              />
              <div className="flex-1 text-sm">
                <p className="text-gray-800">Fall Limited Edition Sneakers</p>
                <p className="text-gray-800">
                  ${item.price} × {item.quantity}
                  <span className="font-bold"> ${item.total}</span>
                </p>
              </div>
              <button
                onClick={() => {
                  handleDeleteFromCart(item.id);
                }}
              >
                <Trash2
                  size={16}
                  className="text-gray-400 hover:text-red-500"
                />
              </button>
            </li>
          ))}
        </>
      )}

      <button
        onClick={() => handleCart(false)}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold"
      >
        Checkout
      </button>
    </div>
  );
}
