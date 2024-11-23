import { createSlice } from "@reduxjs/toolkit";
import { fetchPost, createPost } from "../actions/posts";

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch Post cases
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      })
      //create post cases
      .addCase(createPost.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(createPost.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },
});

export default postSlice.reducer;
