import { Routes, Route } from "react-router-dom";
import DefaultLayouts from "../components/layouts/DefaultLayouts";
import { HomePage, Login, Register } from "../pages/index";
import AdminLayout from "@/components/admin-view/AdminLayout";
import AdminDashboard from "@/pages/admin-view/Dashboard";
import AdminProducts from "@/pages/admin-view/Products";
import AdminOrders from "@/pages/admin-view/Orders";
import AdminFeatures from "@/pages/admin-view/Features";
import ShoppingLayout from "@/components/shopping-view/ShoppingLayout";
import NotFound from "@/pages/not-found/notFound";
import ShoppingHome from "@/pages/shopping-view/ShoppingHome";
import ShoppingListing from "@/pages/shopping-view/ShoppingListing";
import ShoppingCheckout from "@/pages/shopping-view/ShoppingCheckout";
import ShoppingAccount from "@/pages/shopping-view/ShoppingAccount";
import CheckAuth from "@/components/common/check-auth";
import UnauthPage from "@/pages/unauth-page/UnauthPage";

const AppRoutes = () => {
  const isAuthenticated = false;
  const user = null;
  return (
    <Routes>
      {/* This is auth section  */}
      <Route path="/" element={<DefaultLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      {/* THis is admin section  */}
      <Route
        path="/admin"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="features" element={<AdminFeatures />} />
      </Route>
      {/* THis is shopping section  */}
      <Route
        path="/shop"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }
      >
        <Route path="home" element={<ShoppingHome />} />
        <Route path="list" element={<ShoppingListing />} />
        <Route path="checkout" element={<ShoppingCheckout />} />
        <Route path="account" element={<ShoppingAccount />} />
      </Route>
      <Route path="/unauth-page" element={<UnauthPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
