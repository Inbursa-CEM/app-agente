import EstatusLlamada from "./AppAgente/componentes/EstatusLlamada";
import "./Styles/App.css";
import { Button } from '@mui/material';
import ControlLlamada from "./AppAgente/componentes/ControlLlamada";
import SolicitarAyuda from "./AppAgente/componentes/SolicitarAyuda";
// import Dashboard from "./App/Dashboard/dashboard";
// import Monitoreo from "./App/TablaMonitoreo/monitoreo";
// import Cursos from "./App/Cursos/cursos";
// import { Route, Routes } from "react-router-dom";
import GuiaComponent from './AppAgente/Guia/components/GuiaComponent';
import { Guia, Seccion, Subtitulo } from './AppAgente/Guia/classes/Guia';
function App() {
  // Create an example Guia structure
  const guia = new Guia("Tiline");

  const seccion1 = new Seccion("Sección 1");

  const subtitulo1_1 = new Subtitulo("Subtítulo 1.1");
  subtitulo1_1.agregarPaso("Paso 1: Realizar esta tarea");
  subtitulo1_1.agregarPaso("Paso 2: Realizar esta otra tarea");

  const subtitulo1_2 = new Subtitulo("Subtítulo 1.2");
  subtitulo1_2.agregarPaso("Paso 1: Realizar esta tarea");
  subtitulo1_2.agregarPaso("Paso 2: Realizar esta otra tarea");

  seccion1.agregarSubtitulo(subtitulo1_1);
  seccion1.agregarSubtitulo(subtitulo1_2);

  const seccion2 = new Seccion("Sección 2");

  const subtitulo2_1 = new Subtitulo("Subtítulo 2.1");
  subtitulo2_1.agregarPaso("Paso 1: Realizar esta tarea");
  subtitulo2_1.agregarPaso("Paso 2: Realizar esta otra tarea");

  const subtitulo2_2 = new Subtitulo("Subtítulo 2.2");
  subtitulo2_2.agregarPaso("Paso 1: Realizar esta tarea");
  subtitulo2_2.agregarPaso("Paso 2: Realizar esta otra tarea");

  seccion2.agregarSubtitulo(subtitulo2_1);
  seccion2.agregarSubtitulo(subtitulo2_2);

  guia.agregarSeccion(seccion1);
  guia.agregarSeccion(seccion2);


  return (
    <div className="App">
      <div class="interfaz">
        <div class="contenedor">
        </div>
        <div class="contenedor2">
          <EstatusLlamada />
          <Button className="botonEstadisticas">
            <h4>Estadísticas</h4>
          </Button>
          <ControlLlamada />
          <SolicitarAyuda />
        </div>
        <div class="contenedor3">
          <GuiaComponent guia={guia} />

        </div>
      </div>
    </div>
  );
}

export default App;
