import React, { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    const handleInputChange = (e) => {
        setNewTasks(e.target.value);


    }

    const handleAddTask = () => {
        if (newTasks.trim() !== "") {
            setTasks(t => [...t, { id: crypto.randomUUID(), name: newTasks }])
            setNewTasks("");
        }
    }
    const handleDeleteTask = (id) => {
        setTasks(t => t.filter(task => task.id !== id));

    }
    const handleTaskUp = (index) => {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
                [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask)

        }

    }
    const handleTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] =
                [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask)



        }


    }

    return (
        <div className="Todolist-box">
            <h1>TODO LIST</h1>

            <input
                type="text"
                placeholder="Enter a task"
                value={newTasks}
                onChange={handleInputChange}
            />
            <button className="add-btn" onClick={handleAddTask}> Add Tasks</button>

            <div className="list-box">
                <ol>
                    {tasks.map((task, index) =>
                        <li key={task.id}>
                            <span>{task.name}</span>
                            <button className="del-btn" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            <button className="moveup-btn" onClick={() => handleTaskUp(index)}>Up</button>
                            <button className="movedown-btn" onClick={() => handleTaskDown(index)}>Down</button>
                        </li>)}
                </ol>
            </div>
        </div>
    )

}

export default Todo