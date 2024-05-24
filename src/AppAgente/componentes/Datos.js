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
          sx={{
            "& .MuiListItemText-primary": {
              fontSize: "0.9rem",
            },
            "& .MuiListItemText-secondary": {
              fontSize: "0.7rem",
            },
          }}
        />
        <ListItemText
          id="dato"
          primary="Teléfono"
          secondary={datosCliente.telefono}
          sx={{
            "& .MuiListItemText-primary": {
              fontSize: "0.9rem",
            },
            "& .MuiListItemText-secondary": {
              fontSize: "0.7rem",
            },
          }}
        />
        <ListItemText
          id="dato"
          primary="Cuenta"
          secondary={datosCliente.cuenta}
          sx={{
            "& .MuiListItemText-primary": {
              fontSize: "0.9rem",
            },
            "& .MuiListItemText-secondary": {
              fontSize: "0.7rem",
            },
          }}
        />
        <ListItemText
          id="dato"
          primary="Tarjeta"
          secondary={datosCliente.tarjeta}
          sx={{
            "& .MuiListItemText-primary": {
              fontSize: "0.9rem",
            },
            "& .MuiListItemText-secondary": {
              fontSize: "0.7rem",
            },
          }}
        />
        <ListItemText
          id="dato"
          primary="Saldo"
          secondary={datosCliente.saldo}
          sx={{
            "& .MuiListItemText-primary": {
              fontSize: "0.9rem",
            },
            "& .MuiListItemText-secondary": {
              fontSize: "0.7rem",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Datos;
