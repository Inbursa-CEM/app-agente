// Autor: Alan Alcántara
// Contiene los componentes de Datos, Transacciones y Llamadas

import "../styles/infoCliente.css";
import Llamadas from "./Llamadas";
import Transacciones from "./Transacciones";
import Datos from "./Datos";
import { useContext } from "react";
import { ContextoInfo } from "./ProveedorInfoCliente";

const Contenedor = () => {
  const [cliente, tarjeta, arrTransacciones, arrLlamadas, numLlamadas, , grupoTransax, transax] =
    useContext(ContextoInfo);
  let indice = 0;

  // Busca el índice de la transacción actual
  for (let i = 0; i < grupoTransax.length; i++) {
    if (grupoTransax[i].idTransaccion === transax.idTransaccion) {
      indice = i;
    }
  }

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
        elementoDestacadoIndex={indice}
      />
      <Llamadas numLlamadas={numLlamadas} listaLlamadas={arrLlamadas} />
    </div>
  );
};

export default Contenedor;
