import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload;
    },
  },
});

export const { setChannelId } = appSlice.actions;

export const selectChannelId = (state) => state.user.channelId;
export const selectChannelName = (state) => state.user.channelName;

export default appSlice.reducer;
