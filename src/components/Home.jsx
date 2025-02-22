import React, { useEffect } from "react";
import { fetchProducts } from "../data/items";
import Card from "./Card";
import Searchbar from "./Searchbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { items, searchSpecifcItem } from "../states/atoms";

export default function Home() {
  const [products, setproducts] = useRecoilState(items);

  const searchWalItems = useRecoilValue(searchSpecifcItem);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setproducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="flex">
      <div className="font-bold font-serif text-4xl bg-slate-300/90 w-fit p-5 pr-16 h-fit">
        Your Wishlist
        <p className="text-xl text-gray-500">Deafult list</p>
      </div>
      <div className="border-r-2 ml-5 h-screen"></div>

      <div className="w-full">
        <div className="flex flex-grow justify-between">
          <div>
            <p className="flex ml-5 mt-6 text-2xl">Your Wishlist</p>
            <p className="flex ml-5 ">Public</p>
          </div>
          <div className="mt-6 mr-3 ">
            <div className="flex justify-end">
              <p className="text-blue-400">
                Share with other
                <button className="ml-4 text-black">click</button>
              </p>
            </div>
            <div className="mt-20">
              <Searchbar />
              <button className="border-2 p-1 ">Filer and sort </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-2xl mb-3">Products</h2>
          <ul className="grid gap-4 grid-cols-4 ">
            {products.map((product, index) => (
              <Card
                product={product}
                key={index}
                isPresent={searchWalItems.some(
                  (item) => item.id === product.id
                )}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
