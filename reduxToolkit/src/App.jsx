import { useState } from 'react'
import addTodo from './components/addTodo'
import todo from './components/todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <addTodo />
    <todo />
    </>
  )
}

export default App
