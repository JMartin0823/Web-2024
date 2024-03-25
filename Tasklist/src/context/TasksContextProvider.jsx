import { useReducer, useEffect } from 'react'
import { TasksContext } from './TasksContext'
import { tasksReducer } from '../reducer/TaskReducer'
import { TASK_ACTIONS } from '../consts/TasksActions'

const initTasks = JSON.parse(window.localStorage.getItem('tasks')) ?? []

export function TasksContextProvider ({ children }) {
  const [tasks, dispatchTask] = useReducer(tasksReducer, initTasks)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const createTask = (newTask) => {
    const action = {
      type: TASK_ACTIONS.ADD_TASK,
      payload: newTask
    }
    dispatchTask(action)
  }

  const deleteTask = (taskToDeleteID) => {
    const action = {
      type: TASK_ACTIONS.DELETE_TASK,
      payload: taskToDeleteID
    }
    dispatchTask(action)
  }

  const completeTask = (taskToCompleteID) => {
    const action = {
      type: TASK_ACTIONS.COMPLETE_TASK,
      payload: taskToCompleteID
    }
    dispatchTask(action)
  }

  const deleteAllTasks = () => {
    const action = {
      type: TASK_ACTIONS.DELETE_ALL_TASKS
    }
    dispatchTask(action)
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      createTask,
      deleteTask,
      completeTask,
      deleteAllTasks
    }}
    >
      {children}
    </TasksContext.Provider>
  )
}
