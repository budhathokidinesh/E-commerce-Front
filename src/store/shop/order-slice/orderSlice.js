const BASE_URL = import.meta.env.VITE_API_URL;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  approvalURL: null,
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
};

//creating async thunk for orders
export const createNewOrder = createAsyncThunk(
  "/order/createNewOrder",
  async (orderData) => {
    const response = await axios.post(
      `${BASE_URL}/api/shop/order/create`,
      orderData
    );
    return response.data;
  }
);
//this is for the capturing the payment
export const capturePayment = createAsyncThunk(
  "/order/capturePayment",
  async ({ token, payerId, orderId }) => {
    const response = await axios.post(`${BASE_URL}/api/shop/order/capture`, {
      token,
      payerId,
      orderId,
    });
    return response.data;
  }
);
//this is for getting order list
export const getAllOrdersByUsersId = createAsyncThunk(
  "/order/getAllOrdersByUsersId",
  async (userId) => {
    const response = await axios.get(
      `${BASE_URL}/api/shop/order/list/${userId}`
    );
    return response.data;
  }
);
//this is for getting order details
export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async (id) => {
    const response = await axios.get(
      `${BASE_URL}/api/shop/order/details/${id}`
    );
    return response.data;
  }
);

const shoppingOrderSLice = createSlice({
  name: "shoppingOrderSLice",
  initialState,
  reducer: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.approvalURL = action.payload.approvalURL;
        state.orderId = action.payload.orderId;
        sessionStorage.setItem(
          "currentOrderId",
          JSON.stringify(action.payload.orderId)
        );
      })
      .addCase(createNewOrder.rejected, (state) => {
        state.isLoading = false;
        state.approvalURL = null;
        state.orderId = null;
      })
      .addCase(getAllOrdersByUsersId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersByUsersId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrdersByUsersId.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.orderList = null;
      });
  },
});
export const { resetOrderDetails } = shoppingOrderSLice.actions;

export default shoppingOrderSLice.reducer;
