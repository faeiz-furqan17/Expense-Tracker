import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoginRounded } from "@mui/icons-material";
import style from "./Login.module.scss";

function Login({ login }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.username && loginData.password === "admin") {
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
    <div className={style.mainContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="username"
            name="username"
            label="Username"
            value={loginData.username}
            onChange={handleChange}
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            value={loginData.password}
            onChange={handleChange}
            variant="standard"
          />
        </div>
        <div className={style.loginbtn}>
          <Button variant="outlined" startIcon={<LoginRounded />} type="submit">
            Login
          </Button>
        </div>
        <p>
          Dont have an account? <a href="/signup">Signup!</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
