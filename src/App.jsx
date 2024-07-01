import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Lander from "./components/Lander/Lander";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SimpleForm from "./components/SimpleForm/SimpleForm";
import StudentDetailsForm from "./components/StudentDetailsForm/StudentDetailsForm";
import Parent from "./components/Parent/Parent";
import Controlled from "./components/Controlled/Controlled";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Summary from "./components/Summary/Summary";
function App() {
  const [showValue, hide] = useState(false);
  const [showStudentValue, hideStudent] = useState(false);
  const showTheStudentForm = () => {
    hideStudent(!showStudentValue);
  };
  const showTheForm = () => {
    hide(!showValue);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SimpleForm />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
