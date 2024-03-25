import { TasksContextProvider } from './context/TasksContextProvider'
import Body from './components/Body/Body'
import './App.css'

function App () {
  return (
    <>
      <TasksContextProvider>
        <Body />
      </TasksContextProvider>
    </>
  )
}

export default App
