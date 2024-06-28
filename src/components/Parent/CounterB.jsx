import React, { useEffect } from 'react'

function CounterB({increaseA, increaseB,valueB,reset}) {
   useEffect(() => {console.log("mounted B");
    return ()=>{        reset()
        console.log("unmounted B")}},[])
  return (
    <div>
        <h1>B component</h1>
      <button onClick={increaseA}>Increase A</button>
      <button onClick={increaseB}>Increase B</button>
      <h1>
        value of B = {valueB}
      </h1>
    
    </div>
  )
}

export default CounterB
