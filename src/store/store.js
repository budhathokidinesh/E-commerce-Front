import { configureStore } from "@reduxjs/toolkit";
("@reduxjs/toolkit");
import authReducer from "./auth-slice/authSlice";
import AdminProductsSlice from "./admin/product-slice/productSlice.js";
import shopProductsSlice from "./shop/product-slice/shopProductSlice.js";
import shoppingCartSlice from "./shop/cart-slice/cartSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: AdminProductsSlice,
    shopProducts: shopProductsSlice,
    shopCart: shoppingCartSlice,
  },
});
export default store;
