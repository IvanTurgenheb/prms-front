type SetModalDataActionType = {
  boardId: string;
  listId: string;
  task: TaskType;
};

type TaskType = {
  taskId: string;
  taskName: string;
  taskDescription: string;
  taskOwner: string;
};

type LogItemType = {
  logId: string;
  logMessage: string;
  logAuthor: string;
  logTimeStamp: number;
};

type ListType = {
  listId: string;
  listName: string;
  tasks: TaskType[];
};

type BoardType = {
  boardId: string;
  boardName: string;
  lists: ListType[];
};

type DeleteListActionType = {
  boardId: string;
  listId: string;
};

type AddListActionType = {
  boardId: string;
  list: ListType;
};

type AddTaskActionType = {
  boardId: string;
  listId: string;
  task: TaskType;
};

export type {
  TaskType,
  LogItemType,
  ListType,
  BoardType,
  DeleteListActionType,
  SetModalDataActionType,
  AddListActionType,
  AddTaskActionType,
};
