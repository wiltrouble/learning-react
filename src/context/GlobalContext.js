import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'title one',
      description: 'description for title one',
      done: false
    },
    {
      id: '2',
      title: 'title two',
      description: 'description for title two',
      done: true
    },
  ],
}


export const GlobalContext = createContext(initialState)

export const ContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = (task) => {
    dispatch({type: 'ADD_TASK', payload: {...task, id: v4(), done: false}})
  }

  const deleteTask = (id) => dispatch({type: 'DELETE_TASK', payload: id})

  const updateTask = (task) => dispatch({type: 'UPDATE_TASK', payload: task})

  const togleTaskDone = id => dispatch({type: 'TOGLE_TASK_DONE', payload: id})

  const profile = (task) => dispatch({type: 'PROFILE', payload: task})

  return (
    <GlobalContext.Provider value={{...state, addTask, deleteTask, updateTask, togleTaskDone}}>
      {children}
    </GlobalContext.Provider>
  )
}