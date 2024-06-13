// Componente visual que despliega el número de llamadas diarias que lleva el agente
// Autor: Rosa Itzel Figueroa Rosas

import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import '../styles/graficas.css';

export default function PromedioDuracionDia(){
    const url = `http://${process.env.REACT_APP_BACK_HOST}:8080/llamada/numLlamadas?idUsuario=${3}`;
    const [numLlamadas, setNumLlamadas] = useState("");
    const [fecha, setFecha] = useState("");

    //Funcion encargada de descargar los datos del numero de llamada 
    const descargar = useCallback(() => {
        console.log("Descargando datos")
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setNumLlamadas(data.numLlamadas); 
            setFecha(data.fecha); 
            console.log("numLlamadas:", data.fecha, "fecha:", data.promedioDuracion); 

        })
        .catch((error) => console.log(error));
        console.log("hubo un problema")
    }, [url]); // Incluir url en la lista de dependencias para que useCallback lo actualice si cambia

    useEffect(() => {
        descargar();
    }, [descargar]); // Incluir descargar en la lista de dependencias para que se ejecute cuando cambie

    return(
        <div className="conta">
            <div className="circulo">
                <p id="graf">{numLlamadas}</p>
                <p id="texto">{numLlamadas <= 1 ? "Llamada" : "Llamadas"}</p>
            </div>
            <p id="fecha">Fecha: {fecha}</p>
        </div>
    );
}
