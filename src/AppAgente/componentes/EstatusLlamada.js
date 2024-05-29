import React, { useState, useEffect, useCallback} from 'react';
import '../styles/estatusLlamada.css';
import Semaforo from './Semaforo';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
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

const EstatusLlamada = ({contactId}) => {
    //, time, setTime
    //const [tiempo, setTiempo] = useState(0);
    // const [corriendo, setCorriendo] = useState(false);
    const [sentimiento, setSentimiento] = useState("NEUTRAL");

    //UseEffect que se mantiene al tanto si se obtiene un contactId 
    //inicializar el contador
    useEffect(() => {
        console.log("Contact Event - Contact Id from useEffect:", contactId)

        if (contactId !== null){
            console.log('Contact ID not null, trying to fetch info');
            // const interval = setInterval(()=>{
            //     setTime(prevTime => prevTime + 1);
            //     }, 1000);
            // return() => clearInterval(interval);

        }else{
            console.log('Contact ID null');
            // setTime(0);
        }
    }, [contactId]);

    //Descargar la transcripcion checar su funcionamiento
    const descargar = useCallback(async () => {
        if (!contactId) return; // Verifica que contactId no sea null

        const url = `http://172.27.112.1:8080/llamada/transcripcion/${contactId}`;

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
            }
    
          console.log('El lastSentiment del arreglo:', latestSentiment)
        //   console.log('El sentimiento al final es', sentimiento)
        } catch (error) {
          console.error('Error al descargar los datos:', error);
        }
      }, [contactId, sentimiento]);

    //UseEffect que descarga los json cada 3 segundos
    // useEffect(() => {
    //     // Verificar si contactId es null antes de llamar a descargar
    //     if (contactId !== null) {
    //         const interval = setInterval(descargar, 3000); // Descargar cada 3 segundos
    //         return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
    //     }
    // }, [contactId, descargar]);

    useEffect(() => {
        if (contactId) {
          const interval = setInterval(descargar, 3000);
          return () => clearInterval(interval);
        }
      }, [descargar, contactId]);
      
    
    // const tiempoFormateado = () => {
    //     const minutos = Math.floor(time / 60000);
    //     const segundos = Math.floor((time % 60000) / 1000);
    
    //     const formatMinutos = minutos < 10 ? `0${minutos}` : minutos;
    //     const formatSegundos = segundos < 10 ? `0${segundos}` : segundos;
    
    //     return `${formatMinutos}:${formatSegundos}`;
    // };

    const imagenSentimiento = sentimientoImagenes[sentimiento] || normal;

    return (
        <div className='llamada'>
            <div className='columnaE'>
                <div className='labelEstado'><h3>Estado de llamada</h3></div>
                {/* Colocar el contador que mencionó Gus */}
                <div className='normal' id='tiempo'>
                        <AccessTimeFilledIcon /> <h3>{contactId}</h3>
                        {/* <AccessTimeFilledIcon /> <h3>{tiempoFormateado()}</h3> */}
                    </div>
                
                <div className='estado'>
                    <div className='columna'>
                        {/* {sentimiento !== "NEUTRAL" && (
                            <div className='sentimiento'>
                                <img src={sentimiento} className='sentimiento'/>
                            </div>
                        )} */}
                        <div className='sentimiento'>
                            <img src={imagenSentimiento} alt="sentimiento" className='sentimiento' />
                        </div>
                    </div>
                </div>
                {/* <h4>{contenido}</h4> */}
                <SolicitarAyuda/>
                <Estadistica/>
            </div>
        </div>

    )
}

export default EstatusLlamada;