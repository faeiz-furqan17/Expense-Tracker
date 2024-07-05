import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SimpleForm from "./components/SimpleForm/SimpleForm";

import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Summary from "./components/Summary/Summary";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
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
        <Route path="/login" element={<Login login={handleLogin} />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<SimpleForm />} />
          <Route element={<ProtectedRoutes user={isAuthenticated} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
