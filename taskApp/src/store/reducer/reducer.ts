import { boardReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

const reducer = {
  loggers: loggerReducer,
  boards: boardReducer,
  modals: modalReducer,
};

export default reducer;
