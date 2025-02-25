import React, { useState, useEffect } from "react";
import { fetchProducts } from "../data/items";
import { useRecoilState, useSetRecoilState } from "recoil";
import { items } from "../states/atoms";

export default function AddtoCart() {
  const [samaan, setSamaan] = useRecoilState(items);

  const cartedItem = samaan.filter((every_item) => every_item.cartQuantity > 0);

  return (
    <div>
      <div className="bg-slate-300 w-[70%] mt-10 ml-5 h-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <div className="space-y-4">
          {cartedItem.map((product) => (
            <div
              key={product.id}
              className="flex items-center bg-white p-4 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-contain mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => {
                      setSamaan((prev) => {
                        return prev.map((item) => {
                          return item.id === product.id
                            ? {
                                ...item,
                                cartQuantity: item.cartQuantity - 1,
                              }
                            : item;
                        });
                      });
                    }}
                  >
                    -
                  </button>
                  <span className="mx-2">{product.cartQuantity}</span>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => {
                      setSamaan((prev) =>
                        prev.map((item) =>
                          product.id === item.id
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
