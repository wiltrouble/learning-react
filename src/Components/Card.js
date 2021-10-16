import React from 'react'
import { MdOutlineDone, MdModeEditOutline } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const Card = ({task}) => {
  return (
    <div className="bg-gray-900 rounded-lg flex flex-row mb-4 mx-2">
      <div className="flex flex-col items-center justify-center space-around m-2 bg-red-900">
        <div className="bg-red-100 rounded-full h-20 w-20 flex items-center justify-center">
          <AiFillHeart size="40" color="black"/>
        </div>
        <button
          className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2">Done
        </button>
      </div>
      <div className="flex flex-col py-6 w-4/5">
        <h2>{task.title}</h2>
        <p>{task.description}</p>        
      </div>
      <div className="flex flex-col items-center justify-center space-between">
        <MdModeEditOutline className="m-2" size={24}/>
        <AiFillDelete className="m-2" size={24}/>
        <MdOutlineDone className="m-2" size={24}/>
      </div>
    </div>
  )
}

export default Card
