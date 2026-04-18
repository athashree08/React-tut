import { useState } from 'react';

function HoverExample() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2
        onMouseEnter={() => setMessage("Mouse is over the text!")}
        onMouseLeave={() => setMessage("Mouse left the text!")}
      >
        Hover over me
      </h2>

      <p>{message}</p>
    </div>
  );
}

export default HoverExample;