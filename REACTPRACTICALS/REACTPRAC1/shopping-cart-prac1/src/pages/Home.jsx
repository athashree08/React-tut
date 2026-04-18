import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

function Home({ addToCart }) {
  const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    

  
  ];

  return (
    <div className="container">
      <h1>Products</h1>
      <Link to="/cart">Go to Cart</Link>

      <div className="products">
        {products.map((p) => (
          <Product key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;