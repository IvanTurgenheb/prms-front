import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SetModalDataActionType, TaskType } from "../../types";

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
  reducers: {
    setModalData: (
      state,
      { payload }: PayloadAction<SetModalDataActionType>
    ) => {
      state.boardId = payload.boardId;
      state.listId = payload.listId;
      state.task = payload.task;
    },
  },
});

export const { setModalData } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
