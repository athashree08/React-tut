function Car({brand,color,price}){
  return (
    <div>
      <h2>{brand}</h2>
      <p>Color: {color}</p>
      <p>Price: {price}</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <Car brand="Toyota" color="Red" price="10 lakhs" />
      <Car brand="BMW" color="Black" price="50 lakhs" />
    </div>
  );
}

export default App;