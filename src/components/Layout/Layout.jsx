import React from "react";
import Navbar from "../Navbar/Navbar";
import Lander from "../Lander/Lander";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import List from "../List/List";

function Layout() {
  return (
    <>
      <Navbar />

      <List />

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
