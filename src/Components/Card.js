import React from 'react'
import { MdOutlineDone, MdModeEditOutline } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Card = ({task, deleteTask, togleTaskDone}) => {
  return (
    // <div className="bg-gray-900 rounded-lg flex flex-row mb-4 mx-2">
    //   <div className="flex flex-col items-center justify-center space-around m-2 bg-red-900">
    //     <Link
    //       to={`/profile/${task.id}`}>
    //       <div className="bg-red-100 rounded-full h-20 w-20 flex items-center justify-center">
    //         <AiFillHeart size="40" color="black"/>
    //       </div>        
    //     </Link>
    //   </div>
    //   <div className="flex flex-col py-6 w-4/5">
    //     <h2>{task.title}</h2>
    //     <p>{task.description}</p>        
    //   </div>
    //   <div className="flex flex-col items-center justify-center space-between">
    //     <Link 
    //       to={`/edit/${task.id}`}>
    //       <MdModeEditOutline className="m-2" size={24}/>
    //     </Link>
    //     <AiFillDelete className="m-2" size={24} onClick={() => deleteTask(task.id)}/>
    //     <MdOutlineDone className="m-2" size={24} onClick={() => togleTaskDone(task.id)}/>
    //   </div>
    // </div>
    <div className="bg-gray-600 flex flex-row rounded-xl mb-3 mx-2 py-5">
      <div className="flex flex-row space-between">
        <div className="border-r-8 rounded-r-xl mr-2 border-green-400"></div>
        <img
            className="rounded-full h-24 w-24"
            src='https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'/>
      </div>
      <div className="flex-grow w-70 px-10 flex flex-col justify-around">
        <div>{`${task.firstName} ${task.lastName}`}</div>
        <div>{task.birthDate}</div>
        <div>{task.area}</div>
      </div>
      <div className="px-2">
        <BsThreeDotsVertical/>
      </div>
    </div>
  )
}

export default Card
