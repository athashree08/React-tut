import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
  setCart([...cart, product]);

  setMessage(`${product.name} added to cart`);

  setTimeout(() => {
    setMessage("");
  }, 2000);
};

 
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <BrowserRouter>
    {message && <p className="cart-msg">{message}</p>}
      <Routes>
        
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage cart={cart} removeFromCart={removeFromCart} />

          }
          
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;