import EstatusLlamada from "./AppAgente/componentes/EstatusLlamada";
import "./Styles/App.css";
import InterfazGuia from "./AppAgente/Guia/components/InterfazGuia";
import InfoCliente from "./AppAgente/componentes/InfoCliente";
import Connect from "./AppAgente/componentes/Connect";
import PromedioDuracionDia from "./AppAgente/componentes/PromedioDuracionDia";

function App() {

  return (
    <div className="App">
      <div className="interfaz">
        <div className="contenedor">
          <EstatusLlamada />
          {/* <PromedioDuracionDia/> */}
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
