import { Menu, Button, Modal } from "antd";
import React, { useState, useEffect } from "react";

import Form from "../Form/Form";
import { Link } from "react-router-dom";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
  });
  return (
    <div>
      <Menu mode="horizontal" style={{ alignItems: "center" }}>
        <Menu.Item>
          <Link to="/">
            <h1> Expense Tracker</h1>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/summary">Summary</Link>
        </Menu.Item>
        <Menu.Item>
          <Button type={showForm ? "submit" : "primary"} onClick={showModal}>
            {addButton}{" "}
          </Button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              onShow={() => {
                setShowForm(false);
              }}
            ></Form>
          </Modal>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
