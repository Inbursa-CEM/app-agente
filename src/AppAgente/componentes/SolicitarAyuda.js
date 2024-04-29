import '../styles/solicitarAyuda.css'
import React from 'react'
import { Button } from '@mui/material';

const SolicitarAyuda = () => {
    return (
      <div className='solicitar'>
        <h3>¿Necesitas ayuda de un supervisor?</h3>
        <Button className='botonAyuda'>Solicitar</Button>
      </div>
      )
}
export default SolicitarAyuda;