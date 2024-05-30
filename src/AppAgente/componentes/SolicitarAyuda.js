import '../styles/solicitarAyuda.css'
import React from 'react'
import { Button } from '@mui/material';

const SolicitarAyuda = () => {
  
  const solicitarAyuda = () => {
      console.log('Ayuda solicitada')
  }
    return (
      <div className='solicitar'>
        <h3>¿Necesitas ayuda de un supervisor?</h3>
        <Button className='botonAyuda' onClick={solicitarAyuda}>Solicitar</Button>
      </div>
      )
}
export default SolicitarAyuda;