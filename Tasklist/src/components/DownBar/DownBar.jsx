import './DownBar.css'
import { useState, useEffect } from 'react'
import { Button } from '../Button/Button'

export function DownBar ({ tasks, onCompleteTasks }) {
  const [completedTasks, setCompletedTasks] = useState('0 / 0')

  useEffect(() => {
    if (tasks) {
      const completedTasksCount = tasks.filter(task => task.completed).length
      setCompletedTasks(`${completedTasksCount} / ${tasks.length} done`)
    }
  }, [tasks])

  return (
    <div>
      <p className='textt'>{completedTasks}</p>
      <div>
        <Button title='Mark all as done' onClick={() => onCompleteTasks()} />
      </div>

    </div>
  )
}
