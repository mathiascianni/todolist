import { useState } from "react";
import Task from "./components/Task";
import TaskGen from "./components/TaskGen";
import "./styles/main.css";

export default function App() {
  const [tasks, setTasks] = useState(["Lavar"]);

  const handleDelete = (i) => {
    setTasks(tasks.filter(task => task[i]));
  }

  return (
    <div className="main-app">
      <TaskGen setTasks={setTasks} tasks={tasks}/>
      {tasks == "" ? <p>Aquí no hay nada! D:</p> : tasks.map((task, i) => <Task task={tasks[i]} key={i} handleDelete={() => handleDelete(i)}/>)}
    </div>
  )
}
