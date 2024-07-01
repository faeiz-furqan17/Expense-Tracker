import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Lander from "./components/Lander/Lander";
import Form from "./components/Form/Form";
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
        <Navbar></Navbar>
        <Lander></Lander>
        <button onClick={showTheForm}>click me to make form visible</button>
        <SimpleForm show={showValue}></SimpleForm>
        <button onClick={showTheStudentForm}>
          click me to make student form visible
        </button>
        <StudentDetailsForm show={showStudentValue}></StudentDetailsForm>
        <Parent></Parent>
        {/* <List></List> */}
      </div>
    </>
  );
}

export default App;
