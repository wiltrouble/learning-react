import { createContext, useReducer, useState, useEffect } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";
import { collection, query, onSnapshot  } from "firebase/firestore";

import { db } from "../db/firebaseConfig";

export const GlobalContext = createContext([])

export const ContextProvider = ({children}) => {

  const [students, setStudents] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'students'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let studentsArray = [];
      querySnapshot.forEach((doc) =>{
        studentsArray.push({...doc.data(), id:doc.id})
      });
      setStudents(studentsArray)
    })
    return () => unsub()
  }, [])
  console.log(students);

  const [state, dispatch] = useReducer(appReducer, [])

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