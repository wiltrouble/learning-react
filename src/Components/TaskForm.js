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
      {/* <form className="bg-gray-900 p-10"
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
      </form> */}

      <form class="w-full max-w-lg">
        <p class="text-green-400 text-x italic">Student Information</p>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-green-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-password">
              Alergias
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="******************" />
            
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
              Fecha de Nacimiento
            </label>
            <input 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-city" 
              type="date" 
              placeholder="Albuquerque" />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-state">
              Area
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option></option>
                <option>Estimulacion Temprana</option>
                <option>Caminadores</option>
                <option>Apoyo Escolar</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-state">
              Genero
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-gender">
                <option></option>
                <option>Femenino</option>
                <option>Masculino</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <p class="text-green-400 text-x italic">Father Information</p>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
              Nombre del Padre
            </label>
            <input 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-city" 
              type="text" 
              placeholder="Albuquerque" />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-zip">
              CI
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
              Telefono
            </label>
            <input 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-city" 
              type="text" 
              placeholder="Albuquerque" />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-zip">
              Celular
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
          </div>
        </div>

        <p class="text-green-400 text-x italic">Mother Information</p>
        <div class="flex flex-wrap -mx-3 mb-2">
          
          <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
              Nombre de la Madre
            </label>
            <input 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-city" 
              type="text" 
              placeholder="Albuquerque" />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-zip">
              CI
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
              Telefono
            </label>
            <input 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-city" 
              type="text" 
              placeholder="Albuquerque" />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-zip">
              Celular
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="+591" />
          </div>
        </div>
        <button 
          type="submit"
          className="bg-green-400 w-full hover:bg-green-500 py-2 px-4 mt-5">
            {task.id ? 'Save' : 'Create Task'}
        </button>        
      </form>     
    </div>
  )
}

export default TaskForm
