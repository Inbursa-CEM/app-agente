// SeccionComponent.js
import React from 'react';
import SubtituloComponent from './SubtituloComponent';

const SeccionComponent = ({ seccion }) => (
  <div>
    <h2>{seccion.titulo}</h2>
    {seccion.subtitulos.map((subtitulo, index) => (
      <SubtituloComponent key={index} subtitulo={subtitulo} />
    ))}
  </div>
);

export default SeccionComponent;
