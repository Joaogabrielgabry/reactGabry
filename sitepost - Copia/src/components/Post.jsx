import { useEffect } from "react"
import { api } from '../api/api'

const Post = ({ autor, comentario, likes, id, getPosts }) => {

  const handleExcluirClick = async (id) => {
    const response = await api.delete(`/posts/${id}`)
    getPosts()
  }

  const handleLikeClick = async (id, likes) => {
    const response = await api.patch(`/posts/${id}`, {
      likes: likes + 1
    })
    getPosts()
  }

  useEffect(() => {
  }, [])

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
      <h2>{autor}</h2>
      <h3>{comentario}</h3>
      <button onClick={() => handleLikeClick(id, likes)}>Likes: {likes}</button>
      <button onClick={() => handleExcluirClick(id)}>Excluir</button>
    </div>
  )
}

export { Post }
