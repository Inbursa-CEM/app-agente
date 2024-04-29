import '../styles/estatusLlamada.css'
import React from 'react'

const EstatusLlamada = () => {
    return (
      <div className='estatus'>
        <div className='columna'>
          <h3 className='c1'>Duración de llamada</h3>
          <h3 className='c2'>Sentimiento</h3>
          <h3 id='tiempo'>1:57:03</h3>
          <div className='sentimiento'>
            <img src='https://img.icons8.com/ios/452/happy.png' alt='feliz'/>
            {/* <h3 id='sentimiento'>Feliz</h3> */}
          </div>
        </div>
        <h3 id='labelSemaforo'>Semáforo</h3>
        <div className='semaforo'>
          <div className='circuloRojo'>
            <h1> </h1>
          </div>
          <div className='circuloAmarillo'></div>
          <div className='circuloVerde'></div>
        </div>
      </div>
      )
}

export default EstatusLlamada;
