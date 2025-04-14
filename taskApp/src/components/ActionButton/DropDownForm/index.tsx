import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/redux";
import { addList, addTask } from "../../../store/slices/boardsSlice";
import { v4 } from "uuid";
import { addLogger } from "../../../store/slices/loggerSlice";
import {
  button,
  buttons,
  close,
  input,
  listForm,
  taskForm,
} from "./DropDownForm.css";

type DropDownFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list?: boolean;
  boardId: string;
  listId: string;
};

const DropDownFrom = ({
  setIsFormOpen,
  list,
  boardId,
  listId,
}: DropDownFormProps) => {
  const [text, setText] = useState("");
  const dispatch = useTypedDispatch();

  const formPlaceholder = list
    ? "리스트의 제목을 입력하세요."
    : "일의 제목을 입력하세요.";

  const buttonTitle = list ? "리스트 추가하기" : "일 추가하기";

  const handleButtonClick = () => {
    if (text.length < 1) return;

    if (list) {
      dispatch(
        addList({
          boardId,
          list: { listId: v4(), listName: text, tasks: [] },
        })
      );

      dispatch(
        addLogger({
          logId: v4(),
          logMessage: `리스트 추가하기: ${text}.`,
          logAuthor: "User",
          logTimeStamp: Date.now(),
        })
      );
    } else {
      dispatch(
        addTask({
          boardId,
          listId,
          task: {
            taskId: v4(),
            taskName: text,
            taskDescription: "",
            taskOwner: "User",
          },
        })
      );

      dispatch(
        addLogger({
          logId: v4(),
          logMessage: `일 생성하기: ${text}.`,
          logAuthor: "User",
          logTimeStamp: Date.now(),
        })
      );
    }
  };

  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        value={text}
        onBlur={() => setIsFormOpen(false)}
        onChange={(e) => setText(e.target.value)}
        placeholder={formPlaceholder}
        autoFocus
      />
      <div className={buttons}>
        <button className={button} onMouseDown={handleButtonClick}>
          {buttonTitle}
        </button>
        <FiX className={close} />
      </div>
    </div>
  );
};

export default DropDownFrom;
