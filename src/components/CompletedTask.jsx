import DeleteIcon from '@mui/icons-material/Delete';

const CompletedTask = ({ task, id,  handleDelete }) => {
    return (
        <div className={`flex items-center pl-4 mb-4 text-black rounded-full transition-all bg-white`}>
            <p className="flex-1 px-4">{task}</p>
            <button onClick={() => handleDelete(id)} className="bg-red-600 text-white hover:cursor-pointer transition-all aspect-square m-2 p-2 hover:bg-red-800 rounded-full"><DeleteIcon /></button>
        </div>
    );
}

export default CompletedTask;
