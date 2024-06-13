// Componente que la gráfica del porcentaje de problemas resuelto del agente por día
// Autor: Rosa Itzel Figueroa Rosas
import React, { useState, useCallback, useEffect } from "react";
import { PieChart} from "@mui/x-charts/PieChart";

export default function ProblemasResueltosPorDia(){
    const url = `http://${process.env.REACT_APP_BACK_HOST}:8080/llamada/problemasResueltos?idUsuario=3`;
    const [problemasResueltos, setProblemasResueltos] = useState(0);
    const [problemasNoResueltos, setProblemasNoResueltos] = useState(0);
    const [fecha, setFecha] = useState("");

    //Funcion encargada de descargar y presentar los datos una gráfica
    const descargar = useCallback(() => {
        console.log("Descargando datos");
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setProblemasResueltos(data.problemasResueltos); 
            setProblemasNoResueltos(data.problemasNoResueltos);
            setFecha(data.fecha); 
        })
        .catch((error) => console.log(error));
    }, [url]); 

    useEffect(() => {
        descargar();
    }, [descargar]); 

    const totalProblemas = problemasResueltos + problemasNoResueltos;
    const porcentajeResueltos = (problemasResueltos / totalProblemas) * 100;
    const porcentajeNoResueltos = (problemasNoResueltos / totalProblemas) * 100;

    return(
        <div>
            <br />
            <div className="pie">
                <PieChart
                    colors={["#07B11E", "#CD0101"]}

                    series={[
                        {
                            data: [
                                { id: 0, value: problemasNoResueltos, label: `Resueltos (${porcentajeNoResueltos.toFixed(2)}%)` }, 
                                { id: 1, value: problemasResueltos, label: `No Resueltos (${porcentajeResueltos.toFixed(2)}%)` }
                            ],
                        },
                    ]}
                    width={600}
                    height={200}
                />
            </div>
            <p id="fecha">Fecha: {fecha}</p>
            <br />
        </div>
    );
}
