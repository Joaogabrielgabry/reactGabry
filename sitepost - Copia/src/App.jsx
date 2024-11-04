import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Post } from './components/Post';
import { api } from './api/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [autor, setAutor] = useState('');
  const [comentario, setComentario] = useState('');
  const refAutor = useRef(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await api.get('/posts');
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
  };

  const handleAutorChange = (e) => {
    setAutor(e.target.value);
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const novoPost = { autor, comentario, likes: 0 };
    try {
      const response = await api.post('/posts', novoPost);
      console.log(response);
      await getPosts();
      limparForm();
      refAutor.current.focus();
    } catch (error) {
      console.error("Erro ao salvar o post:", error);
    }
  };

  const limparForm = () => {
    setAutor('');
    setComentario('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='autor'>Autor: </label>
        <input ref={refAutor} value={autor} onChange={handleAutorChange} id='autor' />

        <p />
        <label htmlFor='comentario'>Comentário: </label>
        <input value={comentario} onChange={handleComentarioChange} id='comentario' />

        <p />
        <button type='submit'>Salvar</button>
      </form>

      <p />
      <hr />
      <p />

      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post
            key={index}
            autor={post.autor}
            comentario={post.comentario}
            likes={post.likes}
            id={post.id}
            getPosts={getPosts}
          />
        ))
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </>
  );
}

export default App;
