import React from "react";
import Footer from "../layouts/Footer";
import ShoppingHeader from "./ShoppingHeader";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* common Header  */}
      <ShoppingHeader />

      <main className="flex flex-col w-full h-screen">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ShoppingLayout;
