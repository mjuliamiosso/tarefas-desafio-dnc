import React, { useState } from 'react'
import styles from './TaskItem.module.css'
import pencilIcon from '../assets/icons/pencil.svg'
import trashIcon from '../assets/icons/trash.svg'

const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked] = useState(task.checked)

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked)
        toggleTask(task.id)
    }

  return (
    <li className={styles.task}>
        <div className={styles.taskCheck}>
            <input 
            type="checkbox"
            checked={isChecked} 
            onChange={handleCheckboxChange}
            name={task.name}
            id={task.id}
            />
            <label 
            htmlFor={task.id}>
                {task.name}
            </label>
        </div>

        <div className={styles.taskGroup}>
            <button
            arial-label={`Update ${task.name} Task`}
            onClick={() => enterEditMode(task)}
            >
                <img src={pencilIcon} alt="error" />
            </button>

            <button
            arial-label={`Delete ${task.name} Task`}
            onClick={() => deleteTask(task.id)}
            >
                <img src={trashIcon} alt="error" />
            </button>
        </div>
    </li>
  )
}

export default TaskItem