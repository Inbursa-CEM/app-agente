import EstatusLlamada from "./AppAgente/componentes/EstatusLlamada";
import "./Styles/App.css";
import Estadistica from "./AppAgente/componentes/Estadisticas";
// import ControlLlamada from "./AppAgente/componentes/ControlLlamada";
import SolicitarAyuda from "./AppAgente/componentes/SolicitarAyuda";
// import Dashboard from "./App/Dashboard/dashboard";
// import Monitoreo from "./App/TablaMonitoreo/monitoreo";
// import Cursos from "./App/Cursos/cursos";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="interfaz">
        <div class="contenedor">
        </div>
        <div class="contenedor2">
          {/* <ControlLlamada/> */}
          <EstatusLlamada />
          <Estadistica/>
          <SolicitarAyuda/>
        </div>
        <div class="contenedor3"></div>
      </div>
    </div>
  );
}

export default App;
