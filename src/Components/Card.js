import React from 'react'
import { MdOutlineDone, MdModeEditOutline } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Card = ({task, deleteTask, togleTaskDone, profile}) => {
  return (
    <div className="bg-gray-900 rounded-lg flex flex-row mb-4 mx-2">
      <div className="flex flex-col items-center justify-center space-around m-2 bg-red-900">
        <Link
          to={`/profile/${task.id}`}>
          <div className="bg-red-100 rounded-full h-20 w-20 flex items-center justify-center">
            <AiFillHeart size="40" color="black"/>
          </div>        
        </Link>
      </div>
      <div className="flex flex-col py-6 w-4/5">
        <h2>{task.title}</h2>
        <p>{task.description}</p>        
      </div>
      <div className="flex flex-col items-center justify-center space-between">
        <Link 
          to={`/edit/${task.id}`}>
          <MdModeEditOutline className="m-2" size={24}/>
        </Link>
        <AiFillDelete className="m-2" size={24} onClick={() => deleteTask(task.id)}/>
        <MdOutlineDone className="m-2" size={24} onClick={() => togleTaskDone(task.id)}/>
      </div>
    </div>
  )
}

export default Card
