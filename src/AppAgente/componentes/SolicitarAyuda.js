import '../styles/solicitarAyuda.css'
import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import { Button } from '@mui/material';

const SolicitarAyuda = () => {
  const [url] = useState("http://localhost:8080/notificacion/mandarSolicitudAyuda")
  const [idAgente, setAgente] = useState(null)
  const [idSupervisor, setSupervisor] = useState(null)
  
  const solicitarAyuda = () => {
      console.log('Ayuda solicitada')
      const request = {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          idUsuario: idSupervisor, 
          content: `El agente ${idAgente} solicito de ayuda. `
        })
      };
      fetch(url, request)
        .then(response => response.json())
        .then(data => this.setState({postId: data.id}));
      
  }
    return (
      <div className='solicitar'>
        <h3>¿Necesitas ayuda de un supervisor?</h3>
        <Button className='botonAyuda' onClick={solicitarAyuda}>Solicitar</Button>
      </div>
      )
}
export default SolicitarAyuda;