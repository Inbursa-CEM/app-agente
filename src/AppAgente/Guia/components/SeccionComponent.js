// SeccionComponent.js
import React, { useRef, useState } from 'react';
import SubtituloComponent from './SubtituloComponent';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/animations.css';
import '../styles/styles.css'

const SeccionComponent = ({ seccion }) => {
  const [show, setShow] = useState(true);
  const nodeRef = useRef(null);
  return (
    <div className='seccion'>
      <h2 onClick={() => setShow(!show)}>{seccion.titulo}</h2>
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
                <SubtituloComponent key={index} subtitulo={subtitulo} />
              ))
            }
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default SeccionComponent;
