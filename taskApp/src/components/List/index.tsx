import { GrSubtract } from "react-icons/gr";
import { ListType, TaskType } from "../../types";
import Task from "../Task";
import ActionButton from "../ActionButton";
import { useTypedDispatch } from "../../hooks/redux";
import { deleteList, setModalActive } from "../../store/slices/boardsSlice";
import { addLogger } from "../../store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";
import { setModalData } from "../../store/slices/modalSlice";
import { deleteButton, header, listWrapper, name } from "./List.css";

type ListProps = {
  list: ListType;
  boardId: string;
};

const List = ({ list, boardId }: ListProps) => {
  const dispatch = useTypedDispatch();

  const handleListDelete = (listId: string) => {
    dispatch(deleteList({ boardId, listId }));
    dispatch(
      addLogger({
        logId: uuidv4(),
        logMessage: `리스트 삭제하기: ${list.listName}.`,
        logAuthor: "User",
        logTimeStamp: new Date().toISOString(),
      })
    );
  };

  const handleTaskChange = (
    boardId: string,
    listId: string,
    taskId: string,
    task: TaskType
  ) => {
    dispatch(setModalData({ boardId, listId, task }));
    dispatch(setModalActive(true));
  };

  return (
    <div className={listWrapper}>
      <div className={header}>
        <div className={name}>{list.listName}</div>
        <GrSubtract
          className={deleteButton}
          onClick={() => handleListDelete(list.listId)}
        />
      </div>
      {list.tasks.map((task, idx) => (
        <div
          onClick={() =>
            handleTaskChange(boardId, list.listId, task.taskId, task)
          }
          key={task.taskId}
        >
          <Task
            taskName={task.taskName}
            taskDescription={task.taskDescription}
            boardId={boardId}
            id={task.taskId}
            idx={idx}
          />
        </div>
      ))}
      <ActionButton boardId={boardId} listId={list.listId} />
    </div>
  );
};

export default List;
