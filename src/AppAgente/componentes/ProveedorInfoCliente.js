import { createContext, useState, useEffect } from "react";

export const ContextoInfo = createContext(); // Espacio global

const ProveedorInfoCliente = ({ children }) => {
  const [cliente, setCliente] = useState([]);
  const [tarjeta, setTarjeta] = useState([]);
  const [arrTransacciones, setTransacciones] = useState([]);
  const urlCliente = "http://localhost:8080/cliente/consultar?id=1";
  const urlTarjeta = "http://localhost:8080/tarjeta/consultar?id=1";
  const urlTransacciones =
    "http://localhost:8080/transaccion/consultar?numCuenta=123456";

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
            "$" + transax.monto + ".00"
          ];
          return transaccion;
        });
        setTransacciones(arrNuevo);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ContextoInfo.Provider value={[cliente, tarjeta, arrTransacciones]}>
      {children}
    </ContextoInfo.Provider>
  );
};

export default ProveedorInfoCliente;
