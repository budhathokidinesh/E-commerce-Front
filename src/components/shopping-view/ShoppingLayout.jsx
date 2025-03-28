import React from "react";
import Footer from "../layouts/Footer";
import ShoppingHeader from "./ShoppingHeader";
import { Outlet } from "react-router-dom";

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden ">
      {/* common Header  */}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingLayout;
