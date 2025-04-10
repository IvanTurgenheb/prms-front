import { createSlice } from "@reduxjs/toolkit";
import type { TaskType } from "../../types";

type ModalStateType = {
  boardId: string;
  listId: string;
  task: TaskType;
};

const initialState: ModalStateType = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task 0",
    taskDescription: "",
    taskOwner: "",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
});

export const modalReducer = modalSlice.reducer;
