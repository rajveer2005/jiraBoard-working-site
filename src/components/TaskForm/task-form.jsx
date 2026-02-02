import "./task-form.css"
import Tag from "../Tag/tag";


    const TaskForm = () => {
  return (
      <header className='app_header'>
      <form>
        <input type='text' 
        className='task_input'
         placeholder='enter task details'
        ></input>
        <div className="task_form_bottom">
        <div>
             <Tag tagName = "DEV"/>
             <Tag tagName = "QA"/>
             <Tag tagName = "Product Owner"/>
            
        </div>
        <div>
        <select className='task_status'>
            <option value="Ready for development">Ready for development</option>
            <option value="in progress">in progress</option>
            <option vlaue = "Ready for test">Ready for test</option>
            <option vlaue = "Close">Close</option>
        </select>
        <button type='submit' className='task_submit'>++Add</button>
        </div>
        </div>
      </form>

      </header>

  )
}

export default TaskForm;
