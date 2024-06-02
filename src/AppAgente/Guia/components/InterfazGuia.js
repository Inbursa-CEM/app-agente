
import { Guia, Seccion, Subtitulo } from '../classes/Guia';
import SearchAppBar from './SearchAppBar';
import GuiaComponent from './GuiaComponent'
import "../styles/styles.css"
import { useState } from 'react';

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

  const seccion3 = new Seccion("Seccion 3")
  const subtitulo3_1 = new Subtitulo("Suuuubtitulo 3.1");
  subtitulo3_1.agregarPaso("Paso 1: kkkkkkkkkkk");
  subtitulo3_1.agregarPaso("Paso 2: kkk");

  const [guiaU, setGuiaU] = useState(guia);

  const buscarTexto = (textoBusqueda) => {
    console.log(`Texto en interfaz ${textoBusqueda}`);
    seccion3.agregarSubtitulo(subtitulo3_1);
    guia.agregarSeccion(seccion3);
    setGuiaU(guia);
    //hacer fors pa encontrar el texto busqueda
    // crear  una guia nueva con usestate para guia

  }


  return (
    <div>
      <SearchAppBar buscarTexto={buscarTexto} />
      <div className='contenedor-1'>
        <GuiaComponent guia={guiaU} />
      </div>
    </div>

  );
}

export default InterfazGuia;
