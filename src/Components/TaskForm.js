import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const TaskForm = () => {

  const {addTask, tasks, updateTask} = useContext(GlobalContext)
  const history = useHistory()
  const params = useParams()
  

  const [task, setTask] = useState({
    id: '',
    title: '',
    description: ''
  })

  const handleChange = e => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (task.id) {
      updateTask(task)
    } else {
       addTask(task)
    }
    
    history.push('/')
  }

  useEffect(() => {
    const taskFound = tasks.find(task => task.id === params.id)
    console.log(taskFound);
    if (taskFound) {
      console.log('editing');
      setTask(taskFound)
    } else {
      console.log('creating');
    }
  }, [params.id, tasks])

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10"
        onSubmit={handleSubmit}>
        <h2 className="text-3x-1 mb-7">{
          task.id ? 'Editing a task' : 'Creating a task'
        }</h2>
        <div className="mb-5">
          <input type="text" 
            name="title"
            placeholder="Write a title"
            onChange={handleChange}
            value={task.title}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"/>
        </div>

        <div className="mb-5">
          <textarea 
            name="description"
            value={task.description} 
            rows="2"
            onChange={handleChange} 
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"/>
        </div>
        <button 
          type="submit"
          className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
            {task.id ? 'Save' : 'Create Task'}
        </button>
      </form>
    </div>
  )
}

export default TaskForm
