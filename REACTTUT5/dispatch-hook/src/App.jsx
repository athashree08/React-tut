import { useReducer } from 'react'


function App() {
  const[count,dispatch]=useReducer(reducer,0);
  const increment =()=>dispatch("increment");
  const decrement =()=> dispatch("decrement");
    return(
      <div>
        <h1>Count:{count}</h1>{/*Displau the current count*/}
        <button onClick={increment}>Increment</button>{/* Increment the count*/}
        <button onClick={decrement}>Decrement</button>{/* Decrement the count*/}
          
      </div>

    );
  
}

export default App;
 