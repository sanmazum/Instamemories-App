// Async thunk to fetch post data - Action creator
// export const fetchPost = createAsyncThunk("fetchPost", async () => {
//   const response = await fetch(`http://localhost:5000/posts`);
//   const data = await response.json();
//   return data;
// });

// export const createPost = createAsyncThunk("createPost", async (newPost) => {
//   const response = await fetch(`http://localhost:5000/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newPost),
//   });
//   const data = await response.json();
//   return data;
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPosts as fetchPostsAPI,
  createPost as createPostAPI,
} from "../../api";

// Thunk to fetch posts using axios from API file
export const fetchPost = createAsyncThunk("fetchPost", async () => {
  const response = await fetchPostsAPI();
  return response.data; // axios returns data in `data` property
});

// Thunk to create a new post using axios from API file
export const createPost = createAsyncThunk("createPost", async (newPost) => {
  const response = await createPostAPI(newPost);
  return response.data;
});
