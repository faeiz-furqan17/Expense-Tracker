import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function login({ login }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.username && loginData.password == "admin") {
      login();
      navigate("/dashboard");
      setLoginData({
        username: "",
        password: "",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={loginData.username}
          onChange={handleChange}
          name="username"
        />
        <input
          type="text"
          placeholder="password"
          value={loginData.password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default login;
