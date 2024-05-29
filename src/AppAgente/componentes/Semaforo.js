// import React, { useState } from 'react';
import '../styles/semaforo.css';

const Semaforo = ({tiempo}) => {
    
    const obtenerClaseSemaforo = () => {
        if (tiempo < 46000) {
            return 'circuloVerdeON'; // Iniciar en verde
        } else if (tiempo >= 46000 && tiempo < 60000) {
            return 'circuloAmarilloON';
        } else {
            return 'circuloRojoON';
        }
    };    

    return (
        <div>
            <div className='semaforo'>
                <div className={`circuloRojo ${obtenerClaseSemaforo() === 'circuloRojoON' ? 'circuloRojoON' : ''}`}></div>
                <div className={`circuloAmarillo ${obtenerClaseSemaforo() === 'circuloAmarilloON' ? 'circuloAmarilloON' : ''}`}></div>
                <div className={`circuloVerde ${obtenerClaseSemaforo() === 'circuloVerdeON' ? 'circuloVerdeON' : ''}`}></div>
            </div>
        </div>
    );
}

export default Semaforo;

 