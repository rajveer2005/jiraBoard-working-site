const TaskColumn = ({ title, task, status }) => {
  return (
    <section className='task_coloumn'>
      <h2 className='Task_Column_Heading'>{title}</h2>

      {task.map((task, index) =>
        task.status === status && (
          <TaskCard
            key={index}
            title={task.task}
            tags={task.tags}
          />
        )
      )}
    </section>
  )
}

export default TaskColumn;