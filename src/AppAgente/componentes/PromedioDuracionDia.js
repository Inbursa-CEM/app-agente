// Componente visual que depliegua el promedio de duración de las llamadas de una agente por día
// Autor: Rosa Itzel Figueroa Rosas
import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import '../styles/graficas.css';

export default function PromedioDuracionDia(){
    const url = `http://${process.env.REACT_APP_BACK_HOST}:8080/llamada/promedioDuracion?idUsuario=${sessionStorage.getItem("userId")}`;
    const [promedioDuracion, setPromedioDuracion] = useState("");
    const [fecha, setFecha] = useState("");
    const [horas, setHoras] = useState("");
    const [minutos, setMinutos] = useState("");
    const [segundos, setSegundos] = useState("");
    const [color, setColor] = useState("");

    const descargar = useCallback(() => {
        console.log("Descargando datos")
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setPromedioDuracion(data.promedioDuracion); // Guardar el valor de promedioDuracion del JSON en el estado
            setFecha(data.fecha); // Guardar el valor de fecha del JSON en el estado
            console.log("promedio:", data.fecha, "fecha:", data.promedioDuracion); // Corregido para que coincida con los nombres de las propiedades del JSON

            const [horas, minutos, segundos] = data.promedioDuracion.split(":");
            setHoras(horas);
            setMinutos(minutos);
            setSegundos(segundos);

            if (parseInt(minutos) === 0) {
                setColor("green"); // Menor de 1 minuto: verde
            } else if (parseInt(minutos) < 5) {
                setColor("orange"); // Mayor de 1 minuto y menor de 5: naranja
            } else {
                setColor("red"); // Mayor de 5 minutos: rojo
            }


        })
        .catch((error) => console.log(error));
    }, [url]); // Incluir url en la lista de dependencias para que useCallback lo actualice si cambia

    useEffect(() => {
        descargar();
    }, [descargar]); // Incluir descargar en la lista de dependencias para que se ejecute cuando cambie

    return(
        <div>
            <br></br>
            {horas !== "0" && <p id="graf" style={{ color: color }} >{horas} horas</p>}
            {minutos !== "0" && <p id="graf" style={{ color: color }}>{minutos} minutos</p>}
            {segundos !== "0" && <p id="graf" style={{ color: color }}>{segundos} segundos</p>}
            <p id = "fecha" >Fecha: {fecha}</p>
            <br></br>
        </div>
    );
}
