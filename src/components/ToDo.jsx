import React from "react";

function ToDo({todo, index, delToDo}) {
  return (
    <div>
      <div className="todo">
        <p>{todo}</p>
        <div className="actions">
          <input type="checkbox" />
          <button onClick={() => delToDo(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
