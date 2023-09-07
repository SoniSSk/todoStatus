import React from "react";
import "./App.css";
import TodoPage from "./page/TodoPage";
import Counter from "./page/Counter";
import NameComponent from "./page/NameComponent";

function App() {
  return (
    <div>
      <TodoPage />
      <Counter />
      <NameComponent />
    </div>
  );
}

export default App;
