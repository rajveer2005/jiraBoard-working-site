import './app.css'
import TaskForm from './components/TaskForm/task-form'
import TaskColumn from './components/TaskColumn/TaskColumn'

const App = () => {
  return (
    <div className='app'>
      <h1 style={{textAlign:"center",paddingTop:"80px"}}>Jira board</h1>
      <TaskForm/>
      <main className='app_main'>
        <TaskColumn title = "Ready for development"/>
        <TaskColumn title = "In Progress"/>
        <TaskColumn title = "Ready for test "/>
        <TaskColumn title = "Closed"/>
      </main>
    </div>
  )
}

export default App
