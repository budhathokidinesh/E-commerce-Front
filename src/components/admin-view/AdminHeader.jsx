import React from "react";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice/authSlice";

const AdminHeader = ({ setOpen }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background ">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <IoMenu />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow cursor-pointer"
        >
          <MdOutlineLogout />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
