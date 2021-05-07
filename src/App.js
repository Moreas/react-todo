import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Food Shopping', day: 'Feb 5th at 2:30pm', reminder: true },
    { id: 2, text: 'Doctor Appointment', day: 'Feb 7th at 10:30am', reminder: true },
    { id: 3, text: 'Meeting at School', day: 'Feb 5th at 2:30pm', reminder: true }
  ])

  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = task => {
    const id = Math.floor(Math.random() * 10000 + 1)
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }

  const toggleShowAdd = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className='container'>
      <Header onAdd={toggleShowAdd} showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  )
}

export default App
