import React from "react";
import { Trash2 } from "lucide-react"; // or use any trash icon SVG
import thumbnailImg from "../data.js";

export default function Cart({ handleCart }) {
  return (
    <div className=" absolute top-15 left-2 sm:left-200 w-[300px] p-4 rounded-xl shadow-xl bg-white">
      <h2 className="font-bold text-lg mb-4">Cart</h2>
      {thumbnailImg.map((item, _) => (
        <ul>
          <li className="flex items-center gap-3 mb-4">
            <img
              src={item.MainImg}
              alt="Product"
              className="w-12 h-12 rounded-md"
            />
            <div className="flex-1 text-sm">
              <p className="text-gray-800">{item.title}</p>
              <p className="text-gray-800">{`$${item.price.toFixed(2)}`}</p>
            </div>
            <button>
              <Trash2 size={16} className="text-gray-400 hover:text-red-500" />
            </button>
          </li>
        </ul>
      ))}

      <button
        onClick={handleCart}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold"
      >
        Checkout
      </button>
    </div>
  );
}
