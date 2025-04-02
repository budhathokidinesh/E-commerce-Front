import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};

export const fetchAllShoppingProducts = createAsyncThunk(
  "/products/fetchAllShoppingProducts",
  async () => {
    const result = await axios.get(
      "http://localhost:8000/api/shop/products/get"
    );
    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllShoppingProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllShoppingProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllShoppingProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});
export default shoppingProductSlice.reducer;
