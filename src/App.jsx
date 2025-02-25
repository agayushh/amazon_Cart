import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddtoCart from "./components/AddtoCart";
import { useRecoilState } from "recoil";
import { fetchProducts } from "./data/items";
import { items } from "./states/atoms";
import { useEffect } from "react";

function App() {
  const [products, setproducts] = useRecoilState(items);
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      const grahsti = localStorage.getItem("cartItems");
      const parsedGrahsti = JSON.parse(grahsti) ?? [];
      setproducts(
        data.map((item) => {
          const _item = parsedGrahsti.find((item2) => item2.id === item.id);
          // {id:1,updatedCount:5}
          const cartQuantity = _item ? _item.updatedCount : 0;
          return {
            ...item,
            cartQuantity,
          };
        })
      );
    };
    getProducts();
  }, []);

  return (
    <BrowserRouter>
      <div className="h-[200vh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<AddtoCart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
