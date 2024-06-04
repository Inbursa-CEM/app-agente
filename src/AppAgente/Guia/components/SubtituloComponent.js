//Autor: Arturo Montes G.
//Desc: componente para renderear subtitulos con animacion
import React, { useRef, useState } from 'react';
import PasoComponent from './PasoComponent';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import DOMPurify from 'dompurify';
import '../styles/animations.css';
import '../styles/styles.css';

const SubtituloComponent = ({ seccionIndex, subtituloIndex, subtitulo, searchString }) => {
  //Desc: si se ense;a o se oculta hay una animacion, tambien se marca el texto 
  //buscado por el usuario.
  const [show, setShow] = useState(true);
  const nodeRef = useRef(null);

  const resaltarTexto = (text) => {
    if (!searchString) return text; 

    const regex = new RegExp(`(${searchString})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  const sanitizarHTML = (html) => {
    return DOMPurify.sanitize(html);
  };

  return (
    <div className='subtitulo'>
      <h3 style={{ marginLeft: "-20px", userSelect: 'none', fontSize: '1rem' }}onClick={() => setShow(!show)} dangerouslySetInnerHTML={{__html: sanitizarHTML(resaltarTexto(`${seccionIndex+1}.${subtituloIndex+1} ${subtitulo.titulo}${show? "▿": "▵"}`))}} />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={show ? 'show' : 'hide'}
          nodeRef={nodeRef}
          timeout={200}
          classNames="fade"
        >
          <div style={{marginLeft:"-20px", userSelect: 'none'}} ref={nodeRef}>
            {show &&
              <ol>
                {subtitulo.pasos.map((paso, index) => (
                  <PasoComponent key={index} index={index} paso={paso} searchString={searchString} />
                ))}
              </ol>
            }
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div >
  );
};

export default SubtituloComponent;
