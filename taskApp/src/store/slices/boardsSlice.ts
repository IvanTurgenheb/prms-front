import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AddListActionType,
  AddTaskActionType,
  BoardType,
  DeleteListActionType,
} from "../../types";

type InitialStateType = {
  modalActive: boolean;
  boardArray: BoardType[];
};

type BoardActionType = {
  board: BoardType;
};

const initialState: InitialStateType = {
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
  reducers: {
    addBoard: (state, { payload }: PayloadAction<BoardActionType>) => {
      state.boardArray.push(payload.board);
    },
    deleteList: (state, { payload }: PayloadAction<DeleteListActionType>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId == payload.boardId
          ? {
              ...board,
              lists: board.lists.filter(
                (list) => list.listId !== payload.listId
              ),
            }
          : board
      );
    },
    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
    addList: (state, { payload }: PayloadAction<AddListActionType>) => {
      state.boardArray.map((board) =>
        board.boardId == payload.boardId
          ? { ...board, lists: board.lists.push(payload.list) }
          : board
      );
    },
    addTask: (state, { payload }: PayloadAction<AddTaskActionType>) => {
      state.boardArray.map((board) =>
        board.boardId == payload.boardId
          ? {
              ...board,
              lists: board.lists.map((list) =>
                list.listId == payload.listId
                  ? { ...list, tasks: list.tasks.push(payload.task) }
                  : list
              ),
            }
          : board
      );
    },
  },
});

export const { addBoard, deleteList, setModalActive, addList, addTask } =
  boardSlice.actions;
export const boardReducer = boardSlice.reducer;
