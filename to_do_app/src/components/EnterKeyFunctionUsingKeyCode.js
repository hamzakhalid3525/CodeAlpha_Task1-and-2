import React, { useState } from "react";

function EnterKeyFunctionUsingKeyCode()
{
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    function createTodo()
    {
        setTodos(oldTodos => {
        setTask('')
        return [...oldTodos, task];
        })
    }

    function tryToCheckForEnterKey(e)
    {
        if(e.keyCode === 13)
        {
        createTodo()
        }
    }

    return(
        <div>
            <h1>Best To Do App Ever</h1>
            <input
                onKeyDown={tryToCheckForEnterKey}
                type='text' 
                value={task}
                onChange={event => {
                setTask(event.target.value)
                }}
            />
            
            <button onClick={createTodo}>Create Todo</button>

            <ul>
                {todos.map(todo => {
                return (<li>{todo}</li>);
                })}
            </ul>

        </div>
    )

}

export default EnterKeyFunctionUsingKeyCode