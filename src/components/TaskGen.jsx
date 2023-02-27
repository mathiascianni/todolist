import { useState } from "react"
import Button from "./Button"

const TaskGen = ({ setTasks, tasks }) => {
    const [newTask, setNewTask] = useState("");

    const handleMessage = (event) => {
        setNewTask(event.target.value);
    }

    const handleTasks = () => {
        setNewTask("");
        if(newTask.trim() != "") setTasks([...tasks, newTask]);
    }

    return (
        <div>
            <input type="text" placeholder="¿Qué tenés que hacer?" onChange={handleMessage} value={newTask}/>
            <Button icon="fa-solid fa-share" color="green" click={handleTasks} />
        </div>
    )
}

export default TaskGen