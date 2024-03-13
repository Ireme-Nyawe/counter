import { useState } from "react";

export default function Counter() {
  const [counts, setCount] = useState(0);
  function handleMinus() {
    setCount((counted) => counted - 1);
  }
  function handlePlus() {
    setCount((counted) => counted + 1);
  }
  return (
    <div className="counter-container">
      <div className="counted">{counts}</div>
      <div className="counter-sign">
        <span className="sign" onClick={handleMinus}>
          -
        </span>
        <span className="sign" onClick={handlePlus}>
          +
        </span>
      </div>
    </div>
  );
}
