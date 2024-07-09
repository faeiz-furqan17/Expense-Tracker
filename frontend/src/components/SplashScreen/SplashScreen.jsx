import React from "react";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/login");
  }, 2000);

  return <h1>Loading...</h1>;
}

export default SplashScreen;
