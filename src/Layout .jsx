import React from "react";
import Sidebar from "./pages/Component/Sidebar";
import Navbar from "./pages/Component/Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
