import '../styles/estadisticas.css'
import React, { useState } from 'react'
import { Button } from '@mui/material';
import PromedioDuracionDia from './PromedioDuracionDia';
import NumLlamadas from './NumLlamadas';
import Satisfaccion from './Satisfaccion';

const Estadisticas = () => {

    const [modal, setModal] = useState(false);

    const abrirModal = () =>{
        setModal(!modal)
    };

    if(modal){
        document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')
    }


    return(
        <div className="estadisticas">
            <Button onClick={abrirModal} className="botonEstadisticas" id='btn-modal'>
            <h4>Estadísticas</h4>
            </Button>
            {modal && (
            <div className="modal" id='modal'>
                <div onClick={abrirModal} className='overlay'>
                    <div className='modal-content'>
                        <h2 id='titulo'>Estadísticas</h2>
                        <div className='graficas'>
                            {/* <div className='agente' >
                                <div className='cali'>
                                    <h3>Calificación</h3>
                                    <canvas id='calificacion'></canvas>
                                </div>
                                <div className='problemas'>
                                    <h3>Problemas resueltos satifactoriamente</h3>
                                    <canvas id='problemas'></canvas>
                                </div>
                            </div> */}
                            <div className='duracion'>
                                <h3>Duración promedio de llamadas por día</h3>
                                <PromedioDuracionDia/>
                            </div>  
                            <div className='llamadas'>
                                <h3>Número de llamadas por día</h3>
                                <NumLlamadas/>
                            </div>  
                            <div className='satisfaccion'>
                                <h3>Satisfacción promedio de llamadas por día</h3>
                                <Satisfaccion/>
                            </div>  
                        </div>
                        <Button onClick={abrirModal} className="close-modal">Cerrar</Button>
                    </div>
                </div>
            </div>   )}
            
        </div>
    )
}

export default Estadisticas;
