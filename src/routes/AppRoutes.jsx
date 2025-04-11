import { Routes, Route } from "react-router-dom";
import DefaultLayouts from "../components/layouts/DefaultLayouts";
import { Login, Register } from "../pages/index";
import AdminLayout from "@/components/admin-view/AdminLayout";
import AdminDashboard from "@/pages/admin-view/Dashboard";
import AdminProducts from "@/pages/admin-view/Products";
import AdminOrders from "@/pages/admin-view/Orders";
import AdminFeatures from "@/pages/admin-view/Features";
import ShoppingLayout from "@/components/shopping-view/ShoppingLayout";
import NotFound from "@/pages/not-found/NotFound";
import ShoppingHome from "@/pages/shopping-view/ShoppingHome";
import ShoppingListing from "@/pages/shopping-view/ShoppingListing";
import ShoppingCheckout from "@/pages/shopping-view/ShoppingCheckout";
import ShoppingAccount from "@/pages/shopping-view/ShoppingAccount";
import CheckAuth from "@/components/common/check-auth";
import UnauthPage from "@/pages/unauth-page/UnauthPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "@/store/auth-slice/authSlice";
import PaypalReturn from "@/pages/shopping-view/PaypalReturn";
import PaymentSuccess from "@/pages/shopping-view/PaymentSuccess";
import SearchProducts from "@/pages/shopping-view/SearchProducts";
import HelpCenter from "@/pages/utils/HelpCenter";
import OrderTracking from "@/pages/utils/OrderTracking";
import AboutUs from "@/pages/utils/AboutUs";
import FaqPage from "@/pages/utils/FaqPage";
import ContactUs from "@/pages/utils/ContactUs";

const AppRoutes = () => {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  if (isLoading) return <div>Loading...</div>;
  return (
    <Routes>
      <Route path="help-center" element={<HelpCenter />} />
      <Route path="order-tracking" element={<OrderTracking />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="faq" element={<FaqPage />} />
      <Route path="contact" element={<ContactUs />} />
      {/* This is auth section  */}
      <Route
        path="/"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <DefaultLayouts />
          </CheckAuth>
        }
      >
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
        <Route path="paypal-return" element={<PaypalReturn />} />
        <Route path="payment-success" element={<PaymentSuccess />} />
        <Route path="search" element={<SearchProducts />} />
      </Route>
      <Route path="/unauth-page" element={<UnauthPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
