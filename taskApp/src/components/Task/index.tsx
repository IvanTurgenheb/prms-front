import { container } from "./Task.css";

type TaskProps = {
  taskName: string;
  taskDescription: string;
  boardId: string;
  id: string;
  idx: number;
};

const Task = ({ taskName, taskDescription, boardId, id, idx }: TaskProps) => {
  return (
    <div className={container}>
      <div>{taskName}</div>
      <div>{taskDescription}</div>
    </div>
  );
};

export default Task;
