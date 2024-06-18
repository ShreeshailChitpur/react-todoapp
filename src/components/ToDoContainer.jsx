import React from "react";
import ToDo from "./ToDo";

function ToDoContainer({todos, delToDo}) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return (
          <ToDo todo={todo} index={index} delToDo={delToDo}/>
        )
      })}
    </div>
  );
}

export default ToDoContainer;
