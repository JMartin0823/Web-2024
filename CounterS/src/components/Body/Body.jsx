import React, { useState } from 'react';
import './Body.css';

export function Body() {
  const [count, setCount] = useState(0);

  return (
    <body>
    <div className="container">
      <div className="counter">{count}</div>
      <div className="button-group">
        <button className="button" onClick={() => setCount(count - 1)}>-</button>
        <button className="button" onClick={() => setCount(count + 1)}>+</button>
        <button className="button reset" onClick={() => setCount(0)}>RESET</button>
      </div>
    </div>
    </body>
  );
}
