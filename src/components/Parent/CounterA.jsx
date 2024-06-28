import React from 'react'
import { useEffect } from 'react'

function CounterA({increaseA,increaseB,valueA,reset}) {
    useEffect(() => {console.log("mounted A");return ()=> {
        reset()
        console.log("unmounted A")
    }},[])

  return (
    <div>
      <h1>A component</h1>
      <button onClick={increaseA}>Increase A</button>
      <button onClick={increaseB}>Increase B</button>
      <h1>
        value of A = {valueA}
      </h1>
    </div>
  )
}

export default CounterA
