import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const githubSlice = createSlice({
  name: "github_user",
  initialState,
  reducer: {},
});

export const selectUsers = (state) => state.github.githubSlice;

export default githubSlice.reducer;
