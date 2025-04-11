import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import DropDownFrom from "./DropDownForm";
import { listButton, taskButton } from "./ActionButton.css";

type ActionButtonProps = {
  boardId: string;
  listId: string;
  list?: boolean;
};

const ActionButton = ({ boardId, listId, list }: ActionButtonProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const buttonText = list ? "새로운 리스트 등록" : "새로운 일 등록";

  return isFormOpen ? (
    <DropDownFrom
      setIsFormOpen={setIsFormOpen}
      list={list}
      boardId={boardId}
      listId={listId}
    />
  ) : (
    <div
      onClick={() => setIsFormOpen(!isFormOpen)}
      className={list ? listButton : taskButton}
    >
      <IoIosAdd />
      <p>{buttonText}</p>
    </div>
  );
};

export default ActionButton;
