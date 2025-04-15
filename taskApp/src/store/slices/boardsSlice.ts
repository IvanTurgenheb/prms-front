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

type DeleteTaskActionType = {
  boardId: string;
  listId: string;
  taskId: string;
};

type DeleteBoardActionType = {
  boardId: string;
};

type SortActionType = {
  boardIdx: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIdxStart: number;
  droppableIdxEnd: number;
  draggableId: string;
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
              taskId: "task-2",
              taskName: "Task 1",
              taskDescription: "Description for Task 1",
              taskOwner: "User A",
            },
            {
              taskId: "task-3",
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
    deleteBoard: (state, { payload }: PayloadAction<DeleteBoardActionType>) => {
      state.boardArray = state.boardArray.filter(
        (board) => board.boardId !== payload.boardId
      );
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
    deleteTask: (state, { payload }: PayloadAction<DeleteTaskActionType>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId == payload.boardId
          ? {
              ...board,
              lists: board.lists.map((list) =>
                list.listId == payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.filter(
                        (task) => task.taskId !== payload.taskId
                      ),
                    }
                  : list
              ),
            }
          : board
      );
    },
    updateTask: (state, { payload }: PayloadAction<AddTaskActionType>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId == payload.boardId
          ? {
              ...board,
              lists: board.lists.map((list) =>
                list.listId == payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.map((task) =>
                        task.taskId == payload.task.taskId ? payload.task : task
                      ),
                    }
                  : list
              ),
            }
          : board
      );
    },
    sort: (state, { payload }: PayloadAction<SortActionType>) => {
      // 같은 리스트
      if (payload.droppableIdStart == payload.droppableIdEnd) {
        const listStart = state.boardArray[payload.boardIdx].lists.find(
          (list) => list.listId == payload.droppableIdStart
        ); // 현재 드래그중인 리스트

        const card = listStart?.tasks.splice(payload.droppableIdxStart, 1); // 현재 드래중인 테스크를 list배열에서 제거
        listStart?.tasks.splice(payload.droppableIdxEnd, 0, ...card!); // [시작 인덱스, 제거할 인덱스 개수, ...item]

        // const arr = [1, 2, 3, 4];
        // arr.splice(2, 0, 99);
        // console.log(arr); // [1, 2, 99, 3, 4] 이런식으로 되는거임
      }

      // 다른 리스트
      if (payload.droppableIdStart != payload.droppableIdEnd) {
        const listStart = state.boardArray[payload.boardIdx].lists.find(
          (list) => list.listId == payload.droppableIdStart
        ); // 현재 드래그중인 리스트

        const card = listStart?.tasks.splice(payload.droppableIdxStart, 1);
        const listEnd = state.boardArray[payload.boardIdx].lists.find(
          (list) => list.listId == payload.droppableIdEnd
        );

        listEnd?.tasks.splice(payload.droppableIdxEnd, 0, ...card!);
      }
    },
  },
});

export const {
  addBoard,
  deleteList,
  setModalActive,
  addList,
  addTask,
  deleteTask,
  updateTask,
  deleteBoard,
  sort,
} = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
