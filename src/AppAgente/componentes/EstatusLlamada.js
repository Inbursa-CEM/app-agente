import React, { useState, useEffect} from 'react';
import '../styles/estatusLlamada.css';
import Semaforo from './Semaforo';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import PauseSharpIcon from '@mui/icons-material/PauseSharp';
// import VolumeOffSharpIcon from '@mui/icons-material/VolumeOffSharp';
// import CallEndSharpIcon from '@mui/icons-material/CallEndSharp';
// import { Button } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Estadistica from "../componentes/Estadisticas";
import SolicitarAyuda from "../componentes/SolicitarAyuda";


import feliz from '../images/feliz.PNG';
import normal from '../images/normal.PNG';
import enojado from '../images/enojado.PNG';

const EstatusLlamada = () => {
    const [sentimiento, setSentimiento] = useState(normal);

    const [tiempo, setTiempo] = useState(0);
    const [corriendo, setCorriendo] = useState(false);

    const cambiarSentimiento = () => {
        if (sentimiento === feliz) {
            setSentimiento(normal);
        } else if (sentimiento === normal) {
            setSentimiento(enojado);
        } else {
            setSentimiento(feliz);
        }
    };

    const toggleContador = () => {
        setCorriendo(!corriendo);
        // setTiempo(0); // Reiniciar el tiempo cuando se inicia el contador
    };
    
    useEffect(() => {
        let intervalId;
    
        if (corriendo) {
            intervalId = setInterval(() => {
                setTiempo(tiempo => tiempo + 10); 
            }, 10); 
        } else {
            clearInterval(intervalId);
        }
    
        return () => clearInterval(intervalId);
    }, [corriendo]);
    
    const tiempoFormateado = () => {
        const minutos = Math.floor(tiempo / 60000);
        const segundos = Math.floor((tiempo % 60000) / 1000);
    
        const formatMinutos = minutos < 10 ? `0${minutos}` : minutos;
        const formatSegundos = segundos < 10 ? `0${segundos}` : segundos;
    
        return `${formatMinutos}:${formatSegundos}`;
    };

    const obtenerClaseTiempo = () => {
        if (tiempo < 46000) {
            return 'bueno';
        } else if (tiempo >= 46000 && tiempo < 60000) {
            return 'normal';
        } else {
            return 'malo';
        }
    };

    //Solicitar el numero de telefono
    // const descargar = useCallback(
    //     () => {
    //       console.log("Descargando datos");
    //       fetch('/api')
    //       .then((response) => response.json())
    //       .then((data) => {
    //       //Manejo de datos
    //       })
    //       .catch((error) => console.log(error));
    //     },);

    //Solicitar el sentimiento de connect

    return (
        <div className='llamada'>
            {/* <div className='columnaE'>
                <div className='estatus'>
                    <div className='columnat'>
                        <LocalPhoneIcon className='icon' />
                        <h3 className='tel' id='tel'>+52 5577499543</h3>
                    </div>
                    <div className={`${obtenerClaseTiempo()}`} id='tiempo' onClick={toggleContador}>
                        <AccessTimeFilledIcon /> <h3>{tiempoFormateado(tiempo)}</h3>
                    </div>
                </div>
                <div className='control'>
                    <div className='columna'>
                        <Button className='espera'> <PauseSharpIcon className='callIcon' /> Espera</Button>
                        <Button className='silenciar'><VolumeOffSharpIcon className='callIcon' /> Silenciar</Button>
                    </div>
                    <br></br>
                    <Button className='terminar'><CallEndSharpIcon className='callIcon' />Terminar llamada</Button>
                </div>
            </div> */}
            
            <div className='columnaE'>
                <div className='labelEstado'><h3>Estado de llamada</h3></div>
                <div className='normal' id='tiempo'>
                        <AccessTimeFilledIcon /> <h3> 1:57:03</h3>
                    </div>
                <div className='estado'>
                    <div className='columna'>
                        <div className='sentimiento'>
                            <img src={sentimiento} alt="sentimiento" className='sentimiento' onClick={cambiarSentimiento} />
                        </div>
                        <Semaforo tiempo={tiempo} />                    </div>
                </div>
                <SolicitarAyuda/>
                <Estadistica/>
            </div>
        </div>

    )
}

export default EstatusLlamada;
