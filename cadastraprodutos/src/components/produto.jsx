import Button from "./Button"

const Produto = ({ nome, url, preco, index, selecionado, onSelecionarChange, onExcluir }) => {
    return (
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <p>{nome}</p>
        <img style={{ width: 200 }} src={url} alt={nome} />
        <p>R$ {preco.toFixed(2)}</p>
        <input
          type="checkbox"
          checked={selecionado}
          onChange={() => onSelecionarChange(index)}
        />
        <Button onClick={() => onExcluir(index)}>Excluir</Button>
      </div>
    )
  }
  
  export default Produto
  