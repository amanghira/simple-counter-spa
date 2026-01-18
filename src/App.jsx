import { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  const [page, setPage] = useState("counter");

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setPage("counter")}>Counter</button>
      <button onClick={() => setPage("todo")}>To-Do</button>

      {page === "counter" && <Counter />}
      {page === "todo" && <Todo />}
    </div>
  );
}

export default App;
