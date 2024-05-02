// SubtituloComponent.js
import React from 'react';
import PasoComponent from './PasoComponent';

const SubtituloComponent = ({ subtitulo }) => (
  <div>
    <h3>{subtitulo.titulo}</h3>
    <ol>
      {subtitulo.pasos.map((paso, index) => (
        <PasoComponent key={index} paso={paso} />
      ))}
    </ol>
  </div>
);

export default SubtituloComponent;
