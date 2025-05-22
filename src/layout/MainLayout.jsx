import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";

function MainLayout() {
  return (
    <div className="grid grid-cols-[104px_1fr] h-screen">
      <Sidebar />
      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout
