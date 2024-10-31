import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Aluno from './components/Aluno.jsx'
import Turma from './components/Turma.jsx'
import './App.css'

function App() {
  const lista = [
    { id: 0, nome: 'Raphael', media: 10, frequencia: 100, cor: 'blue', esporte: 'Futebol' },
    { id: 1, nome: 'Renan', media: 9, frequencia: 90, cor: 'yellow', esporte: 'Badminton' },
    { id: 2, nome: 'Mauro', media: 8, frequencia: 80, cor: 'red', esporte: 'Jiu-Jitsu' },
    { id: 3, nome: 'Sidney', media: 7, frequencia: 50, cor: 'green', esporte: '' },
  ];

  return (
    <>
      <Turma numero="101">
        {lista.map((value) => (
          <Aluno
            key={value.id}
            nome={value.nome}
            media={value.media}
            frequencia={value.frequencia}
            cor={value.cor}
            esporte={value.esporte}
          />
        ))}
      </Turma>
    </>
  );
}

export default App;
