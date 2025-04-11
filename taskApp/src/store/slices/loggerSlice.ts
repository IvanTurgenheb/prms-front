import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    addLogger: (state, { payload }: PayloadAction<LogItemType>) => {
      state.logArray.push(payload);
    },
  },
});

export const { addLogger } = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;
