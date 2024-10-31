import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [temZap, setTemZap] = useState(false)
  const [observacao, setObservacao] = useState('')
  const [contatos, setContatos] = useState([])

  const handleNomeChange = (event) => {
    setNome(event.target.value)
  }

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value)
  }

  const handleTemZapChange = (event) => {
    setTemZap(event.target.checked)
  }

  const handleObservacaoChange = (event) => {
    setObservacao(event.target.value)
  }

  const handleAddContato = (event) => {
    event.preventDefault()
    const contato = {
      nome,
      telefone,
      temZap,
      observacao
    }
    setContatos([...contatos, contato])
    setNome('')
    setTelefone('')
    setTemZap(false)
    setObservacao('')
  }

  const handleDeletarContato = (index) => {
    const novosContatos = contatos.filter((_, i) => i !== index)
    setContatos(novosContatos)
  }

  const handleDeletarContatos = () => {
    setContatos([])
  }

  const handleLimparFormulario = () => {
    setNome('')
    setTelefone('')
    setTemZap(false)
    setObservacao('')
  }

  return (
    <>
      <form onSubmit={handleAddContato}>
        <label>Nome:</label>
        <input onChange={handleNomeChange} value={nome} type="text" placeholder="Escreva seu nome" />
        <p></p>
        <label>Número:</label>
        <input onChange={handleTelefoneChange} value={telefone} type="text" placeholder="Seu número" />
        <p></p>
        <label>Tem WhatsApp:</label>
        <input onChange={handleTemZapChange} checked={temZap} type="checkbox" />
        <p></p>
        <label>Observações:</label>
        <textarea onChange={handleObservacaoChange} value={observacao} />
        <p></p>
        <button type="submit">Salvar</button>
        <button type="button" onClick={handleLimparFormulario}>Limpar formulário</button>
      </form>
      <hr />
      <h2>Contatos</h2>
      <ul>
        {contatos.map((value, index) => (
          <li key={index}>
            {value.nome} | {value.telefone} | {value.temZap ? "Sim" : "Não"} | {value.observacao}
            <button onClick={() => handleDeletarContato(index)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={handleDeletarContatos}>Deletar todos os contatos</button>
    </>
  )
}

export default App
