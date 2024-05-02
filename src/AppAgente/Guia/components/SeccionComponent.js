// SeccionComponent.js
import React from 'react';
import SubtituloComponent from './SubtituloComponent';
import '../styles/styles.css'

const SeccionComponent = ({ seccion }) => {
  return (
    <div className='seccion'>
      <h2>{seccion.titulo}</h2>
      {seccion.subtitulos.map((subtitulo, index) => (
        <SubtituloComponent key={index} subtitulo={subtitulo} />
      ))}
    </div>
  );
};

export default SeccionComponent;
