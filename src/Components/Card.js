import React from 'react'
import { MdOutlineDone, MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const Card = ({task, deleteTask, togleTaskDone}) => {
  return (
    <div className="bg-gray-600 flex flex-row rounded-xl mb-3 mx-2 py-5">
      <div className="flex flex-row space-between">
        <div className="border-r-8 rounded-r-xl mr-2 border-green-400"></div>
        <Link
          to={`/profile/${task.id}`}>
          <img
              className="rounded-full h-24 w-24"
              src='https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'/>        
        </Link>
      </div>
      <div className="flex-grow w-70 px-3 flex flex-col justify-around items-start">
        <div>{`${task.firstName} ${task.lastName}`}</div>
        <div>{task.birthDate}</div>
        <div>{task.area}</div>
      </div>
      <div className="px-2">
        <div style={{maxWidth: "50px"}}>
        <Popup 
          trigger={<button><BsThreeDotsVertical/></button>} 
          position="bottom right"
          arrow={false}
          contentStyle={{ padding: '0px', border: 'none', width: '50px' }}>
          <div className="flex flex-col items-center justify-center space-between">
          <Link 
            to={`/edit/${task.id}`}>
            <MdModeEditOutline className="m-2" size={24}/>
          </Link>
          <AiFillDelete className="m-2" size={24} onClick={() => deleteTask(task.id)}/>
          <MdOutlineDone className="m-2" size={24} onClick={() => togleTaskDone(task.id)}/>
          </div>
        </Popup>
        </div>
      </div>
    </div>
  )
}

export default Card
