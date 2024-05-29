import EstatusLlamada from "./AppAgente/componentes/EstatusLlamada";
import "./Styles/App.css";
import InterfazGuia from "./AppAgente/Guia/components/InterfazGuia";
import InfoCliente from "./AppAgente/componentes/InfoCliente";
import Connect from "./AppAgente/componentes/Connect";
import ProveedorInfoCliente from "./AppAgente/componentes/ProveedorInfoCliente";
import React, { useState} from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [contactId, setContactId] = useState(null);

  return (
    <div className="App">
      <div className="interfaz">
        <div className="contenedor">
          <EstatusLlamada 
          contactId={contactId}
          time = {time}
          setTime = {setTime}
          />
        </div>
        <div className="contenedor2">
          <InterfazGuia/>
        </div>
        <div className="contenedor3">
          <ProveedorInfoCliente>
            <InfoCliente />
          </ProveedorInfoCliente>
        </div>
        <div className="contenedor4">
          <Connect
          setContactId = {setContactId} 
          setTime={setTime}
          />
          </div>
      </div>
    </div>
  );
}

export default App;
