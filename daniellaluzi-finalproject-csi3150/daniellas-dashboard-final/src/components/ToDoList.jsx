import { useState, useEffect } from 'react';

function ToDoList() {
    const [task, setTask] = useState(() => {
        const saved = localStorage.getItem("task");
        return saved ? JSON.parse(saved) : [];
    });
    
    const [newTask, setNewTask] = useState("");
    const [searchTask, setSearchTask] = useState("");

      useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task));
    }, [task]);


    const addTask = () => {
        if (newTask === "") {
            alert("Please enter a task");
            return;
        }

        const newTaskObject = {
            id: Date.now(),
            text: newTask
        };

        setTask([...task, newTaskObject]);
        setNewTask("");
    };

    const removeTask = (id) => {
        const updatedTasks = task.filter((taskItem) => taskItem.id !== id);
        setTask(updatedTasks);
    };

    const filteredToDo = task.filter((taskItem) =>
        taskItem.text.toLowerCase().includes(searchTask.toLowerCase())
    );

    const tasksToDisplay = searchTask ? filteredToDo : task;

    return(
        <div className="todoContainer">
            <h2 className="todolistTitle">To-Do List</h2>
            <input className="todoInput" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task!"/>
            <button className="todoButton" onClick={addTask}>Add task</button>
            
            <div className="todosearchDiv">
                <input className="searchInput" type="text"
                    placeholder="Search tasks!"
                    value={searchTask}
                    onChange={(e) => setSearchTask(e.target.value)}
                />
            </div>
            
            <ul>
                {tasksToDisplay && tasksToDisplay.length > 0 ? (
                    tasksToDisplay.map((taskItem) => (
                        <li className="taskItem" key={taskItem.id}>
                           • {taskItem.text}
                            <button className="completeBtn" onClick={() => removeTask(taskItem.id)}>✅</button>
                        </li>
                    ))
                ) : (
                    <p className="noTasks">No tasks yet! Add a task above.</p>
                )}
            </ul>
        </div>
    );
}


export default ToDoList;