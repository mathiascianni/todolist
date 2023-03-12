import { useState } from "react"
import Button from "./Button"

const Task = ({ task, id, checked, handleDelete, handleCheckbox }) => {
    return (
        <div className="task">
            <input type="checkbox" checked={checked} onChange={() => handleCheckbox(id)} />
            <p className={checked ? "mark" : ""}>{task}</p>
            <Button color="red" icon="fa-solid fa-trash" click={() => handleDelete(id)} disabled={!checked}></Button>
        </div>
    )
}

export default Task