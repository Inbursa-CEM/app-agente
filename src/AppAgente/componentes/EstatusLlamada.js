import React, { useState, useEffect, useCallback} from 'react';
import '../styles/estatusLlamada.css';
import Semaforo from './Semaforo';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Estadistica from "../componentes/Estadisticas";
import SolicitarAyuda from "../componentes/SolicitarAyuda";
import feliz from '../images/feliz.PNG';
import normal from '../images/normal.PNG';
import enojado from '../images/enojado.PNG';

//const [tiempo, setTiempo] = useState(0);
// const [corriendo, setCorriendo] = useState(false);

const EstatusLlamada = ({contactId}) => {
    //, time, setTime

    //Obtener transcripcion
    const [url] = useState(`http://10.48.109.113:8080/llamada/transcripcion/${contactId}`);
    const [sentimiento, setSentimiento] = useState(normal);
    const [lastSentimiento, setLastSentimiento] = useState("NEUTRAL")
    // const [contenido, setContenido] =  useEffect(null);

    //UseEffect que se mantiene al tanto cada que se obtiene un contactId para 
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
        try {
          const response = await fetch(url);
          console.log(url)
          const data  = await response.json();
          console.log('Data recibida del endpoint', data)
          const sentiments = data[0]?.Segments.map(segment => segment.Transcript.Sentiment);
            // Use the last sentiment from the array, or 'NEUTRAL' if no data is available
          console.log("El arreglo de sentimientos es:", sentiments)
          const latestSentiment = sentiments ? sentiments[sentiments.length - 1] : 'NEUTRAL';
          setSentimiento(latestSentiment);
        //   const arrNuevo = data[0].Segments.map((segment) => {
        //     const sentimiento = {
        //       sentiment: segment.Transcript.Sentiment,
        //     };
            // const contenido = {
            //     content: segment.Transcript.Content
            // }
            // return sentimiento;//contenido
        //   });
         
        //   setSentimiento(sentimiento);
        //   setContenido(contenido);
          console.log('El lastSentiment del arreglo:', latestSentiment)
          console.log('El sentimiento al final es', sentimiento)
        } catch (error) {
          console.error('Error al descargar los datos:', error);
        }
      }, [url]);
    
    //Cambia el sentimiento de la llamada acada que se actualizan los datos
    const cambiarSentimiento = useCallback(() => {
        if (sentimiento === "NEUTRAL") {
            setSentimiento(normal);
        } else if (sentimiento === "NEGATIVE") {
            setSentimiento(enojado);
        } else if (sentimiento === "POSITIVE"){
            setSentimiento(feliz);
        }else{
            setSentimiento(normal);
        }
    }, [sentimiento]);  

    //UseEffect que descarga los json cada 3 segundos
    // useEffect(() => {
    //     // Verificar si contactId es null antes de llamar a descargar
    //     if (contactId !== null) {
    //         const interval = setInterval(descargar, 3000); // Descargar cada 3 segundos
    //         return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
    //     }
    // }, [contactId, descargar]);
    useEffect(() => {
        const interval = setInterval(descargar, 3000); // Descargar cada 3 segundos
        return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
    }, [descargar]);

    //UseEffect que ayuda a descargar el sentimiento cada 5 segundos
    useEffect(() => {
        const interval = setInterval(cambiarSentimiento, 5000); // Cambiar sentimiento cada 5 segundos
        return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
    }, [cambiarSentimiento]);
    
    // const tiempoFormateado = () => {
    //     const minutos = Math.floor(time / 60000);
    //     const segundos = Math.floor((time % 60000) / 1000);
    
    //     const formatMinutos = minutos < 10 ? `0${minutos}` : minutos;
    //     const formatSegundos = segundos < 10 ? `0${segundos}` : segundos;
    
    //     return `${formatMinutos}:${formatSegundos}`;
    // };

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
                        {sentimiento !== "NEUTRAL" && (
                            <div className='sentimiento'>
                                <img src={sentimiento} alt="sentimiento" className='sentimiento'/>
                            </div>
                        )}
                        {/* <Semaforo tiempo={tiempo} /> */}
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