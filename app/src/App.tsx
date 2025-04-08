import st from "./App.module.css";

function App() {
  let name = "리액트";

  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
  };

  return (
    <div className={st.container}>
      <h1 className={st.test}>Hello, {name === "리액트" && "REACT"}</h1>
      <p style={style}>반갑습니다.</p>
    </div>
  );
}

export default App;
