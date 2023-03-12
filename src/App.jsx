import { useState } from "react";
import Task from "./components/Task";
import TaskGen from "./components/TaskGen";
import "./styles/main.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const handleCheckbox = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task));
  }

  return (
    <div className={"main-app " + (toggleTheme ? "dark" : "")}>
      <div className="container">
        <div className="header">
          <h1>ToDo App</h1>
          <button onClick={() => setToggleTheme(!toggleTheme)}>{!toggleTheme ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}</button>
        </div>
        <TaskGen setTasks={setTasks} tasks={tasks} />
        {tasks.length === 0 ? <p>No tenés tareas pendientes. Podés agregar una arriba.</p> : tasks.map((task) => <Task task={task.name} id={task.id} checked={task.checked} key={task.id} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />)}
      </div>
    </div>
  )
}