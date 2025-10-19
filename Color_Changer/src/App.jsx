import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState('black')

  return (
    <div style={{ width: '100vw', height: '200vh', backgroundColor: color }}>
      <div className="card">
        <div className="card-header">
          Colors
        </div>
        <div className="card-body bg-success bg-gradient" style={{display:'flex', justifyContent:'space-around',alignContent:'center'}}>
          <button onClick={()=>setColor('Blue')} type="button" className="btn btn-outline-primary text-white">Blue</button>
          <button onClick={()=>setColor('Lightblue')} type="button" className="btn btn-outline-secondary text-white">Light Blue</button>
       
          <button onClick={()=>setColor('red')} type="button" className="btn btn-outline-danger text-white">Danger</button>
          <button onClick={()=>setColor('yellow')} type="button" className="btn btn-outline-warning text-white">Warning</button>
          <button onClick={()=>setColor('white')} type="button" className="btn btn-outline-light  text-black">Light</button>
        </div>
      </div>
    </div>
  )
}

export default App
