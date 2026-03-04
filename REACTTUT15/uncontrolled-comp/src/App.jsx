import React,{useRef} from 'react';
function UncontrolledComponent(){
  const inputRef=useRef(null);
  const handleFocus =() => {
    inputRef.current.select();

  };
  return(
    <div>
      <input type="text" ref={inputRef} defaultValue="Initial Value"/>
      <button onClick={handleFocus}>Select Text</button>
    </div>
  );
}
export default UncontrolledComponent;