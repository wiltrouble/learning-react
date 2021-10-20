import React, { useContext } from 'react'

import { GlobalContext } from "../context/GlobalContext";
import Card from './Card';

const TaskList = () => {
  const {tasks, deleteTask, togleTaskDone} = useContext(GlobalContext)
  
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-1">
        {
          tasks.map(task => (
            <Card
              key={task.id} 
              task={task} 
              deleteTask={deleteTask} 
              togleTaskDone={togleTaskDone}/>
          ))
        }
      </div>
    </div>
  )
}

export default TaskList
