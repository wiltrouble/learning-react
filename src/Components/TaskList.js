import React, { useContext, useEffect, useState } from 'react'
import { collection, query, onSnapshot  } from "firebase/firestore";

import { db } from "../db/firebaseConfig";
import { GlobalContext } from "../context/GlobalContext";
import Card from './Card';

const TaskList = () => {

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


  const {cards, deleteTask, togleTaskDone} = useContext(GlobalContext)


  
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 sm:grid-cols-1">
        {
          students.map(task => (
            <Card
              key={task.id} 
              task={task} 
              deleteTask={deleteTask} 
              togleTaskDone={togleTaskDone}/>
          ))
        }
      </div>
    </div>
  )
}

export default TaskList
