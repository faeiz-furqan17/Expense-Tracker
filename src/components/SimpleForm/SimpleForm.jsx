import React from "react";
import { useState } from "react";
function SimpleForm(props) {
  const [formData, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  };

  return props.show ? (
    <div>
      <section className="form-section">
        <h1>Simple Form</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  ) : (
    <></>
  );
}

export default SimpleForm;
