import { useState } from "react";
import {
  appContainer,
  board,
  buttons,
  deleteBoardButton,
  loggerButton,
} from "./App.css";
import BoardList from "./components/BoardList";
import ListsContainer from "./components/ListsContainer";
import { useTypedDispatch, useTypedSelector } from "./hooks/redux";
import EditModal from "./components/EditModal";
import LoggerModal from "./components/LoggerModal";
import { deleteBoard, sort } from "./store/slices/boardsSlice";
import { addLogger } from "./store/slices/loggerSlice";
import { DragDropContext } from "@hello-pangea/dnd";
import { v4 } from "uuid";

// 환경변수 추가
const App = () => {
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState("board-0");
  const boards = useTypedSelector((state) => state.boards.boardArray);
  const modalActive = useTypedSelector((state) => state.boards.modalActive);
  const dispatch = useTypedDispatch();

  const getActiveBoard = boards.filter(
    (board) => board.boardId === activeBoardId
  )[0];

  const lists = getActiveBoard.lists;

  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      dispatch(deleteBoard({ boardId: getActiveBoard.boardId }));

      const newIndexToSet = () => {
        const currentIndex = boards.findIndex(
          (board) => board.boardId === activeBoardId
        );

        return currentIndex === 0 ? 1 : currentIndex - 1;
      };

      setActiveBoardId(boards[newIndexToSet()].boardId);
    } else {
      alert("최소 하나의 게시판은 존재해야 합니다.");
    }

    dispatch(
      addLogger({
        logId: v4(),
        logMessage: `게시판 삭제하기: ${getActiveBoard.boardName}`,
        logAuthor: "User",
        logTimeStamp: Date.now(),
      })
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    const sourceList = lists.filter(
      (list) => list.listId == source.droppableId
    )[0];

    console.log("123", sourceList);

    dispatch(
      sort({
        boardIdx: boards.findIndex((board) => board.boardId === activeBoardId),
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIdxStart: source.index,
        droppableIdxEnd: destination.index,
        draggableId,
      })
    );

    dispatch(
      addLogger({
        logId: v4(),
        logMessage: `리스트 ${sourceList.listName}에서 ${
          destination.droppableId
        }로 ${
          lists.filter((list) => list.listId == destination.droppableId)[0]
            .listName
        } 을 옮김`,
        logAuthor: "User",
        logTimeStamp: Date.now(),
      })
    );
  };

  return (
    <div className={appContainer}>
      {isLoggerOpen && <LoggerModal setIsLoggerOpen={setIsLoggerOpen} />}
      {modalActive && <EditModal />}
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardI={setActiveBoardId}
      />
      <div className={board}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
        </DragDropContext>
      </div>
      <div className={buttons}>
        <button className={deleteBoardButton} onClick={handleDeleteBoard}>
          이 게시판 삭제하기
        </button>
        <button
          className={loggerButton}
          onClick={() => setIsLoggerOpen(!isLoggerOpen)}
        >
          {isLoggerOpen ? "활동 목록 숨기기" : "활동 목록 보이기"}
        </button>
      </div>
    </div>
  );
};

export default App;
