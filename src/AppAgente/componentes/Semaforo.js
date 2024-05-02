import React, { useState } from 'react';
import '../styles/semaforo.css';

const Semaforo = () => {
    const [semaforoState, setSemaforoState] = useState('circuloVerdeON');

    const cambiarColor = () => {
        if (semaforoState === 'circuloRojoON') {
            setSemaforoState('circuloAmarilloON');
        } else if (semaforoState === 'circuloAmarilloON') {
            setSemaforoState('circuloVerdeON');
        } else {
            setSemaforoState('circuloRojoON');
        }
    };

    return(
        <div>
            <div className='semaforo' onClick={cambiarColor}>
                <div className={`circuloRojo ${semaforoState === 'circuloRojoON' ? 'circuloRojoON' : ''}`}></div>
                <div className={`circuloAmarillo ${semaforoState === 'circuloAmarilloON' ? 'circuloAmarilloON' : ''}`}></div>
                <div className={`circuloVerde ${semaforoState === 'circuloVerdeON' ? 'circuloVerdeON' : ''}`}></div>
            </div>
        </div>
    )
}

export default Semaforo;
 