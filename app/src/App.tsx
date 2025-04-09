import st from "./App.module.css";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className={st.container}>
      <h1>오늘 할일</h1>
      <TodoList />
      <Timer />
    </div>
  );
}

export default App;
