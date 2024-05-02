import EstatusLlamada from "./AppAgente/componentes/EstatusLlamada";
import "./Styles/App.css";
import Estadistica from "./AppAgente/componentes/Estadisticas";
// import ControlLlamada from "./AppAgente/componentes/ControlLlamada";
import SolicitarAyuda from "./AppAgente/componentes/SolicitarAyuda";
import InterfazGuia from "./AppAgente/Guia/components/InterfazGuia";
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
          {/* <ControlLlamada/> */}
          <EstatusLlamada />
          <Estadistica/>
          <SolicitarAyuda/>
        </div>
        <div class="contenedor3"></div>
          <Button className="botonEstadisticas">
            <h4>Estadísticas</h4>
          </Button>
          <ControlLlamada />
          <SolicitarAyuda />
        </div>
        <div class="contenedor3">
          <InterfazGuia/>
        </div>
      </div>
  );
}

export default App;
