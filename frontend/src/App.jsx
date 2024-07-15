import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SimpleForm from "./components/SimpleForm/SimpleForm";

import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Summary from "./components/Summary/Summary";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import SplashScreen from "./components/SplashScreen/SplashScreen";

import ROUTES from "./App Paths/routes";
import SignUp from "./components/SignUp/SignUp";
import Lander from "./components/Lander/Lander";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showValue, hide] = useState(false);
  const [showStudentValue, hideStudent] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.SPLASH_SCREEN} element={<SplashScreen />}></Route>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Lander />} />

          <Route element={<ProtectedRoutes user={isAuthenticated} />}>
            <Route path={ROUTES.SUMMARY} element={<Summary />} />
          </Route>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login login={handleLogin} />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
