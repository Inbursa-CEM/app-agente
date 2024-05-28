import "../styles/infoCliente.css";
import Llamadas from "./Llamadas";
import Transacciones from "./Transacciones";
import Datos from "./Datos";
import { useContext } from "react";
import { ContextoInfo } from "./ProveedorInfoCliente";

const Contenedor = () => {
  const [cliente, tarjeta, arrTransacciones, arrLlamadas, numLlamadas] =
    useContext(ContextoInfo);

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
      <Llamadas numLlamadas={numLlamadas} listaLlamadas={arrLlamadas} />
    </div>
  );
};

export default Contenedor;
