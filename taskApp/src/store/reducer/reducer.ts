import { boardReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";
import { userReducer } from "../slices/userSlice";

const reducer = {
  loggers: loggerReducer,
  boards: boardReducer,
  modals: modalReducer,
  users: userReducer,
};

export default reducer;
