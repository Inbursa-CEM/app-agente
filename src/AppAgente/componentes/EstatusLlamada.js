import React, { useState } from 'react';
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

    const cambiarSentimiento = () => {
        if (sentimiento === feliz) {
            setSentimiento(normal);
        } else if (sentimiento === normal) {
            setSentimiento(enojado);
        } else {
            setSentimiento(feliz);
        }
    };

    return (
        <div className='llamada'>
            {/* <div className='columnaE'>
                <div className='estatus'>
                    <div className='columnat'>
                        <LocalPhoneIcon className='icon' />
                        <h3 className='tel' id='tel'>+52 5577499543</h3>
                    </div>
                    <div className='normal' id='tiempo'>
                        <AccessTimeFilledIcon /> <h3> 1:57:03</h3>
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
                        <Semaforo />
                    </div>
                </div>
                <Estadistica/>
                <SolicitarAyuda/>
            </div>
        </div>

    )
}

export default EstatusLlamada;
