import { useState } from 'react'
import Card from './components/Cards.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name="arbaz"/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
