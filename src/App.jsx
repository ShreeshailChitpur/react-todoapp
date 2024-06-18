import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeToDo(e) {
    setInputVal(e.target.value);
  }

  function addToDo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]); //add new to do after spreading previous to dos
      setInputVal("");
    }
  }

  // console.log(todos)

  function delToDo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <>
      <main>
        <h1>To Do.</h1>
        <InputContainer
          inputVal={inputVal}
          writeToDo={writeToDo}
          addToDo={addToDo}
        />
        <ToDoContainer todos={todos} delToDo={delToDo} />
      </main>
    </>
  );
}

export default App;
