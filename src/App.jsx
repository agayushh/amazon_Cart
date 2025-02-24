import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddtoCart from "./components/AddtoCart";

function App() {
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
