import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoginRounded } from "@mui/icons-material";
import styles from "./Login.module.scss";

import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

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
      navigate("/summary");
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
    <div className={styles.mainContainer}>
      <AccountCircleTwoToneIcon
        sx={{
          fontSize: "400px",
          color: " #d7e360",
        }}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            sx={{ width: "calc(2em * 10)" }}
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
            sx={{ width: "calc(2em * 10)" }}
            id="password"
            name="password"
            type="password"
            label="Password"
            value={loginData.password}
            onChange={handleChange}
            variant="standard"
          />
        </div>
        <div>
          <Button
            className={styles.loginbtn}
            variant="contained"
            startIcon={<LoginRounded />}
            type="submit"
          >
            Login
          </Button>
        </div>
        <p
          style={{
            color: "white",
          }}
        >
          Dont have an account? <a href="/signup">Signup!</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
