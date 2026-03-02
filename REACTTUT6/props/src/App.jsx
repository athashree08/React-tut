function Car(props) {
  return (
    <div>
      <h2>{props.brand}</h2>
      <p>Color: {props.color}</p>
      <p>Price: {props.price}</p>
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