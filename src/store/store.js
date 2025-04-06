import { configureStore } from "@reduxjs/toolkit";
("@reduxjs/toolkit");
import authReducer from "./auth-slice/authSlice";
import AdminProductsSlice from "./admin/product-slice/productSlice.js";
import shopProductsSlice from "./shop/product-slice/shopProductSlice.js";
import shoppingCartSlice from "./shop/cart-slice/cartSlice.js";
import shoppingAddressSlice from "./shop/address-slice/addressSlice.js";
import shoppingOrderSlice from "./shop/order-slice/orderSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: AdminProductsSlice,
    shopProducts: shopProductsSlice,
    shopCart: shoppingCartSlice,
    shopAddress: shoppingAddressSlice,
    shopOrder: shoppingOrderSlice,
  },
});
export default store;
