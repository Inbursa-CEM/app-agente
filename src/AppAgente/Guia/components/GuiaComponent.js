import React, { useRef, useState } from 'react';
import SeccionComponent from './SeccionComponent';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../styles/animations.css';

const GuiaComponent = ({ guia }) => {
  const [show, setShow] = useState(true);

  const nodeRef = useRef(null);

  return (
    <div>
      <h1 style={{userSelect: 'none'}} onClick={() => setShow(!show)}>{guia.titulo}</h1>
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
                <SeccionComponent key={index} seccion={seccion} />
              ))}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default GuiaComponent;
