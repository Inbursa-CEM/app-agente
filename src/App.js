import EstatusLlamada from "./AppAgente/componentes/EstatusLlamada";
import "./Styles/App.css";
import InterfazGuia from "./AppAgente/Guia/components/InterfazGuia";
import InfoCliente from "./AppAgente/componentes/InfoCliente";
// import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <div class="interfaz">
        <div class="contenedor">
          <InfoCliente />
        </div>
        <div class="contenedor2">
          <InterfazGuia/>
        </div>
        <div class="contenedor3">
          <EstatusLlamada />
        </div>
      </div>
    </div>
  );
}

export default App;
