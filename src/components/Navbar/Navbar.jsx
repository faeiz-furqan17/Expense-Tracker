import { Menu, Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import style from "./Navbar.module.scss";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [addButton, setAddButton] = useState("Add");

  useEffect(() => {
    if (isModalOpen) {
      setAddButton("Close");
    } else {
      setAddButton("Add");
    }
  });

  return (
    <div className={style.navBar}>
      <Menu
        style={{ alignItems: "center" }}
        mode="horizontal"
        items={[
          {
            key: "home",
            label: (
              <Link to="/">
                <h2> Expense Tracker</h2>
              </Link>
            ),
          },
          {
            key: "dashboard",
            label: <Link to="/dashboard">Dashboard</Link>,
          },
          {
            key: "summary",
            label: <Link to="/summary">Summary</Link>,
          },
          {
            key: "add",
            label: (
              <Button
                type={isModalOpen ? "submit" : "primary"}
                onClick={showModal}
              >
                {addButton}
              </Button>
            ),
          },
        ]}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form isModalOpen={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default Navbar;
