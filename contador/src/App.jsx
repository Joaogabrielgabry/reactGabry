import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const  [cont, setCont] = useState(0)

  function cliqueIncrementar(){
    setCont(cont + 1)
  }
  
  return (
    <>
      <span>{cont}</span>
      <button onClick={cliqueIncrementar}>Incrementar</button>
    </>
  )
}

export default App
