import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useRecoilValue } from "recoil";
import { items } from "../states/atoms";
import { Link } from "react-router-dom";

export default function Navbar() {
  const _items = useRecoilValue(items);

  const cartItems = _items.filter((item) => item.cartQuantity > 0);
  const cartCount = cartItems.length;

  return (
    <div>
      <div className="bg-blue-600 p-4 text-white flex justify-between">
        <Link to={"/"}>Amazon.in</Link>
        <div className="flex gap-x-3">
          <p>Hello User, </p>
          {""}

          <Link to="/cart">
            <CiShoppingCart size={22} />
          </Link>

          <div className="rounded-full h-4 w-4 bg-orange-50 absolute ml-[100px] mt-[-6px] text-black text-center text-sm">
            {cartCount}
          </div>
        </div>
      </div>
    </div>
  );
}
