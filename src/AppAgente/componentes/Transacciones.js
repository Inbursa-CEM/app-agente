// Componente que muestra las últimas transacciones realizadas por el cliente
// Autor: Alan Alcántara Ávila

import ListItemText from "@mui/material/ListItemText";
import "../styles/infoCliente.css";

const Transacciones = ({ listaTransax, elementoDestacadoIndex }) => {
  return (
    <div className="grupo">
      <div className="titulo"> Transacciones </div>
      <div className="objetoTransacciones">
        <scroll-container>
          {listaTransax.map((transax, index) => (
            <scroll-page key={index}>
              <div
                className={`transaccion ${
                  elementoDestacadoIndex === index ? "destacado" : ""
                }`}
              >
                <ListItemText
                  id="margen"
                  primary={transax[0]}
                  secondary={transax[1]}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "0.9rem",
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: "0.8rem",
                    },
                  }}
                />
                <div id="margen"> {transax[2]} </div>
              </div>
            </scroll-page>
          ))}
        </scroll-container>
      </div>
    </div>
  );
};

export default Transacciones;
