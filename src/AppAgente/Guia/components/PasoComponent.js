//Autor: Arturo Montes G.
//Desc: Componente para mostrar los pasos de la guia
import React from 'react';
import DOMPurify from 'dompurify';
import '../styles/styles.css';

const PasoComponent = ({ index, paso, searchString }) => {
//Desc:tiene una animacion cuando aparece y desaparece. Tambien teine funcion para resaltar texto 
  const resaltarTexto = (text) => {
    if (!searchString) return text; 

    const regex = new RegExp(`(${searchString})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  // Función para sanitizar HTML
  const sanitizarHTML = (html) => {
    return DOMPurify.sanitize(html);
  };

  return (
      <div style={{ userSelect: 'none', fontSize: '.7rem', marginLeft:'-20px'}} className='paso' dangerouslySetInnerHTML={{__html: sanitizarHTML(resaltarTexto(`Paso ${index + 1}: ${paso}`))}} />
  );
};

export default PasoComponent;
