import React from 'react'
import "./TaskColumn.css"
import TaskCard from '../TaskCard/TaskCard'

const TaskColumn = (props) => {
  return (
    <div>
      <section className='task_coloumn'>
        <h2 className='Task_Column_Heading'>{props.title  }

        </h2>
        <TaskCard/>
      </section>
    </div>
  )
}

export default TaskColumn
