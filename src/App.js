import React from 'react';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';
import './style.css';

export default function App() {
  const sujeto = {
    nombre: 'perez',
    urlImagen: 'https://via.placeholder.com/64',
    Texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Saludo persona="pepito" edad={25} />
      <Saludo persona="perez" />
      <Comentario sujeto={sujeto} />
    </div>
  );
}
