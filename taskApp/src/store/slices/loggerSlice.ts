import { createSlice } from "@reduxjs/toolkit";
import type { LogItemType } from "../../types";

type LoggerStateType = {
  logArray: LogItemType[];
};

const initialState: LoggerStateType = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {},
});

export const loggerReducer = loggerSlice.reducer;
