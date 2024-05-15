import "../styles/infoCliente.css";
import Llamadas from "./Llamadas";
import Transacciones from "./Transacciones";
import Datos from "./Datos";

const Contenedor = () => {
  return (
    <div className="container">
      <Datos
        datosCliente={{
          nombre: "Guillermo Morelos Ramírez",
          telefono: "+52 1 55 1234 5678",
          cuenta: "1234567890",
          tarjeta: "Platino Express",
          saldo: "$20,493.00",
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
          { title: "Aclaraciones", description: "Cobro de $5,000.00 desconocido", stars: 5, date: "20/03/2024" },
          { title: "Aclaraciones", description: "Pago de tarjeta de crédito", stars: 2, date: "15/01/2024" },
          { title: "Aclaraciones", description: "Pago de tarjeta de crédito", stars: 4, date: "08/12/2023" }
        ]}
      />
    </div>
  );
};

export default Contenedor;
