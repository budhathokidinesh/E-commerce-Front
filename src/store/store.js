import { configureStore } from "@reduxjs/toolkit";
("@reduxjs/toolkit");
import authReducer from "./auth-slice/authSlice";
import AdminProductsSlice from "./admin/product-slice/productSlice.js";
import adminOrderSlice from "./admin/adminOrder-slice/adminOrderSlice.js";
import shopProductsSlice from "./shop/product-slice/shopProductSlice.js";
import shoppingCartSlice from "./shop/cart-slice/cartSlice.js";
import shoppingAddressSlice from "./shop/address-slice/addressSlice.js";
import shoppingOrderSlice from "./shop/order-slice/orderSlice.js";
import shoppingSearchSlice from "./shop/searchSlice/searchSlice.js";
import shoppingReviewSlice from "./shop/review-slice/reviewSlice.js";
import commonFeatureSlice from "./common/commonSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: AdminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shopProductsSlice,
    shopCart: shoppingCartSlice,
    shopAddress: shoppingAddressSlice,
    shopOrder: shoppingOrderSlice,
    shopSearch: shoppingSearchSlice,
    shopReview: shoppingReviewSlice,
    commonFeature: commonFeatureSlice,
  },
});
export default store;
