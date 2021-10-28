import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'title one',
      description: 'description for title one',
      done: false,
      firstName: 'Martina',
      lastName: 'Lopez',
      allergies: 'Sarampion, Mani',
      birthDate: '18/09/2021',
      area: 'Estimulacion Temprana',
      photoUrl: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      gender: 'Femenino',
      fatherName: 'Wilson Lopez',
      fatherCI: '2776827',
      fatherPhone: '4706131',
      fatherMobile: '75988122',
      motherName: 'Eliana Monica Nogales',
      motherCI: '2776827',
      motherPhone: '4706131',
      motherMobile: '75988122',
    },
    {
      id: '2',
      title: 'title two',
      description: 'description for title two',
      done: false,
      firstName: 'Leonel Fernando',
      lastName: 'Lopez Nogales',
      allergies: 'Sarampion, Mani',
      birthDate: '19/12/2021',
      area: 'Estimulacion Temprana',
      photoUrl: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      gender: 'Femenino',
      fatherName: 'Wilson Lopez',
      fatherCI: '2776827',
      fatherPhone: '4706131',
      fatherMobile: '75988122',
      motherName: 'Eliana Monica Nogales',
      motherCI: '2776827',
      motherPhone: '4706131',
      motherMobile: '75988122',
    },
    {
      id: '3',
      title: 'title three',
      description: 'description for title two',
      done: false,
      firstName: 'Leonel Fernando',
      lastName: 'Lopez Nogales',
      allergies: 'Sarampion, Mani',
      birthDate: '19/12/2021',
      area: 'Estimulacion Temprana',
      photoUrl: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      gender: 'Femenino',
      fatherName: 'Wilson Lopez',
      fatherCI: '2776827',
      fatherPhone: '4706131',
      fatherMobile: '75988122',
      motherName: 'Eliana Monica Nogales',
      motherCI: '2776827',
      motherPhone: '4706131',
      motherMobile: '75988122',
    },
    {
      id: '4',
      title: 'title four',
      description: 'description for title two',
      done: false,
      firstName: 'Fernando',
      lastName: 'Lopez Nogales',
      allergies: 'Sarampion, Mani',
      birthDate: '19/12/2021',
      area: 'Estimulacion Temprana',
      photoUrl: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      gender: 'Femenino',
      fatherName: 'Wilson Lopez',
      fatherCI: '2776827',
      fatherPhone: '4706131',
      fatherMobile: '75988122',
      motherName: 'Eliana Monica Nogales',
      motherCI: '2776827',
      motherPhone: '4706131',
      motherMobile: '75988122',
    },
  ],
}


export const GlobalContext = createContext(initialState)

export const ContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = (task) => {
    dispatch({type: 'ADD_TASK', payload: {...task, task}})
  }

  const deleteTask = (id) => dispatch({type: 'DELETE_TASK', payload: id})

  const updateTask = (task) => dispatch({type: 'UPDATE_TASK', payload: task})

  const togleTaskDone = id => dispatch({type: 'TOGLE_TASK_DONE', payload: id})

  return (
    <GlobalContext.Provider value={{...state, addTask, deleteTask, updateTask, togleTaskDone}}>
      {children}
    </GlobalContext.Provider>
  )
}