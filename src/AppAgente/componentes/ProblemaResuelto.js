import React, { useState, useCallback, useEffect } from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function ProblemasResueltosPorDia(){
    const [url, setUrl] = useState("http://localhost:8080/llamada/problemasResueltos?idUsuario=2");
    const [problemasResueltos, setProblemasResueltos] = useState(0);
    const [problemasNoResueltos, setProblemasNoResueltos] = useState(0);
    const [fecha, setFecha] = useState("");

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

    const data = [
        { label: "Problemas Resueltos", value: porcentajeResueltos },
        { label: "Problemas No Resueltos", value: porcentajeNoResueltos }
    ];

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
