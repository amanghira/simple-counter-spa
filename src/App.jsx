import { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import ThemeToggle from "./components/ThemeToggle";
import Form from "./components/Form";

function App() {
  const [page, setPage] = useState("counter");

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setPage("counter")}>Counter</button>
      <button onClick={() => setPage("todo")}>To-Do</button>
      <button onClick={() => setPage("theme")}>Theme Toggle</button>
      <button onClick={() => setPage("form")}>Form</button>

      {page === "counter" && <Counter />}
      {page === "todo" && <Todo />}
      {page === "theme" && <ThemeToggle />}
      {page === "form" && <Form />}
    </div>
  );
}

export default App;
