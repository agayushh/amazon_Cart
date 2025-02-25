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
      setproducts(
        data.map((item) => {
          return {
            ...item,
            cartQuantity: 0,
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
