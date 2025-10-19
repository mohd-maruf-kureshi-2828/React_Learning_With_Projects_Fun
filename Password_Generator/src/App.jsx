import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [number,setNumber]=useState(false)
  const[char,setChar]=useState(false)
  const[password,setPassworld]=useState("")
  
  // useRef Hook copy ke liye
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUWSYZabcdefghijklmnopqwsrthjueujexyz'
    if(number) str += '012345678910'
    if(char) str +='@#~&*'

    for(let i=1;i<=length;i++){
       let char=Math.floor(Math.random()*str.length + 1)
       pass +=str.charAt(char)
    }
    setPassworld(pass)


  },[length,number,char,setPassworld])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])

const copyclicked=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,30)
  window.navigator.clipboard.writeText(password)
},[password])
  return (
    <>
    <div class="container">
    <div class="output-box">
      <input type="text" placeholder="Enter text..." 
      value={password}
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyclicked}
       class="copy-btn"
       >Copy</button>
    </div>

    <div class="range-section">
      <label>Length : {length}</label>
      <input
       type="range" 
       min={6} 
       max={100} 
       value={length}
       onChange={(e)=>{setlength(e.target.value)}} />
    </div>

    <div class="options">
      <label><input 
      type="checkbox"
      defaultChecked={number}
      onChange={()=>{
        setNumber((prev)=>!prev)
      }} 
      /> Numbers</label>
      <label><input
      type="checkbox" 
      defaultChecked={char}
      onChange={()=>{
        setChar((prev)=>!prev)
      }}
      /> Characters</label>
    </div>
  </div>

    </>
  )
}

export default App
