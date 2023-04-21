import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SendIcon from '@mui/icons-material/Send';

const TaskGen = ({ setTasks, tasks }) => {
    const [taskName, setTaskName] = useState("");

    const handleMessage = (event) => {
        setTaskName(event.target.value);
    }

    const handleTasks = () => {
        const task = { id: uuidv4(), name: taskName, checked: false }
        if (taskName.trim() != "") setTasks([...tasks, task]);
        setTaskName("");
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleTasks();
        }
    }


    return (
        <div className="flex mb-8" onKeyDown={handleEnter}>
            <input className="p-4 flex-1 placeholder-gray-800 transition-all rounded-l-md text-black bg-white/70 focus:bg-white/100 focus:outline-0" type="text" placeholder="¿Qué tenés que hacer?" onChange={handleMessage} value={taskName} />
            <button onClick={handleTasks} className="bg-green-600 transition-all rounded-r-md aspect-square flex justify-center items-center p-4 hover:bg-green-700"><SendIcon/></button>
        </div>
    )
}

export default TaskGen