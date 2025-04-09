import { useState } from "react";
import st from "./TodoList.module.css";
import clsx from "clsx";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", isChecked: false },
    { id: 2, text: "리액트 복습하기", isChecked: false },
    { id: 3, text: "리액트 프로젝트 만들기", isChecked: false },
  ]);

  const addTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const title = form.get("title") as string;

    if (title.length < 1) return;

    setTodos((prevData) => [
      ...prevData,
      { id: prevData.length + 1, text: title, isChecked: false },
    ]);

    e.currentTarget.reset();
  };

  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className={st.container}>
      <form onSubmit={addTodo}>
        <input name="title" type="text" />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <input type="checkbox" onClick={() => completeTodo(todo.id)} />
            <h4 className={clsx(todo.isChecked && st.textLine)}>{todo.text}</h4>
            <span
              onClick={() => deleteTodo(todo.id)}
              style={{ color: "red", cursor: "pointer" }}
            >
              삭제
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
