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
      <h1>Counter A = {counterA}</h1>
      <button onClick={()=>{setShowA(true)}} >show A</button> <button onClick={()=>{setShowA(false)}}>remove A</button>
      <h1>Counter B = {counterB}</h1>
      <button onClick={()=>{setShowB(true)}} >show B</button> <button onClick={()=>{setShowB(false)}}>remove B</button>
      <div style={{ margin: "50px" }}>
        {showA ? (
          <CounterA
            increaseA={() => {
              setCounterA(counterA + 1);
            }}
            increaseB={() => {
              setCounterB(counterB + 1);
            }}
            valueA={counterA}
            reset={() => {
              setCounterA(0);
            }}
          />
        ) : (
          <></>
        )}

        {showB ? (
          <CounterB
            increaseA={() => {
              setCounterA(counterA + 1);
            }}
            increaseB={() => {
              setCounterB(counterB + 1);
            }}
            valueB={counterB}
            reset={() => {
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
