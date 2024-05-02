// Componente que muestra los datos del cliente
// Autor: Alan Alcántara Ávila

import ListItemText from "@mui/material/ListItemText";
import "../styles/infoCliente.css";

const Datos = ({ datosCliente }) => {
  return (
    <div className="grupo">
      <div className="titulo"> Datos </div>
      <div className="objetoDatos">
        <ListItemText
          id="dato"
          primary="Nombre"
          secondary={datosCliente.nombre}
        />
        <ListItemText
          id="dato"
          primary="Teléfono"
          secondary={datosCliente.telefono}
        />
        <ListItemText
          id="dato"
          primary="Cuenta"
          secondary={datosCliente.cuenta}
        />
        <ListItemText
          id="dato"
          primary="Tarjeta"
          secondary={datosCliente.tarjeta}
        />
        <ListItemText
          id="dato"
          primary="Saldo"
          secondary={datosCliente.saldo}
        />
      </div>
    </div>
  );
};

export default Datos;
