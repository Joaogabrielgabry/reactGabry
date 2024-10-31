import { useEffect, useState } from 'react'
import './App.css'
import Produto from './components/produto.jsx'

function App() {
  const [produtos, setProdutos] = useState([])
  const [nome, setNome] = useState('')
  const [urlImagem, setUrlImagem] = useState('')
  const [preco, setPreco] = useState(0)
  const [precoFinal, setPrecoFinal] = useState(0)

  useEffect(() => { alert("bem-vindo(a)")}, [])
  useEffect(() => { alert("produtos foram alterados")}, [produtos])

  const handleNomeChange = (e) => {
    setNome(e.target.value)
  }

  const handleURLChange = (e) => {
    setUrlImagem(e.target.value)
  }

  const handlePrecoChange = (e) => {
    setPreco(e.target.value)
  }

  const handleFormReset = () => {
    setNome('')
    setUrlImagem('')
    setPreco(0)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const produto = {
      nome,
      urlImagem,
      preco: Number(preco),
      selecionado: false
    }
    setProdutos([...produtos, produto])
    handleFormReset()
  }

  const handleSelectChange = (index) => {
    setProdutos(
      produtos.map((produto, i) => {
        if (i === index) {
          return { ...produto, selecionado: !produto.selecionado }
        } else {
          return produto
        }
      })
    )
  }

  const handleExcluirClick = (index) => {
    setProdutos(produtos.filter((_, i) => i !== index))
  }

  const handleVerPrecoClick = () => {
    const total = produtos
      .filter((produto) => produto.selecionado)
      .reduce((acc, produto) => acc + produto.preco, 0)
    setPrecoFinal(total)
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <label>Nome do produto:</label>
        <input value={nome} onChange={handleNomeChange} type="text" />
        <p />
        <label>URL da imagem: </label>
        <input value={urlImagem} onChange={handleURLChange} type="url" />
        <p />
        <label>Preço: </label>
        <input value={preco} onChange={handlePrecoChange} type="number" min="0" />

        <p />
        <button type="submit">Incluir Produto</button>
        <button type="reset">Limpar Formulário</button>
      </form>

      <h2>Produtos Cadastrados</h2>
      {produtos.length > 0 ? (
        produtos.map((produto, index) => (
          <Produto
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            url={produto.urlImagem}
            index={index}
            selecionado={produto.selecionado}
            onSelecionarChange={handleSelectChange}
            onExcluir={handleExcluirClick}
          />
        ))
      ) : (
        <h3>Não há produtos cadastrados</h3>
      )}

      <p />
      <button onClick={handleVerPrecoClick}>Ver Preço</button>
      {precoFinal > 0 && <h1>Valor Final: R$ {precoFinal.toFixed(2)}</h1>}
    </>
  )
}

export default App
