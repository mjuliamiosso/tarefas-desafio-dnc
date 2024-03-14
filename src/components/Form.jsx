import styles from './Form.module.css'

export const Form = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
        <h1>
            Otimize seu tempo e se organize com o nosso<br></br>
            <span>Planejador Diário!</span> 
        </h1>
        <div>
            <input type="text" 
            id='task' 
            //value={task} 
            // onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
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