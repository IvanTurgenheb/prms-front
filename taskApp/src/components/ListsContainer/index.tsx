import { ListType } from "../../types";
import ActionButton from "../ActionButton";
import List from "../List";
import { listsContainer } from "./ListContainer.css";

type ListsContainerProps = {
  boardId: string;
  lists: ListType[];
};

const ListsContainer = ({ boardId, lists }: ListsContainerProps) => {
  return (
    <div className={listsContainer}>
      {lists.map((list) => (
        <List key={list.listId} list={list} boardId={boardId} />
      ))}
      <ActionButton boardId={boardId} listId={""} list />
    </div>
  );
};

export default ListsContainer;
