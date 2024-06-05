// Autor: Alan Alcántara
// Proveedor de la información del cliente para mostrarla en la interfaz
// Llamadas al API para descargar los datos del cliente

import { createContext, useState, useEffect } from "react";

export const ContextoInfo = createContext(); // Espacio global

const ProveedorInfoCliente = ({ children, setIdTransaccion }) => {
  const [cell, setCell] = useState("");
  const [cliente, setCliente] = useState([]);
  const [tarjeta, setTarjeta] = useState([]);
  const [arrTransacciones, setTransacciones] = useState([]);
  const [grupoTransax, setGrupoTransax] = useState([]);
  const [transax, setTransax] = useState([]);
  const [arrLlamadas, setArrLlamadas] = useState([]);
  const [numLlamadas, setNumLlamadas] = useState(0);
  const urlCliente = `http://${process.env.REACT_APP_BACK_HOST}:8080/cliente/consultar/${cell}`;
  const urlTarjeta = `http://${process.env.REACT_APP_BACK_HOST}:8080/tarjeta/consultar/${cell}`;
  const urlTransacciones = `http://${process.env.REACT_APP_BACK_HOST}:8080/transaccion/consultar/${cell}`;
  const urlOneTransax = `http://${process.env.REACT_APP_BACK_HOST}:8080/transaccion/transax/${cell}`;
  const urlLlamadas = `http://${process.env.REACT_APP_BACK_HOST}:8080/llamada/consultar/${cell}`;
  const urlNumLlamadas = `http://${process.env.REACT_APP_BACK_HOST}:8080/llamada/numLlamadasCliente/${cell}`;
  useEffect(() => {
    console.log("Descargando datos");
    fetch(urlCliente)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos obtenidos del cliente:", data);
        const dataCliente = {
          nombre: data[0].nombre,
          telefono: data[0].telefono,
        };
        setCliente(dataCliente);
      })
      .catch((error) => console.log(error));

    fetch(urlTarjeta)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos obtenidos de la tarjeta:", data);
        const dataTarjeta = {
          cuenta: data[0].numCuenta,
          tipo: data[0].tipo,
          saldo: data[0].saldo,
        };
        setTarjeta(dataTarjeta);
      })
      .catch((error) => console.log(error));

    fetch(urlTransacciones)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos obtenidos de las transacciones:", data);
        const arrNuevo = data.map((transax) => {
          const transaccion = [
            transax.nombre,
            transax.detalle,
            "$" + transax.monto + ".00",
          ];
          return transaccion;
        });
        setTransacciones(arrNuevo);
        setGrupoTransax(data);
      })
      .catch((error) => console.log(error));

    fetch(urlOneTransax)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Transacción requerida:", data);
        setTransax(data);
        setIdTransaccion(data);
      })
      .catch((error) => console.log(error));

    fetch(urlLlamadas)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos obtenidos de las llamadas:", data);
        const arrNuevo = data.map((llamada) => {
          const call = {
            tema: llamada.tema,
            motivo: llamada.motivo,
            fecha:
              llamada.fechaInicio.substring(8, 10) +
              "/" +
              llamada.fechaInicio.substring(5, 7) +
              "/" +
              llamada.fechaInicio.substring(0, 4),
            stars: llamada.nivelSatisfaccion,
          };
          return call;
        });
        setLlamadas(arrNuevo);
      })
      .catch((error) => console.log(error));

    fetch(urlNumLlamadas)
      .then((response) => response.json())
      .then((data) => {
        console.log("Número de llamadas en el mes:", data);
        setNumLlamadas(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ContextoInfo.Provider
      value={[cliente, tarjeta, arrTransacciones, arrLlamadas, numLlamadas]}
    >
      {children}
    </ContextoInfo.Provider>
  );
};

export default ProveedorInfoCliente;
