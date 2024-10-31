import { useState } from 'react'
import './App.css'
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState([])
  const [autor, setAutor] = useState('')
  const [comentario, setComentario] = useState('')

  const handleAutorChange = (e) => {
    setAutor(e.target.value)
  }

  const handleComentarioChange = (e) => {
    setComentario(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const novoPost = { autor, comentario, likes: 0 }
    setPosts([...posts, novoPost])
    setAutor('')
    setComentario('') 
  }

  const handleExcluirClick = (i) => {
    setPosts(posts.filter((_, index) => index !== i))
  }

  const handleLikeClick = (i) => {
    setPosts(posts.map((post, index) =>
      i !== index ? post : { ...post, likes: post.likes + 1 }
    ))
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='autor'>Autor: </label>
        <input value={autor} onChange={handleAutorChange} id='autor' type='text' />

        <label htmlFor='comentario'>Comentário: </label>
        <input value={comentario} onChange={handleComentarioChange} id='comentario' type='text' />

        <button type='submit'>Salvar</button>
      </form>

      <div className='post-container'>
        {posts.map((post, index) => (
          <Post
            key={index}
            autor={post.autor}
            comentario={post.comentario}
            likes={post.likes}
            index={index}
            onExcluir={handleExcluirClick}
            onLike={handleLikeClick}
          />
        ))}
      </div>
    </>
  )
}

export default App
