import './app.css'
import TaskForm from './components/TaskForm/task-form'
import TaskColumn from './components/TaskColumn/TaskColumn'
import { useState } from 'react'

const App = () => {
  const [task,setTasks] = useState([]);
  console.log(task);
  return (
    <div className='app'>
      <h1 style={{textAlign:"center",paddingTop:"80px"}}>Jira board</h1>

       <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn 
        title = "Ready for development" 
        task = {task} 
        status= "Ready for development"
        />
        <TaskColumn
         title = "In Progress"
        task = {task} 
        status= "In Progres"
        />
        <TaskColumn
         title = "Ready for test "
        task = {task} 
        status= "Ready for testt"
        />
        <TaskColumn
         title = "Closed"
         task = {task} 
        status= "Closed"
        />
      </main>
    </div>
  )
}

export default App
