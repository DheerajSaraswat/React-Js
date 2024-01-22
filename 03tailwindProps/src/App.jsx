import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-green-800 px-2 py-1 bg-slate-400 rounded-xl">
        Tailwind
      </h1>
      <Card dressName="dress1" />
      <Card image="https://images.pexels.com/photos/19686433/pexels-photo-19686433/free-photo-of-side-view-of-a-young-woman-in-a-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </>
  );
}

export default App
