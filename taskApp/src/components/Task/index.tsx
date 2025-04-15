import { Draggable } from "@hello-pangea/dnd";
import { container } from "./Task.css";

type TaskProps = {
  taskName: string;
  taskDescription: string;
  boardId: string;
  id: string;
  idx: number;
};

const Task = ({ taskName, taskDescription, id, idx }: TaskProps) => {
  return (
    <Draggable index={idx} draggableId={id}>
      {(draggableProvider) => (
        <div
          className={container}
          ref={draggableProvider.innerRef}
          {...draggableProvider.draggableProps}
          {...draggableProvider.dragHandleProps}
        >
          <div>{taskName}</div>
          <div>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
