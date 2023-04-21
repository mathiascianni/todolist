import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const Task = ({ task, id, checked, handleDelete, handleCheckbox, handleCompleted }) => {
    const actualTask = {
        name: task,
        id: id,
        checked: checked
    }

    return (
        <div className={`flex items-center pl-8 mb-4 text-black rounded-full transition-all bg-white dark:bg-zinc-700 dark:text-white`}>
            <input type="checkbox" checked={checked} onChange={() => handleCheckbox(id)} />
            <p className="flex-1 px-4">{task}</p>
            <button onClick={() => handleCompleted(actualTask)} disabled={!checked} className="bg-green-600 text-white hover:cursor-pointer transition-all aspect-square m-2 p-2 disabled:cursor-default disabled:bg-green-200 hover:bg-green-800 rounded-full"><CheckIcon /></button>
            <button onClick={() => handleDelete(id)} disabled={!checked} className="bg-red-600 text-white hover:cursor-pointer transition-all aspect-square m-2 p-2 disabled:cursor-default disabled:bg-red-200 hover:bg-red-800 rounded-full"><DeleteIcon /></button>
        </div>
    )
}

export default Task