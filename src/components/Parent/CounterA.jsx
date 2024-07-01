import React from "react";
import { useEffect } from "react";

function CounterA({ increamentA, increamentB, valueA, resetCounter }) {
  useEffect(() => {
    console.log("mounted A");
    return () => {
      resetCounter();
      console.log("unmounted A");
    };
  }, []);

  return (
    <div>
      <h1>A component</h1>
      <button onClick={increamentA}>Increament A</button>
      <button onClick={increamentB}>Increament A</button>
      <h1>value of A = {valueA}</h1>
    </div>
  );
}

export default CounterA;
