import EstatusLlamada from "./AppAgente/componentes/EstatusLlamada";
import "./Styles/App.css";
import InterfazGuia from "./AppAgente/Guia/components/InterfazGuia";
import InfoCliente from "./AppAgente/componentes/InfoCliente";
import Connect from "./AppAgente/componentes/Connect";
import ProveedorInfoCliente from "./AppAgente/componentes/ProveedorInfoCliente";

function App() {
  return (
    <div className="App">
      <div className="interfaz">
        <div className="contenedor">
          <EstatusLlamada />
        </div>
        <div className="contenedor2">
          <InterfazGuia/>
        </div>
        <ProveedorInfoCliente>
        <div className="contenedor3">
            <InfoCliente />
        </div>
        <div className="contenedor4"> <Connect /> </div>
        </ProveedorInfoCliente>
      </div>
    </div>
  );
}

export default App;
