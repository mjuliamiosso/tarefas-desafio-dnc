import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(prevState => [... prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  return (
    <>
      <Header></Header>
      <Form addTask={addTask}></Form>

      {tasks && (
      <TaskList 
        tasks={tasks}
        deleteTask={deleteTask}
        >
        </TaskList>
        )}
    </>
  )
}

export default App
