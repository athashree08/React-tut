import React, { useState } from "react";

function ControlledComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A name was submitted: " + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledComponent;