import { useState } from 'react';
import styles from './Form.module.css'

export const Form = ({addTask}) => {
    const [task, setTask] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
        <div>
            <input type="text" 
            id='task' 
            value={task} 
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={38}
            placeholder='Nova tarefa...' />
            <button
            aria-label='Add Task'
            type='submit'
            >+</button>
        </div>
        
    </form>
  )
}

export default Form