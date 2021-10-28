import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

import { GlobalContext } from "../context/GlobalContext";
import { db } from "../db/firebaseConfig";

const TaskForm = () => {

  const {addTask, tasks, updateTask} = useContext(GlobalContext)
  const history = useHistory()
  const params = useParams()
  

  const [student, setStudent] = useState({
    id: '',
    title: '',
    description: '',
    done: false,
    firstName: '',
    lastName: '',
    allergies: '',
    birthDate: '',
    area: '',
    photoUrl: '',
    gender: '',
    fatherName: '',
    fatherCI: '',
    fatherPhone: '',
    fatherMobile: '',
    motherName: '',
    motherCI: '',
    motherPhone: '',
    motherMobile: '',
  })

  const handleChange = e => {
    setStudent({...student, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (student.id) {
      updateTask(student)
    } else {
      addTask(student)
    }
    
    history.push('/')
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()
    if(student.id) {
      updateTask(student)
    } else {
      addTask(student)
      await addDoc(collection(db, 'students'), student)
    }
    
    history.push('/')
  }

  useEffect(() => {
    const taskFound = tasks.find(task => task.id === params.id)
    console.log(taskFound);
    if (taskFound) {
      console.log('editing');
      setStudent(taskFound)
    } else {
      console.log('creating');
    }
  }, [params.id, tasks])

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="w-full max-w-lg" onSubmit={handleSubmit2}>
        <p className="text-green-400 text-x italic">Student Information</p>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-green-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="firstName"
              placeholder="Jane"
              onChange={handleChange}
              value={student.firstName} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            name="lastName" 
            type="text" 
            placeholder="Doe"
            onChange={handleChange}
            value={student.lastName} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-password">
              Alergias
            </label>
            <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            name="allergies" 
            type="text" 
            placeholder=""
            onChange={handleChange}
            value={student.allergies} />
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
              Fecha de Nacimiento
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              name="birthDate" 
              type="date"
              onChange={handleChange} 
              value={student.birthDate} />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-state">
              Area
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option></option>
                <option>Estimulacion Temprana</option>
                <option>Caminadores</option>
                <option>Apoyo Escolar</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-state">
              Genero
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-gender">
                <option></option>
                <option>Femenino</option>
                <option>Masculino</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <p className="text-green-400 text-x italic">Father Information</p>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
              Nombre del Padre
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              name="fatherName" 
              type="text" 
              placeholder="Albuquerque"
              onChange={handleChange}
              value={student.fatherName} />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-zip">
              CI
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              name="fatherCI" 
              type="text" 
              placeholder="9021032"
              onChange={handleChange}
              value={student.fatherCI} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
              Telefono
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              name="fatherPhone" 
              type="text" 
              placeholder="Albuquerque"
              onChange={handleChange}
              value={student.fatherPhone} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-zip">
              Celular
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="fatherMobile" 
              type="text" 
              placeholder="90210"
              onChange={handleChange}
              value={student.fatherMobile} />
          </div>
        </div>
        <button 
          type="submit"
          className="bg-green-400 w-full hover:bg-green-500 py-2 px-4 mt-5">
            {student.id ? 'Save' : 'Create Task'}
        </button>        
      </form>     
    </div>
  )
}

export default TaskForm
