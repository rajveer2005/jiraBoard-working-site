import "./task-form.css"
import Tag from "../Tag/tag";
import { useState } from "react";
const TaskForm = () => {

const [TaskData , setTaskData] = useState ({
  // initail values
  task : "",
  status : "Ready For Development"
});

const handleChange = (e) =>{
  const {name, value} = e.target;
  setTaskData((prev)=>{
    return {...prev, [name] : value}
  });
}
const handleSubmit = (e)=>{
  e.preventDefault();
console.log(TaskData);
}

      // const [task,setTask] = useState("");
      // const [status,setStatus] = useState("");
      //   const handleTask = (e) =>{
      //     setTask(e.target.value);
      //   }
      //   const handleStatusChange =(e) =>{
      //     setStatus(e.target.value);
      //   }
      //   console.log(task,status);
       return (
      <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
        name = "task"
         type='text' 
         className='task_input'
         placeholder='enter task details'
         onChange={handleChange}
        />
        <div className="task_form_bottom">
        <div>
             <Tag tagName = "DEV"/>
             <Tag tagName = "QA"/>
             <Tag tagName = "Product Owner"/>
            
        </div>
        <div>
        <select className='task_status' 
            name = "status"
            onChange={handleChange}>
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
