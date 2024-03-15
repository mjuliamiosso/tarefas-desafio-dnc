import { useState } from 'react';
import styles from './EditForm.module.css'

export const EditForm = ({editedTask, updateTask}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({... editedTask, name: updatedTaskName})
        
    }

  return (
    <div role='dialog' aria-labelledby='editTask' >
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <div>
                <input type="text" 
                id='editTask' 
                value={updatedTaskName} 
                onInput={(e) => setUpdatedTaskName(e.target.value)}
                required
                autoFocus
                maxLength={38}
                placeholder='Editar tarefa...' />
                <button
                aria-label={`Confirm edited task to now read ${updatedTaskName}`}
                type='submit'
                >✓</button>
            </div>
        </form>
    </div>
    
  )
}

export default EditForm