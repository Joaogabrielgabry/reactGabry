const Post = ({ autor, comentario, likes, index, onExcluir, onLike }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
      <h2>{autor}</h2>
      <p>{comentario}</p>
      <p>Likes: {likes}</p>
      <button onClick={() => onLike(index)}>Like</button>
      <button onClick={() => onExcluir(index)}>Excluir</button>
    </div>
  )
}

export default Post
