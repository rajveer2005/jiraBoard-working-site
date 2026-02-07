import "./task-form.css"
import React from "react";
import Tag from "../Tag/Tag";

import { useState } from "react";
const TaskForm = ({setTasks}) => {

const [TaskData , setTaskData] = useState ({
  // initail values
  task : "",
  status : "Ready For Development",
  tags : []
});

const checkTag= (tag) =>{
    return (TaskData.tags.some((item)=> item === tag));
}


const handleChange = (e) =>{
  const {name, value} = e.target;
  setTaskData((prev)=>{
    return {...prev, [name] : value}
  });
}
const handleSubmit = (e)=>{
  e.preventDefault();
  setTasks((prev)=>{
    return [...prev,TaskData]
  })
}


const selectTag = (tag) =>{
    setTaskData((prev)=>{
      const isSelected = prev.tags.includes(tag);
      const tags = isSelected 
      ? prev.tags.filter((item)=> item !==tag) 
      : [...prev.tags,tag];
      return {...prev ,tags};
    })
  
  // if(TaskData.tags.some((item)=> item === tag)){
  //   const filterTags = TaskData.tags.filter((item)=> item !== tag);
  //  setTaskData((prev)=>{
  //   return {...prev,tags:filterTags};
  //  });      
  // }else{
  //   setTaskData((prev)=>{
  // return { ...prev, tags: [...prev.tags, tag] };
  //   });
  // }
};
console.log(TaskData);

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
             <Tag tagName = "DEV" selectTag = {selectTag} selected = {checkTag("DEV")}/>
             <Tag tagName = "QA" selectTag = {selectTag} selected = {checkTag("QA")}/>
             <Tag tagName = "Product Owner" selectTag = {selectTag} selected = {checkTag("Product Owner")}/>
            
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
