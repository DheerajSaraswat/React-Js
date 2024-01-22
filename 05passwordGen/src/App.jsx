import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(3)
  const [numbers, setNumbers] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback( ()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let pass = ''

    if(numbers) str+='0123456789'
    if(char) str+='!@#$%^&*_~'

    for (let i = 1; i <= length; i++) {
      
      const index = Math.floor(Math.random()*str.length)
      pass+=str.charAt(index)
      
    }

    setPassword(pass)

  }, [numbers,length,char,setPassword] )

  useEffect( ()=>{
    passwordGenerator()
  },[length, numbers, char] )

  const copyReference = useRef(null)


  return (
    <div className="h-screen w-full bg-black flex flex-wrap justify-center">
      <div className="h-fit w-fit py-5 px-8 my-5 bg-zinc-600 rounded-3xl ">
        <h1 className="text-white text-center font-bold my-3 text-2xl">
          Password Generator
        </h1>
        <div className="flex flex-wrap justify-center">
          <input
            className="rounded-xl outline-none w-80 px-4 my-5"
            type="text"
            value={password}
            readOnly
            ref={copyReference}
          />
          <button className="bg-violet-500 text-white h-8 px-4 rounded-2xl relative top-4 right-5 hover:scale-110 duration-75 ease-linear active:bg-violet-700" onClick={()=>{
            copyReference.current?.select()
            window.navigator.clipboard.writeText(password)
          }}>
            Copy
          </button>
        </div>
        <div className="flex flex-wrap">
          <input className='mr-4 accent-sky-400' type="range" name="slider" min={3} max={30} step={1} value={length} onChange={ (e)=>setLength(e.target.value) } />
          <input className='accent-sky-600 mr-1' type="checkbox" name="number" onClick={ ()=>setNumbers(!numbers) } />
          <label className="text-white mr-4" htmlFor="number">
            Numbers
          </label>
          <input className='accent-sky-600 mr-1' type="checkbox" name="special char" onClick={ ()=>setChar(!char) }/>
          <label className="text-white mr-4" htmlFor="special char">
            Special Characters
          </label>
        </div>
        <label className="text-white mx-8 text-xs relative bottom-2 " htmlFor="slider">
          Length: {length}
        </label>
      </div>
    </div>
  );
}

export default App
