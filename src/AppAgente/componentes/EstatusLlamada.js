// Componente que controla el estado de la llamada como por ejemplo el sentimiento, duracion para (semáforo)
// Autor: Rosa Itzel Figueroa Rosas

import React, { useState, useEffect, useCallback } from 'react';
import '../styles/estatusLlamada.css';
import Semaforo from './Semaforo';
import Estadistica from "../componentes/Estadisticas";
import SolicitarAyuda from "../componentes/SolicitarAyuda";
import feliz from '../images/feliz.PNG';
import normal from '../images/normal.PNG';
import enojado from '../images/enojado.PNG';

const sentimientoImagenes = {
  NEUTRAL: normal,
  POSITIVE: feliz,
  NEGATIVE: enojado,
};

//Iniciar llamada para postear la base de datos 
//contactID 
const EstatusLlamada = ({ contactId, time, setTime, idAgente, setSentimientoFinal}) => {
  const [sentimiento, setSentimiento] = useState("NEUTRAL");

  // UseEffect que inicializa el contador al obtener un contactId
  useEffect(() => {
    if (contactId !== null) {
      console.log('Contact ID not null, starting timer');
      const interval = setInterval(() => {
        setTime(prevTime => prevTime + 1000); // Incrementa el tiempo cada segundo
      }, 1000);
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente o cambiar contactId
    } else {
      console.log('Contact ID null, resetting timer');
      setTime(0);
    }
  }, [contactId, setTime]);

  // Descargar la transcripción
  const descargar = useCallback(async () => {
    if (!contactId) return; // Verifica que contactId no sea null

    const url = `http://${process.env.REACT_APP_BACK_HOST}:8080/llamada/transcripcion/${contactId}`;

    try {
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log('Data recibida del endpoint', data);
      const sentiments = data[0]?.Segments.map(segment => segment.Transcript.Sentiment);
      console.log("El arreglo de sentimientos es:", sentiments);
      const latestSentiment = sentiments ? sentiments[sentiments.length - 1] : 'NEUTRAL';
      if (latestSentiment !== sentimiento) {
        setSentimiento(latestSentiment);
        setSentimientoFinal(latestSentiment);
      }

      console.log('El lastSentiment del arreglo:', latestSentiment);
    } catch (error) {
      console.error('Error al descargar los datos:', error);
    }
  }, [contactId, sentimiento]);

  // UseEffect que descarga los datos cada 3 segundos si contactId está disponible
  useEffect(() => {
    if (contactId) {
      const interval = setInterval(descargar, 3000);
      return () => clearInterval(interval);
    }
  }, [descargar, contactId]);

  // Función para formatear el tiempo
  // const tiempoFormateado = () => {
  //   const minutos = Math.floor(time / 60000);
  //   const segundos = Math.floor((time % 60000) / 1000);

  //   const formatMinutos = minutos < 10 ? `0${minutos}` : minutos;
  //   const formatSegundos = segundos < 10 ? `0${segundos}` : segundos;

  //   return `${formatMinutos}:${formatSegundos}`;
  // };

  const imagenSentimiento = sentimientoImagenes[sentimiento] || normal;

  return (
    <div className='llamada'>
      <div className='columnaE'>
        <div className='labelEstado'><h3>Estado de llamada</h3></div>
        {/* <div className='normal' id='tiempo'>
          <AccessTimeFilledIcon /> <h3>{tiempoFormateado()}</h3>
        </div> */}
        <div className='estado'>
          <div className='columna'>
            <div className='sentimiento'>
              <img src={imagenSentimiento} alt="sentimiento" className='sentimiento' />
            </div>
            <div>
              <Semaforo
                tiempo={time}
                />
            </div>
          </div>
        </div>
        <h3>{contactId}</h3>                
        <SolicitarAyuda />
        <Estadistica 
        idAgente = {idAgente}
        />
      </div>
    </div>
  );
};

export default EstatusLlamada;