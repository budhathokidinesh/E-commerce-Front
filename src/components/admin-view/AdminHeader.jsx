import React from "react";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import { MdOutlineLogout } from "react-icons/md";

const AdminHeader = ({ setOpen }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background ">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <IoMenu />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow cursor-pointer">
          <MdOutlineLogout />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
