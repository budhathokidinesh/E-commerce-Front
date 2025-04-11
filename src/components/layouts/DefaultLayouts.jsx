import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DefaultLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header  */}
      <Header />
      {/* Main body  */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default DefaultLayouts;
