import React, { useReducer, useState } from 'react';

function App(){
  const[count,setCount]=useState(0);
  const increment =()=>setCount(count+1);
  const decrement =()=> setCount(count-1);

  return(
    <div>
      <h1>Count:{count}</h1>{/*Displau the current count*/}
        <button onClick={increment}>Inc</button>{/* Increment the count*/}
        <button onClick={decrement}>Dec</button>{/* Decrement the count*/}
        
        
    </div>
  );
}
  function Reducer(count,action){
    if(action=="increment"){
      return count+1;
    }
    if(action==="decrement"){
      return count - 1;
    }
    return count;

  }
  function Dispatch(){
    const[count,dispatch]=useReducer(Reducer,0);
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