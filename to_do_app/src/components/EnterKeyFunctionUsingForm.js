import React, { useState } from "react";

function EnterKeyFunctionUsingForm() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [globalID, setGlobalID] = useState(0);

  function createTodo(event) {
    setGlobalID(globalID + 1);
    console.log(globalID);
    event.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalID }];
    });
  }

  function deleteItem(itemID) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }

  return (
    <div className="todo-app">
      <h1>Best To Do App Ever</h1>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />

        <button type="submit" className="create-btn">
          Create Todo
        </button>
      </form>

      <table>
        {todos.map((item, index) => {
          return (
            <tr>
              <div key={index}>
                <td className="td-index"> {index}</td>
                <td className="td-item">{item.todo}</td>
                <td className="td-action">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </div>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default EnterKeyFunctionUsingForm;
