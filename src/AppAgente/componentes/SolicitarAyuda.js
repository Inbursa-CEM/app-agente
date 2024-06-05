// Componente que manipula el bóton para solicitar ayuda del supervisor
// Autor: Rosa Itzel Figueroa Rosas

import '../styles/solicitarAyuda.css';
import React, { useState } from "react";
import { Button } from '@mui/material';

const SolicitarAyuda = (idAgente) => {
  const [url] = `http://${process.env.REACT_APP_BACK_HOST}:8080/notificacion/mandarSolicitudAyuda`
  const [idSupervisor, setIdSupervisor] = useState(null);

  const solicitarAyuda = () => {
    const supervisorId = 1;
    setIdSupervisor(supervisorId);
    console.log('Ayuda solicitada');

    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idUsuario: idSupervisor,
        contenido: `El agente ${idAgente} solicitó ayuda.`
      })
    };

    fetch(url, request)
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        console.log(request)
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  };

  return (
    <div className='solicitar'>
      <h3>¿Necesitas ayuda de un supervisor?</h3>
      <Button className='botonAyuda' onClick={solicitarAyuda}>Solicitar</Button>
    </div>
  );
};

export default SolicitarAyuda;
