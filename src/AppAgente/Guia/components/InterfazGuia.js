
import { Guia, Seccion, Subtitulo } from '../classes/Guia';
import SearchAppBar from './SearchAppBar';
import GuiaComponent from './GuiaComponent'
import "../styles/styles.css"

const InterfazGuia = ({encontrarTexto}) => {
  const guia = new Guia("Guia callcenter Inbursa");

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
    <div>
      <SearchAppBar />
      <div className='contenedor-1'>
        <GuiaComponent guia={guia} />
      </div>
    </div>

  );
}

export default InterfazGuia;
