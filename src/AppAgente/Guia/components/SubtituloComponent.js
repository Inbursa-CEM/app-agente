// SubtituloComponent.js
import React, { useRef, useState } from 'react';
import PasoComponent from './PasoComponent';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/animations.css';
import '../styles/styles.css'

const SubtituloComponent = ({ subtitulo }) => {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div className='subtitulo'>
      <h3 onClick={() => setShow(!show)}>{subtitulo.titulo}</h3>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={show ? 'show' : 'hide'}
          nodeRef={nodeRef}
          timeout={200}
          classNames="fade"
        >
          <div style={{userSelect: 'none'}} ref={nodeRef}>
            {show &&
              <ol>
                {subtitulo.pasos.map((paso, index) => (
                  <PasoComponent key={index} paso={paso} />
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
