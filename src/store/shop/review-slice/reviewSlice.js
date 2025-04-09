import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
};

//this is for adding reviews
export const addReview = createAsyncThunk(
  "/products/addReview",
  async (data) => {
    const response = await axios.post("http://localhost:8000/api/shop/review", {
      data,
    });
    return response.data;
  }
);

//this is for getting reviews
export const getReviews = createAsyncThunk(
  "/products/getReviews",
  async (id) => {
    const response = await axios.post(`http://localhost:8000/api/shop/${id}`);
    return response.data;
  }
);

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        (state.isLoading = false), (state.reviews = action.payload.data);
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
        state.reviews = [];
      });
  },
});
export default reviewSlice.reducer;
