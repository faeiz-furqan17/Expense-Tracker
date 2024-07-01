import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Lander from "./components/Lander/Lander";

import SimpleForm from "./components/SimpleForm/SimpleForm";
import StudentDetailsForm from "./components/StudentDetailsForm/StudentDetailsForm";
import Parent from "./components/Parent/Parent";

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
    <>
      <div className="main-container">
        <Navbar />
        <Lander />
        <button onClick={showTheForm} />
        <SimpleForm show={showValue} />
        <button onClick={showTheStudentForm}>
          click me to make student form visible
        </button>
        <StudentDetailsForm show={showStudentValue} />
        <Parent />
      </div>
    </>
  );
}

export default App;
