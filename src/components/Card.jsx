import React, { useEffect, useState } from "react";

export default function Card({ product, isPresent }) {
  const [enableAddtoCart, setEnableAddtoCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <li
      key={product.id}
      className={`border-2 p-4 flex flex-col group ${isPresent ? "" : "hidden"} `}

    >
      <img src={product.image} alt={product.title} className="h-80 w-80 group-hover:scale-105  duration-200" />
      <div className="flex-grow" />
      <p className="text-wrap w-fit h-[80px] flex items-end">
        {product.title} - ${product.price}
      </p>
      <button
        className="mt-3 bg-yellow-500 font-bold p-2"

        onClick={() => {
          setEnableAddtoCart((prevState) => !prevState);
          if (quantity === 0 && !enableAddtoCart) {
            setQuantity(1);
          }
        }}
      >
        {enableAddtoCart ? "added to cart" : "add to cart"}
      </button>

      <div
        className={`flex text-lg mt-2 justify-center ${
          enableAddtoCart ? "" : "invisible"
        }`}
      >
        <button
          className="border-2 px-2"
          onClick={() => setQuantity((c) => c - 1)}
        >
          -
        </button>
        <p className="border-2 px-2">{quantity}</p>
        <button
          className="border-2  px-2"
          onClick={() => setQuantity((c) => c + 1)}
        >
          +
        </button>
      </div>
    </li>
  );
}
