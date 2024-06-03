import React, { useRef, useState } from 'react';
import SubtituloComponent from './SubtituloComponent';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import DOMPurify from 'dompurify';
import '../styles/animations.css';
import '../styles/styles.css';

const SeccionComponent = ({ seccionIndex, seccion, searchString }) => {
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
    <div className='seccion'>
      <h2 style={{ marginLeft:'-20px', userSelect: 'none', fontSize: '1.3rem' }} onClick={() => setShow(!show)} dangerouslySetInnerHTML={{__html: sanitizarHTML(resaltarTexto(`${seccionIndex + 1}. ${seccion.titulo}${show? "⏷": "⏶"}`))}} />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={show ? 'show' : 'hide'}
          nodeRef={nodeRef}
          timeout={200}
          classNames="fade"
        >
          <div style={{userSelect: 'none'}} ref={nodeRef}>
            {show &&
              seccion.subtitulos.map((subtitulo, index) => (
                <SubtituloComponent key={index} seccionIndex={seccionIndex} subtituloIndex={index} subtitulo={subtitulo} searchString={searchString} />
              ))
            }
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default SeccionComponent;
