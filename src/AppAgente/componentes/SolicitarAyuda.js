// Componente que manipula el bóton para solicitar ayuda del supervisor
// Autor: Rosa Itzel Figueroa Rosas

import '../styles/solicitarAyuda.css';
import { Button } from '@mui/material';

const SolicitarAyuda = ({idAgente}) => { //idAgente
  const url = `http://${process.env.REACT_APP_BACK_HOST}:8080/notificacion/mandarSolicitudAyuda`

  //Funcion encargada de hacer un post en la base de datos cada que se presione el boton de solicitar ayuda
  const solicitarAyuda = () => {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idUsuario: 1,
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
