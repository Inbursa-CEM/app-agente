// GuiaComponent.js
import React from 'react';
import SeccionComponent from './SeccionComponent';

const GuiaComponent = ({ guia }) => (
  <div>
    <h1>{guia.titulo}</h1>
    {guia.secciones.map((seccion, index) => (
      <SeccionComponent key={index} seccion={seccion} />
    ))}
  </div>
);

export default GuiaComponent;
