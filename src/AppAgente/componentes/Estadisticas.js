import '../styles/estadisticas.css'
import React, { useState } from 'react'
import { Button } from '@mui/material';
import PromedioDuracionDia from './PromedioDuracionDia';
import NumLlamadas from './NumLlamadas';
import ProblemasResueltos from './ProblemaResuelto';

const Estadisticas = ({idAgente}) => {

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
                            <div className='llamadas'>
                                <h3>Número de llamadas por día</h3>
                                <br></br>
                                <NumLlamadas
                                idAgente = {idAgente}
                                />
                            </div>  
                            <div className='satisfaccion'>
                                <h3>Efectividad de resolución de problemas</h3>
                                <ProblemasResueltos
                                idAgente = {idAgente}
                                />
                            </div>  
                            <div className='duracion'>
                                <h3>Duración promedio de llamadas por día</h3>
                                <PromedioDuracionDia
                                idAgente = {idAgente}
                                />
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
