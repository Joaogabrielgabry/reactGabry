import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [novoValor, setNovoValor] = useState(0)

  function handleIncrementClick() {
    setCount(count + 1)
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleResetClick = () => {
    setCount(0)
  }

  const handleNovoValorChange = (event) => {
    setNovoValor(parseInt(event.target.value))
  }

  const handleAlterarClick = () => {
      setCount(novoValor)
  }
  return (
    <>
      <div className="App">
        <label>Contador: </label>
        <span>{count}</span>
      </div>

      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleIncrementClick}>+</button>
      <p></p>
      <button onClick={handleResetClick}>Reset</button>
      <p></p>
      <input min={0} value={novoValor} type='number' onChange={handleNovoValorChange} />
      <button onClick={handleAlterarClick}>Alterar</button>
    </>
  )
}

export default App
