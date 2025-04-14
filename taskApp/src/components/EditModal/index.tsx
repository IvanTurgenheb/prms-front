import { FiX } from "react-icons/fi";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { useState } from "react";
import {
  deleteTask,
  setModalActive,
  updateTask,
} from "../../store/slices/boardsSlice";
import { addLogger } from "../../store/slices/loggerSlice";
import { v4 } from "uuid";
import {
  header,
  modalWindow,
  title,
  wrapper,
  input,
  buttons,
  updateButton,
  deleteButton,
  closeButton,
} from "./EditModal.css";

const EditModal = () => {
  const dispatch = useTypedDispatch();
  const editingState = useTypedSelector((state) => state.modals);
  const [data, setData] = useState(editingState);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskName: e.target.value,
      },
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskDescription: e.target.value,
      },
    });
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskOwner: e.target.value,
      },
    });
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        task: data.task,
      })
    );

    dispatch(
      addLogger({
        logId: v4(),
        logMessage: `일 수정하기: ${data.task.taskName}.`,
        logAuthor: data.task.taskOwner,
        logTimeStamp: Date.now(),
      })
    );

    dispatch(setModalActive(false));
  };

  const handleDelete = () => {
    dispatch(
      deleteTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        taskId: data.task.taskId,
      })
    );

    dispatch(
      addLogger({
        logId: v4(),
        logMessage: `일 삭제하기: ${data.task.taskName}.`,
        logAuthor: data.task.taskOwner,
        logTimeStamp: Date.now(),
      })
    );

    dispatch(setModalActive(false));
  };

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>{editingState.task.taskName}</div>
          <FiX
            className={closeButton}
            onClick={() => dispatch(setModalActive(false))}
          />
        </div>
        <div className={title}>제목</div>
        <input
          type="text"
          className={input}
          value={data.task.taskName}
          onChange={handleTitleChange}
        />
        <div className={title}>설명</div>
        <input
          type="text"
          className={input}
          value={data.task.taskDescription}
          onChange={handleDescriptionChange}
        />
        <div className={title}>생성한 사람</div>
        <input
          type="text"
          className={input}
          value={data.task.taskOwner}
          onChange={handleAuthorChange}
        />

        <div className={buttons}>
          <button className={updateButton} onClick={handleUpdate}>
            일 수정하기
          </button>
          <button className={deleteButton} onClick={handleDelete}>
            일 삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
