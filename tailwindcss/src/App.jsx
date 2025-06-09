import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj ={
  username: "Ganga",
  age:20
}
let newArr = [1,2,3]
  return (
    <>
      <div>
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>My portfolio</h1>
        </div>
        <Card channel="chaiarucode" someObj={myObj,newArr}></Card>
    </>
  )
}

export default App
