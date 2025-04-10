import { createSlice } from "@reduxjs/toolkit";
import { BoardType } from "../../types";

type initialStateType = {
  modalActive: boolean;
  boardArray: BoardType[];
};

const initialState: initialStateType = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "list 0",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description for Task 1",
              taskOwner: "User A",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description for Task 2",
              taskOwner: "User B",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "list 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description for Task 1",
              taskOwner: "User A",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description for Task 2",
              taskOwner: "User B",
            },
          ],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export const boardReducer = boardSlice.reducer;
