import { configureStore } from "@reduxjs/toolkit";
("@reduxjs/toolkit");
import authReducer from "./auth-slice/authSlice";
import AdminProductsSlice from "./admin/product-slice/productSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: AdminProductsSlice,
  },
});
export default store;
