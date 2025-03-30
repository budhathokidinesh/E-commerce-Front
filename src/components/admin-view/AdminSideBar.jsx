import { AiFillDashboard } from "react-icons/ai";
import { LuShoppingBasket } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import React, { Fragment } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icons: <AiFillDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icons: <LuShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icons: <FaListCheck />,
  },
];

const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => navigate(menuItem.path)}
          className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.icons}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
};
const AdminSideBar = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <MdAdminPanelSettings size={30} />
          <h1 className="text-xl font-extrabold ">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
};

export default AdminSideBar;
