import "../styles/infoCliente.css";
import Llamadas from "./Llamadas";
import Transacciones from "./Transacciones";
import Datos from "./Datos";
import { useContext } from "react";
import { ContextoInfo } from "./ProveedorInfoCliente";

const Contenedor = () => {
  const [cliente, tarjeta, arrTransacciones] = useContext(ContextoInfo);

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
        listaTransax={arrTransacciones}
        // FALTANTE
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
