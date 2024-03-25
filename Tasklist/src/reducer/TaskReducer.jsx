import { TASK_ACTIONS } from '../consts/TasksActions'

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK: {
      const updatedTasks = [...state, action.payload]
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      return updatedTasks
    }
    case TASK_ACTIONS.DELETE_TASK: {
      const filteredTasks = state.filter(task => task.id !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(filteredTasks))
      return filteredTasks
    }
    case TASK_ACTIONS.COMPLETE_TASK: {
      const updatedTasks = state.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      return updatedTasks
    }
    case TASK_ACTIONS.COMPLETE_ALL_TASKS: {
      const filteredTasks = state.filter(task => task.completed !== true)
      localStorage.setItem('tasks', JSON.stringify(filteredTasks))
      return filteredTasks
    }
    case TASK_ACTIONS.DELETE_ALL_TASKS: {
      const filteredTasks = []
      localStorage.setItem('tasks', [])
      return filteredTasks
    }

    default:
      console.error('Task load failed.')
      return state
  }
}
