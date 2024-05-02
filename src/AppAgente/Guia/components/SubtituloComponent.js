// SubtituloComponent.js
import React from 'react';
import PasoComponent from './PasoComponent';
import '../styles/styles.css'

const SubtituloComponent = ({ subtitulo }) => {
  return (
    <div className='subtitulo'>
      <h3>{subtitulo.titulo}</h3>
      <ol>
        {subtitulo.pasos.map((paso, index) => (
          <PasoComponent key={index} paso={paso} />
        ))}
      </ol>
    </div>
  );

};

export default SubtituloComponent;
