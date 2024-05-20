import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import '../styles/graficas.css';

export default function PromedioDuracionDia(){
    const [url, setUrl] = useState("http://192.168.1.247:8080/llamada/numLlamadas?idUsuario=2");
    const [numLlamadas, setNumLlamadas] = useState("");
    const [fecha, setFecha] = useState("");


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
