import React, { useContext } from 'react'

import { GlobalContext } from "../context/GlobalContext";
import Card from './Card';

const TaskList = () => {
  const {tasks, deleteTask, togleTaskDone} = useContext(GlobalContext)
  
  return (
    <div className="flex justify-center">
      {/* <button onClick={() => deleteTask()}>Delete all</button> */}
      <div className="grid grid-cols-4">
        {
          tasks.map(task => (
            <Card
              key={task.id} 
              task={task} 
              deleteTask={deleteTask} 
              togleTaskDone={togleTaskDone}/>
          ))
        }
        {/* <Card/> */}
      </div>

    </div>
  )
}

export default TaskList
