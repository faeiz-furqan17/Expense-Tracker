import React from "react";
import { useState } from "react";
import CounterA from "./CounterA";
import CounterB from "./CounterB";
function Parent() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowA(!showA);
        }}
      >
        {showA ? "Remove A" : "show A"}
      </button>

      <button
        onClick={() => {
          setShowB(!showB);
        }}
      >
        {showB ? "remove B" : "show B"}
      </button>
      <div style={{ margin: "50px" }}>
        {showA ? (
          <CounterA
            increamentA={() => {
              setCounterA((previousCounterA) => previousCounterA + 1);
            }}
            increamentB={() => {
              setCounterB((previousCounterB) => previousCounterB + 1);
            }}
            valueA={counterA}
            resetCounter={() => {
              setCounterA(0);
            }}
          />
        ) : (
          <></>
        )}

        {showB ? (
          <CounterB
            increamentA={() => {
              setCounterA((previousCounterA) => previousCounterA + 1);
            }}
            increamentB={() => {
              setCounterB((previousCounterB) => previousCounterB + 1);
            }}
            valueB={counterB}
            resetCounter={() => {
              setCounterB(0);
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Parent;
