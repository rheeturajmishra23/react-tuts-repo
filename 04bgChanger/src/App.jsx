import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState('black')

  return (
    <>
      <div className="w-screen h-screen" 
        style={{backgroundColor:color}}
      >
        <button onClick={()=>setColor("olive")} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-5">
        Badge
      </button>
      <button onClick={()=>setColor("red")} className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 m-5">
        Badge
      </button>
      <button onClick={()=>setColor("yellow")} className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 m-5">
        Badge
      </button>
      <button onClick={()=>setColor("green")} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 m-5">
        Badge
      </button>
      <button onClick={()=>setColor("blue")} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 m-5">
        Badge
      </button>
      <button onClick={()=>setColor("indigo")} className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 m-5">
        Badge
      </button>
      <button onClick={()=>setColor("purple")} className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 m-5">
        Badge
      </button>
      <button onClick={()=>setColor("pink")} className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 m-5">
        Badge
      </button>
      </div>
      
    </>
  )
}

export default App
