import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  appovalURL: null,
  isLoading: false,
  orderId: null,
};

//creating async thunk for orders
export const createNewOrder = createAsyncThunk(
  "/order/createNewOrder",
  async (orderData) => {
    const response = await axios.post(
      "http://localhost:8000/api/shop/order/create",
      orderData
    );
    return response.data;
  }
);

const shoppingOrderSLice = createSlice({
  name: "shoppingOrderSLice",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appovalURL = action.payload.appovalURL;
        state.orderId = action.payload.orderId;
      })
      .addCase(createNewOrder.rejected, (state) => {
        state.isLoading = false;
        state.appovalURL = null;
        state.orderId = null;
      });
  },
});

export default shoppingOrderSLice.reducer;
