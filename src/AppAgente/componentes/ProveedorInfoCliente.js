import { createContext, useState, useEffect } from "react";

export const ContextoInfo = createContext(); // Espacio global

const ProveedorInfoCliente = ({ children }) => {
  const [cliente, setCliente] = useState([]);
  const [tarjeta, setTarjeta] = useState([]);
  const [arrTransacciones, setTransacciones] = useState([]);
  const [arrLlamadas, setLlamadas] = useState([]);
  const [numLlamadas, setNumLlamadas] = useState([]);
  // const urlCliente = "http://localhost:8080/cliente/consultar?id=1";
  const urlCliente = "http://localhost:8080/cliente/consultar?telefono=52205512345678"
  // const urlTarjeta = "http://localhost:8080/tarjeta/consultar?id=1";
  const urlTarjeta = "http://localhost:8080/tarjeta/consultar/1";
  const urlTransacciones =
    "http://localhost:8080/transaccion/consultar?numCuenta=123456";
  const urlLlamadas = "http://localhost:8080/llamada/consultar";
  const urlNumLlamadas = "http://localhost:8080/llamada/numLlamadas?idUsuario=1";

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
          cuenta: data.numCuenta,
          tipo: data.tipo,
          saldo: data.saldo,
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
