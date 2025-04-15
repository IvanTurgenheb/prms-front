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
import { Droppable } from "@hello-pangea/dnd";

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
        logTimeStamp: Date.now(),
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
    <Droppable droppableId={list.listId}>
      {(droppableProvider) => (
        <div
          className={listWrapper}
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
        >
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
          {droppableProvider.placeholder}
          <ActionButton boardId={boardId} listId={list.listId} />
        </div>
      )}
    </Droppable>
  );
};

export default List;
