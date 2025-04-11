import React from "react";

import ShoppingHeader from "./ShoppingHeader";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* common Header  */}
      <ShoppingHeader />

      <main className="flex flex-col w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingLayout;
