import React, { useRef } from "react";

function Uncontrolled() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <button type="submit">Display</button>
      </form>
    </div>
  );
}

export default Uncontrolled;
