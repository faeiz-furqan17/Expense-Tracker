import React, { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [addButton, removeButton] = useState("Add");
  const handleAddClick = () => {
    setShowForm(!showForm);
  };
  useEffect(() => {
    if (showForm) {
      removeButton("close");
    } else {
      removeButton("Add");
    }
    console.log("here here");
  });

  return (
    <>
      <header>
        <nav>
          <div className={style.navbar}>
            <Link to="/">
              <h1> Expense Tracker</h1>
            </Link>
            <button onClick={handleAddClick}>{addButton}</button>
            {showForm ? (
              <Form
                onShow={() => {
                  setShowForm(false);
                }}
              ></Form>
            ) : (
              <></>
            )}
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/summary">sumary</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
