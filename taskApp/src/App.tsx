import { useState } from "react";
import { appContainer, board, buttons } from "./App.css";
import BoardList from "./components/BoardList";
import ListsContainer from "./components/ListsContainer";
import { useTypedSelector } from "./hooks/redux";

const App = () => {
  const [activeBoardId, setActiveBoardId] = useState("board-0");
  const boards = useTypedSelector((state) => state.boards.boardArray);

  const getActiveBoard = boards.filter(
    (board) => board.boardId === activeBoardId
  )[0];

  const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardI={setActiveBoardId}
      />
      <div className={board}>
        <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
      </div>
      <div className={buttons}>
        <button>이 게시판 삭제하기</button>
        <button>이 게시판 수정하기</button>
      </div>
    </div>
  );
};

export default App;
