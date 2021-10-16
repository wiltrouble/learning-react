import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";
import Card from './Card';

const TaskList = () => {
  const {tasks, deleteTask, togleTaskDone} = useContext(GlobalContext)
  
  return (
    <div className="flex justify-center">
      {/* <button onClick={() => deleteTask()}>Delete all</button> */}
      <div className="grid grid-cols-4">
        {tasks && tasks.map(task => (
          <div className="bg-gray-900 px-20 py-5 text-white, shadow-2x1 mb-4 flex justify-between mx-2"
            key={task.id}>
            <div>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <button
                onClick={() => togleTaskDone(task.id)} 
                className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2">
                {task.done ? 'undone':'done'}
              </button>
            </div>
            <div>
              <Link 
                to={`/edit/${task.id}`}
                className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2">Edit</Link>
              <button
                onClick={() => deleteTask(task.id)} 
              className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2">Delete</button>
            </div>
          </div>
        ))}
        {
          tasks.map(task => (
            <Card task={task}/>
          ))
        }
        {/* <Card/> */}
      </div>

    </div>
  )
}

export default TaskList
