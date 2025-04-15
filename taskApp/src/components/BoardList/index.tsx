import { useRef, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm";
import { FiPlusCircle } from "react-icons/fi";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  signInAndOutText,
  title,
} from "./BoardList.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import clsx from "clsx";
import app from "../../firebase";
import { clearUser, setUser } from "../../store/slices/userSlice";
import useAuth from "../../hooks/useAuth";

type BoardListProps = {
  activeBoardId: string;
  setActiveBoardI: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList = ({ activeBoardId, setActiveBoardI }: BoardListProps) => {
  const { boardArray } = useTypedSelector((state) => state.boards);
  const { isAuth } = useAuth();

  const dispatch = useTypedDispatch();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickPlusCircle = () => {
    setIsFormOpen(!isFormOpen);
    setTimeout(() => inputRef.current?.focus());
  };

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const onClickLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        console.log(userCredential);

        dispatch(
          setUser({
            id: userCredential.user.uid,
            email: userCredential.user.email,
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onClickSignOut = () => {
    dispatch(clearUser());
  };

  console.log("isAuth", isAuth);

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

        {isAuth ? (
          <span className={signInAndOutText} onClick={onClickSignOut}>
            로그아웃
          </span>
        ) : (
          <span className={signInAndOutText} onClick={onClickLogin}>
            로그인
          </span>
        )}
      </div>
    </div>
  );
};

export default BoardList;
