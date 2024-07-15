import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import style from "./Navbar.module.scss";
import AppBar from "@mui/material/AppBar";
import { Box, Divider, Button, Modal } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  const navItems = ["Home", "Summary", "Dashboard"];

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
      <AppBar position="fixed" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <Typography
            variant="h6"
            onClick={() => (window.location.href = "/")}
            sx={{
              cursor: "pointer",
            }}
          >
            Expense Tracker
          </Typography>

          <div>
            <Button onClick={showModal} variant="outlined">
              {addButton}
            </Button>
            <Button
              onClick={() => (window.location.href = "/summary")}
              variant="outlined"
            >
              summary
            </Button>
            <Button
              onClick={() => {
                window.location.href = "/dashboard";
              }}
              variant="outlined"
            >
              dashboard
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        disableAutoFocus
        open={isModalOpen}
        onClose={handleCancel}
        aria-labelledby="modal-modal-title"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,

          // backdropFilter: "blur(5px)",
          // backgroundColor: "white",

          background: "rgba(1, 48, 8, 0.69)",

          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "none",

          p: 4,
        }}
      >
        <Box
          sx={{
            border: "none",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            color="white"
            style={{ border: "none" }}
          >
            Add an expense
          </Typography>
          <Form
            style={{
              border: "none",
            }}
            isModalOpen={() => setIsModalOpen(false)}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default Navbar;
