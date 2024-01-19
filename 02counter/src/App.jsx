import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [count, setCount] = useState(0)
  let [addCount, setaddCount] = useState(0)
  let [removeCount, setremoveCount] = useState(0)
  function add(){
    if(count<10){
      count += 1;
      setCount(count);
      addCount += 1;
      setaddCount(addCount);
    } else {
      alert(`You can only add ${count} times.`)
    }
  }
  function remove(){
    if(count>0){
      setCount(count-1)
      setremoveCount(removeCount+1)
    } else {
      alert(`You can't remove more items than ${count}`)
    }
  }
  let answer = addCount - removeCount    // it also changes because answer is a derived state now as it is getting value from two states
  // let answer = useMemo(() => addCount - removeCount, [addCount]);

  
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={add}>Add {addCount}</button>
      <button onClick={remove}>Remove {removeCount}</button>
      <h2>Add - Remove = {answer}</h2>
    </>
  )
}

export default App
