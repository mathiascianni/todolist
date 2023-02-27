import { useState } from "react"
import Button from "./Button"

const Task = ({ task, handleDelete }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckbox = (event) => {
        setChecked(!checked)
    }


    return (
        <div className="task">
            <input type="checkbox" onChange={handleCheckbox} />
            <p className={checked ? "mark" : ""}>{task}</p>
            <Button color="red" icon="fa-solid fa-trash" click={handleDelete} disabled={!checked}></Button>
        </div>
    )
}

export default Task