import { useState, useEffect } from "react";
import Task from "./components/Task";
import CompletedTask from "./components/CompletedTask";
import TaskGen from "./components/TaskGen";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./styles/main.css";

export default function App() {
  const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
  const [completedTasks, setCompletedTasks] = useState(localStorage.getItem("completed_tasks") ? JSON.parse(localStorage.getItem("completed_tasks")) : []);
  const [showCompleted, setShowCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    const storedCompletedTasks = localStorage.getItem("completed_tasks");
    const storedTheme = localStorage.getItem("theme");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
    if (storedCompletedTasks) setCompletedTasks(JSON.parse(storedCompletedTasks));
    if (storedTheme) setDarkMode(JSON.parse(storedTheme));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completed_tasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

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
    <div className={darkMode ? "dark" : ""} >
      <div className="min-h-screen  flex flex-col justify-center dark:bg-zinc-800 transition-all">
        <div className={`container mx-auto py-4 px-2 md:p-2 lg:max-w-[60vw]`}>
          <div className="flex flex-col md:flex-row md:gap-0 gap-4 items-center justify-between mb-4">
            <h1 className="uppercase font-black text-4xl font-title dark:text-white">ToDo App</h1>
            <div className="flex gap-2">
              <button className="text-white aspect-square bg-zinc-700 p-2 flex items-center justify-center rounded-full dark:bg-slate-200 dark:text-black transition-all" onClick={() => setDarkMode(!darkMode)}>{!darkMode ? <DarkModeIcon /> : <LightModeIcon />}</button>
              <button className="p-2 px-4 bg-green-600 text-white font-body rounded-full" onClick={handleShow}>{showCompleted ? "Ver tareas pendientes" : "Mostrar tareas completadas"}</button>
            </div>
          </div>
          <div className="flex flex-1 relative font-body flex-col p-4 md:p-16 bg-zinc-700 dark:bg-zinc-200 text-white h-[80vh] rounded-lg shadow-[20px_20px_30px_-5px_rgba(0,0,0,.7)] dark:shadow-[20px_20px_40px_-5px_rgba(0,0,0,1)] overflow-y-scroll transition-all">
            {!showCompleted ?
              <>
                <TaskGen setTasks={setTasks} tasks={tasks} />
                {tasks.length === 0 ? <p className="dark:text-black">No tenés tareas pendientes. Podés agregar una arriba.</p> : tasks.map((task) => <Task task={task.name} id={task.id} checked={task.checked} key={task.id} handleCheckbox={handleCheckbox} handleDelete={handleDelete} handleCompleted={handleCompleted} />)}
              </> :
              <>
                {completedTasks.length === 0 ? <p className="dark:text-black">No tenés tareas completadas.</p> : completedTasks.map((task) => <CompletedTask task={task.name} id={task.id} key={task.id} handleDelete={handleDeleteFromCompleted} />)}
              </>}
          </div>
        </div>
      </div>
    </div>
  )
}