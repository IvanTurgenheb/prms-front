import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { icon, input, sideForm } from "./SideForm.css";
import { useTypedDispatch } from "../../../hooks/redux";
import { addBoard } from "../../../store/slices/boardsSlice";
import { v4 as uuidv4 } from "uuid";
import { addLogger } from "../../../store/slices/loggerSlice";

type SideFormProps = {
  inputRef: React.RefObject<HTMLInputElement | null>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm = ({ inputRef, setIsFormOpen }: SideFormProps) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useTypedDispatch();

  const onClickInput = () => {
    if (inputText.length < 1) return;

    dispatch(
      addBoard({
        board: { boardId: uuidv4(), boardName: inputText, lists: [] },
      })
    );

    dispatch(
      addLogger({
        logId: uuidv4(),
        logMessage: `게시판 등록: ${inputText}.`,
        logAuthor: "User",
        logTimeStamp: new Date().toISOString(),
      })
    );
  };

  return (
    <div className={sideForm}>
      <input
        ref={inputRef}
        className={input}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onBlur={() => setIsFormOpen(false)}
        type="text"
        placeholder="새로운 게시판 등록하기"
      />
      <FiCheck onMouseDown={onClickInput} className={icon} />
    </div>
  );
};

export default SideForm;
