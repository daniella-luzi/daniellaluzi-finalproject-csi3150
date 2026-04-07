import { useState, useEffect } from 'react';

function ToDoList() {
    const [task, setTask] = useState(() => {
        //getting local storage for the tasks. if there are tasks, display them.
        const saved = localStorage.getItem("task");
        return saved ? JSON.parse(saved) : [];
    });
    
    const [newTask, setNewTask] = useState("");
    const [searchTask, setSearchTask] = useState("");

    //setting local storage for the tasks
      useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task));
    }, [task]);


    const addTask = () => {
        //alerting the user if the task is empty
        if (newTask === "") {
            alert("Please enter a task");
            return;
        }

        //ensuring the task has a unique id and getting the text
        const newTaskObject = {
            id: Date.now(),
            text: newTask
        };

        setTask([...task, newTaskObject]);
        setNewTask("");
    };

    //updating the task list by filtering out the completed tasks
    const removeTask = (id) => {
        const updatedTasks = task.filter((taskItem) => taskItem.id !== id);
        setTask(updatedTasks);
    };

    //filtering the tasks and making sure it is not case-sensitive
    const filteredToDo = task.filter((taskItem) =>
        taskItem.text.toLowerCase().includes(searchTask.toLowerCase())
    );

    //displaying filtered tasks if there is a keyword searched. showing all tasks if there is no keyword searched
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