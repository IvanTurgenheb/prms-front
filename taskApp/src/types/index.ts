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
  logTimeStamp: string;
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

export type { TaskType, LogItemType, ListType, BoardType };
