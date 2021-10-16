export default function appReducer(state, {type, payload}) {

  switch (type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, payload]
      }
    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter((task) => task.id !== payload)
      }

    case 'UPDATE_TASK':
      const updatedTask = payload

      const updatedTasks = state.tasks.map(x => {
        if (x.id  === updatedTask.id) {
          x.title = updatedTask.title
          x.description = updatedTask.description
        }
        return x;
      })
      return {
        ...state,
        tasks: updatedTasks
      }
    case 'TOGLE_TASK_DONE':
      console.log("done");
      console.log(payload.id);
      return {
        tasks: state.tasks.map((task) => task.id === payload? {...task, done: !task.done} : task)
      }
  
    default:
      return state
  }

  
}