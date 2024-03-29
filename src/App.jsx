import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'

function App() {
  const [tasks, setTasks] = useState([])
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const addTask = (task) => {
    setTasks(prevState => [... prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (t.id === id ? { ...t, checked:!t.checked}
      : t)))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (t.id === task.id ? { ...t, name: task.name}
      : t)))
      closeEditMode()
  }

  const closeEditMode = () => {
    setIsEditing(false)

  }

  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)

  }

  return (
    <>
      <Header></Header>
      <Form addTask={addTask}></Form>
      {
        isEditing && (
          <EditForm 
        editedTask={editedTask}
        updateTask={updateTask}
        />
        )
      }
      {tasks && (
        <TaskList 
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        enterEditMode={enterEditMode}
        >
        </TaskList>
        )}
    </>
  )
}

export default App
