import React from "react";
import { useSetRecoilState } from "recoil";
import { items } from "../states/atoms";

function saveToLocalStorage(id, updatedCount) {
  let prevItems = localStorage.getItem("cartItems");
  prevItems = JSON.parse(prevItems) ?? [];

  const newItems = [...prevItems];
  let exists = false;
  for (let i = 0; i < newItems.length; i++) {
    const item = newItems[i];
    if (item.id === id) {
      exists = true;
      newItems[i].updatedCount = updatedCount;
    }
  }

  if (exists === false) {
    newItems.push({
      id,
      updatedCount,
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(newItems));
}

export default function Card({ product, isPresent }) {
  const setItems = useSetRecoilState(items);

  const enableAddtoCart = product.cartQuantity > 0;

  return (
    <li
      key={product.id}
      className={`border-2 p-4 flex flex-col group ${
        isPresent ? "" : "hidden"
      } `}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-80 w-80 group-hover:scale-105  duration-200"
      />
      <div className="flex-grow" />
      <p className="text-wrap w-fit h-[80px] flex items-end">
        {product.title} - ${product.price}
      </p>
      <button
        className="mt-3 bg-yellow-500 font-bold p-2"
        onClick={() => {
          if (product.cartQuantity === 0) {
            saveToLocalStorage(product.id, 1);
            setItems((prev) =>
              prev.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      cartQuantity: 1,
                    }
                  : item
              )
            );
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
          onClick={() => {
            saveToLocalStorage(product.id, product.cartQuantity - 1);

            setItems((prev) =>
              prev.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      cartQuantity: item.cartQuantity - 1,
                    }
                  : item
              )
            );
          }}
        >
          -
        </button>
        <p className="border-2 px-2">{product.cartQuantity}</p>
        <button
          className="border-2  px-2"
          onClick={() => {
            saveToLocalStorage(product.id, product.cartQuantity + 1);
            setItems((prev) =>
              prev.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      cartQuantity: item.cartQuantity + 1,
                    }
                  : item
              )
            );
          }}
        >
          +
        </button>
      </div>
    </li>
  );
}
