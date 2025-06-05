import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// using hook useState
  let [counter,setCounter]= useState(15) 
//(variable,function)
  
   //let counter =5
   const addValue=()=>{
    //counter = counter+1 
    console.log("clicked",counter);
    setCounter(counter+1)
   }
   const removeValue=() =>{
    setCounter(counter-1)
   }
  return (
    <>
      <h1>  React with me</h1>
      <h2> Counter value: 15</h2>

      <button
      onClick = {addValue}>Add value {counter}</button>
<br/> 
<button
onClick={removeValue}> remove value{counter}</button>
<fotter>Fotter {counter}</fotter>  
    </>
  )
}

export default App
