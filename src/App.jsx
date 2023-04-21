import { useState, useEffect } from "react";
import Task from "./components/Task";
import CompletedTask from "./components/CompletedTask";
import TaskGen from "./components/TaskGen";
import "./styles/main.css";

export default function App() {
  const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
  const [completedTasks, setCompletedTasks] = useState(localStorage.getItem("completed_tasks") ? JSON.parse(localStorage.getItem("completed_tasks")) : []);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    const storedCompletedTasks = localStorage.getItem("completed_tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
    if (storedCompletedTasks) setCompletedTasks(JSON.parse(storedCompletedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completed_tasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const handleCheckbox = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task));
  }

  const handleShow = () => {
    setShowCompleted(!showCompleted)
  }

  const handleDeleteFromCompleted = (id) => {
    setCompletedTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const handleCompleted = (actualTask) => {
    setCompletedTasks([...completedTasks, actualTask]);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== actualTask.id));
  }

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center md:max-w-[60vw] py-4 px-2 md:p-2">
      <div className="flex flex-col md:flex-row md:gap-0 gap-4 items-center justify-between mb-4">
        <h1 className="uppercase font-black text-4xl font-title">ToDo App</h1>
        <button className="p-2 px-4 bg-green-600 text-white font-body rounded-full" onClick={handleShow}>{showCompleted ? "Ver tareas pendientes" : "Mostrar tareas completadas"}</button>
      </div>
      <div className="flex flex-1 relative font-body flex-col p-4 md:p-16 bg-zinc-700 text-white max-h-[80vh] md:h-[80vh] rounded-lg shadow-[20px_20px_30px_-10px_rgba(0,0,0,.7)] overflow-y-scroll">
        {!showCompleted ?
          <>
            <TaskGen setTasks={setTasks} tasks={tasks} />
            {tasks.length === 0 ? <p>No tenés tareas pendientes. Podés agregar una arriba.</p> : tasks.map((task) => <Task task={task.name} id={task.id} checked={task.checked} key={task.id} handleCheckbox={handleCheckbox} handleDelete={handleDelete} handleCompleted={handleCompleted} />)}
          </> :
          <>
            {completedTasks.length === 0 ? <p>No tenés tareas completadas.</p> : completedTasks.map((task) => <CompletedTask task={task.name} id={task.id} key={task.id} handleDelete={handleDeleteFromCompleted} />)}
          </>}
      </div>
    </div>
  )
}