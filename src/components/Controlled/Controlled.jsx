import React, { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <h1>Controlled Component</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
        <button type="submit">Display</button>
      </form>
    </div>
  );
}

export default Controlled;
