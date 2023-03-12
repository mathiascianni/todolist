import { useState, useEffect } from "react"
import Button from "./Button"

const TaskGen = ({ setTasks, tasks }) => {
    const [newTask, setNewTask] = useState({});
    const [taskName, setTaskName] = useState("");
    const [lastTaskId, setLastTaskId] = useState(0);

    const handleMessage = (event) => {
        setTaskName(event.target.value);
    }

    useEffect(() => {
        if (tasks.length === 0) setLastTaskId(0);
        else {
            const lastTask = tasks.slice(-1);
            setLastTaskId(lastTask[0].id + 1);
        }
    }, [tasks]);

    const handleTasks = () => {
        const task = { id: lastTaskId, name: taskName, checked: false }
        if (taskName.trim() != "") setTasks([...tasks, task]);
        setTaskName("");
    }

    return (
        <div className="task-gen">
            <input className="input-text" type="text" placeholder="¿Qué tenés que hacer?" onChange={handleMessage} value={taskName} />
            <Button icon="fa-solid fa-share" color="green" click={handleTasks} />
        </div>
    )
}

export default TaskGen