import React from "react";
import { Link } from "react-router-dom";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Cart</h1>
      <Link to="/">Back to Products</Link>

      {cart.length === 0 && <p>No items</p>}

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default CartPage;