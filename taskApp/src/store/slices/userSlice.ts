import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.email = "";
      state.id = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
