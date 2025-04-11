import { useRef, useState } from "react";
import { useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm";
import { FiPlusCircle } from "react-icons/fi";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from "./BoardList.css";
import clsx from "clsx";

type BoardListProps = {
  activeBoardId: string;
  setActiveBoardI: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList = ({ activeBoardId, setActiveBoardI }: BoardListProps) => {
  const { boardArray } = useTypedSelector((state) => state.boards);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickPlusCircle = () => {
    setIsFormOpen(!isFormOpen);
    setTimeout(() => inputRef.current?.focus());
  };

  return (
    <div className={container}>
      <div className={title}>게시판:</div>
      {boardArray.map((board) => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardI(board.boardId)}
          className={clsx(
            board.boardId == activeBoardId ? boardItemActive : boardItem
          )}
        >
          <div>{board.boardName}</div>
        </div>
      ))}

      <div className={addSection}>
        {isFormOpen ? (
          <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
        ) : (
          <FiPlusCircle className={addButton} onClick={onClickPlusCircle} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
