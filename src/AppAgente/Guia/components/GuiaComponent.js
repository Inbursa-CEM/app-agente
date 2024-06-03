import React, { useRef, useState } from 'react';
import SeccionComponent from './SeccionComponent';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/animations.css';
import DOMPurify from 'dompurify';

const GuiaComponent = ({ guia, searchString }) => {
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
    <div>
      <h1 style={{  marginTop: "-30px", marginLeft:'-20px', userSelect: 'none', fontSize: '1.7rem' }} onClick={() => setShow(!show)} dangerouslySetInnerHTML={{__html: sanitizarHTML(resaltarTexto(guia.titulo))}} />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={show ? 'show' : 'hide'}
          nodeRef={nodeRef}
          timeout={200}
          classNames="fade"
        >
          <div style={{userSelect: 'none'}} ref={nodeRef}>
            {show &&
              guia.secciones.map((seccion, index) => (
                <SeccionComponent key={index} seccionIndex={index} seccion={seccion} searchString={searchString}/>
              ))}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default GuiaComponent;
