import "../styles/infoCliente.css";
import Llamadas from "./Llamadas";
import Transacciones from "./Transacciones";
import Datos from "./Datos";
import { useEffect, useState } from "react";

const Contenedor = () => {
  const [cliente, setCliente] = useState([]);
  const [tarjeta, setTarjeta] = useState([]);
  const urlCliente = "http://localhost:8080/cliente/consultar?id=1";
  const urlTarjeta = "http://localhost:8080/tarjeta/consultar?id=1";

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
          saldo: data[0].saldo
        };
        setTarjeta(dataTarjeta);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <Datos
        datosCliente={{
          nombre: cliente.nombre,
          telefono: cliente.telefono,
          cuenta: tarjeta.cuenta,
          tarjeta: tarjeta.tipo,
          saldo: "$" + tarjeta.saldo + ".00",
        }}
      />
      <Transacciones
        listaTransax={[
          ["Pago Cuenta Terceros", "Movimiento Inbursa", "$-2,000.00"],
          ["Spotify", "Movimiento Inbursa", "$-200.00"],
          ["Enviado BBVA", "Transferencia interbancaria", "$-500.00"],
          ["Pago Tarjeta de Crédito", "Movimiento Inbursa", "$-10,500.00"],
          ["Pago Tarjeta de Crédito", "Movimiento Inbursa", "$-10,500.00"],
          ["Spotify", "Movimiento Inbursa", "$-200.00"],
        ]}
        elementoDestacadoIndex={2}
      />
      <Llamadas
        numLlamadas={8}
        listaLlamadas={[
          {
            title: "Aclaraciones",
            description: "Cobro de $5,000.00 desconocido",
            stars: 5,
            date: "20/03/2024",
          },
          {
            title: "Aclaraciones",
            description: "Pago de tarjeta de crédito",
            stars: 2,
            date: "15/01/2024",
          },
          {
            title: "Aclaraciones",
            description: "Pago de tarjeta de crédito",
            stars: 4,
            date: "08/12/2023",
          },
        ]}
      />
    </div>
  );
};

export default Contenedor;
