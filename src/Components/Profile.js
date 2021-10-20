import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

const Profile = () => {
  const {tasks} = useContext(GlobalContext)
  const params = useParams()

  const [task, setTask] = useState({
    id: '',
    title: '',
    description: ''
  })

  useEffect(() => {
    const taskFound = tasks.find(task => task.id === params.id)
    
    if(taskFound) {
      setTask(taskFound)
    }
  }, [params.id, tasks])
  return (
    <div>
      
      {task.title}
    </div>
  )
}

export default Profile
