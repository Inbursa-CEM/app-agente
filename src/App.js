import EstatusLlamada from "./AppAgente/componentes/EstatusLlamada";
import "./Styles/App.css";
import { Button } from '@mui/material';
import ControlLlamada from "./AppAgente/componentes/ControlLlamada";
import SolicitarAyuda from "./AppAgente/componentes/SolicitarAyuda";
import InfoCliente from "./AppAgente/componentes/InfoCliente";
// import Dashboard from "./App/Dashboard/dashboard";
// import Monitoreo from "./App/TablaMonitoreo/monitoreo";
// import Cursos from "./App/Cursos/cursos";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="interfaz">
        <div class="contenedor">
          <InfoCliente />
        </div>
        <div class="contenedor2">
          <EstatusLlamada />
          <Button className="botonEstadisticas">
            <h4>Estadísticas</h4>
          </Button>
          <ControlLlamada/>
          <SolicitarAyuda/>
        </div>
        <div class="contenedor3">
          <h4>Adios</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
