import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const body = document.querySelector('body');

function App() {
  const [color, setColor] = useState('black')
  body.style.backgroundColor = color
  return (
    <>
      <div className=" flex flex-wrap justify-around py-4 px-2 bg-slate-400 rounded-xl">
        <button
          className="text-white px-6 py-2 bg-red-700 rounded-3xl"
          onClick={() => setColor("rgb(185 28 28 / 1)")}
        >
          Red
        </button>
        <button
          className="text-white px-6 py-2 bg-black rounded-3xl"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className=" px-6 py-2 bg-amber-500 rounded-3xl text-white"
          onClick={() => setColor("rgb(245 158 11 / 1)")}
        >
          Amber
        </button>
        <button
          className="bg-violet-700 px-6 py-2 text-white rounded-3xl"
          onClick={() => setColor("rgb(109 40 217 /1)")}
        >
          Violet
        </button>
        <button
          className="bg-pink-700 px-6 py-2 text-white rounded-3xl"
          onClick={() => setColor("rgb(190 24 93 /1)")}
        >
          Pink
        </button>
        <button
          className="px-6 py-2 text-white rounded-3xl bg-green-500"
          onClick={() => setColor(`rgb(34 197 94 / 1)`)}
        >
          RoyalGreen
        </button>
        <button
          className="bg-orange-700 px-6 py-2 text-white rounded-3xl"
          onClick={() => setColor("rgb(194 65 12 / 1)")}
        >
          Orange
        </button>
      </div>
    </>
  );
}

export default App
