import { Outlet } from "react-router-dom";

import "./MainLayout.css";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";

export function MainLayout() {
  return (
    <div id="main-layout">
      <Navbar />
      <div id="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
