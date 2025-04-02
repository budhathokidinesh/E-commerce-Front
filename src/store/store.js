import { configureStore } from "@reduxjs/toolkit";
("@reduxjs/toolkit");
import authReducer from "./auth-slice/authSlice";
import AdminProductsSlice from "./admin/product-slice/productSlice.js";
import shopProductsSlice from "./shop/product-slice/shopProductSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: AdminProductsSlice,
    shopProducts: shopProductsSlice,
  },
});
export default store;
