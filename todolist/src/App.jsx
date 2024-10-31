import { useState } from 'react'
import './App.css'

function App() {
  var lista = ['Lavar o carro', 'Lavar a louça', 'Jogar ps5']
  const [novaTarefa, setNovaTarefa] = useState('olá')
  const [listaTarefas, setListaTarefas] = useState([])

  const handleNovoValorChange = (event) => {
    setNovaTarefa(event.target.value)
  }

  const handleIncluirClick = () => {
    setListaTarefas([...listaTarefas, novaTarefa])
  }

  const handleRemoveList = (tarefa) => {
    setListaTarefas(listaTarefas.filter((value, index) => index !== tarefa))
  }

  return (
    <>
      <input value={novaTarefa} onChange={handleNovoValorChange} />
      <button onClick={handleIncluirClick}>Incluir</button>
      <hr />
      <div>
        {listaTarefas.map((value, index) => (
          <div key={index}>
            <span>{value}</span>
            <button onClick={() => handleRemoveList(index)}>X</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
