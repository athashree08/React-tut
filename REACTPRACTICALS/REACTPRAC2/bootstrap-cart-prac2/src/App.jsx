import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 3, name: "Watch", price: 1500 },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Products</h1>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 col-sm-6 mb-3" key={p.id}>
            <div className="card text-center">
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>₹{p.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;