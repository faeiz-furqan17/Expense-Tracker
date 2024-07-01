import React, { useEffect } from "react";

function CounterB({ increamentA, increamentB, valueB, resetCounter }) {
  useEffect(() => {
    console.log("mounted B");
    return () => {
      resetCounter();
      console.log("unmounted B");
    };
  }, []);
  return (
    <div>
      <h1>B component</h1>
      <button onClick={increamentA}>Increase A</button>
      <button onClick={increamentB}>Increase B</button>
      <h1>value of B = {valueB}</h1>
    </div>
  );
}

export default CounterB;
