import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

const Profile = () => {
  const {tasks} = useContext(GlobalContext)
  const history = useHistory()
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
      
      {/* {console.log(task.title)} */}
    </div>
  )
}

export default Profile
