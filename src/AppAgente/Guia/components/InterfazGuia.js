import { Guia, Seccion, Subtitulo } from "../classes/Guia";
import SearchAppBar from "./SearchAppBar";
import GuiaComponent from "./GuiaComponent";
import "../styles/styles.css";
import { useState } from "react";

const InterfazGuia = ({ encontrarTexto }) => {
  const guiaInbursa = new Guia("Guía para el Callcenter de Inbursa");

  const guiaVacia = new Guia("No hay coincidencias de busqueda.")
  // Sección para transacciones no reconocidas
  const seccionTransacciones = new Seccion("Transacciones no reconocidas");
  const subtituloReporte = new Subtitulo("Reportar transacciones no reconocidas");
  subtituloReporte.agregarPaso(
    "Solicitar al cliente detalles de la transacción no reconocida."
  );
  subtituloReporte.agregarPaso(
    "Proporcionar al cliente el número de reclamación."
  );
  subtituloReporte.agregarPaso(
    "Revisar el caso y notificar al cliente sobre el resultado."
  );

  seccionTransacciones.agregarSubtitulo(subtituloReporte);
  guiaInbursa.agregarSeccion(seccionTransacciones);

  // Sección para consultas de saldo
  const seccionConsultaSaldo = new Seccion("Consultas de saldo");
  const subtituloConsultaCuenta = new Subtitulo("Consulta de saldo en cuenta");
  subtituloConsultaCuenta.agregarPaso(
    "Solicitar al cliente su número de cuenta."
  );
  subtituloConsultaCuenta.agregarPaso(
    "Brindar al cliente el saldo actual de su cuenta."
  );

  seccionConsultaSaldo.agregarSubtitulo(subtituloConsultaCuenta);
  guiaInbursa.agregarSeccion(seccionConsultaSaldo);

  // Sección para asistencia con tarjetas de crédito
  const seccionTarjetasCredito = new Seccion(
    "Asistencia con tarjetas de crédito"
  );
  const subtituloReporteRobo = new Subtitulo(
    "Reportar robo o extravío de tarjeta de crédito"
  );
  subtituloReporteRobo.agregarPaso(
    "Solicitar al cliente su número de tarjeta de crédito."
  );
  subtituloReporteRobo.agregarPaso(
    "Cancelar la tarjeta reportada como robada o extraviada."
  );
  subtituloReporteRobo.agregarPaso(
    "Asistir al cliente en el proceso de solicitud de una nueva tarjeta."
  );

  const subtituloTarjetaBloqueada = new Subtitulo(
    "Desbloquar tarjeta de crédito"
  );

  subtituloTarjetaBloqueada.agregarPaso(
    "Entrar a la app Inbursa"
  )
  subtituloTarjetaBloqueada.agregarPaso(
    "Dar click a tarjetas"
  )
  subtituloTarjetaBloqueada.agregarPaso(
    "Seleccionar tarjeta"
  )
  subtituloTarjetaBloqueada.agregarPaso(
    "Desbloquear tarjeta e ingresar NIP"
  )

  seccionTarjetasCredito.agregarSubtitulo(subtituloReporteRobo);
  seccionTarjetasCredito.agregarSubtitulo(subtituloTarjetaBloqueada);
  guiaInbursa.agregarSeccion(seccionTarjetasCredito);

  // Sección para asistencia con seguros
  const seccionSeguros = new Seccion("Asistencia con seguros");
  const subtituloReporteSiniestro = new Subtitulo("Reportar un siniestro");
  subtituloReporteSiniestro.agregarPaso(
    "Recabar detalles del siniestro reportado."
  );
  subtituloReporteSiniestro.agregarPaso(
    "Asistir al cliente en el proceso de presentación de reclamación."
  );

  seccionSeguros.agregarSubtitulo(subtituloReporteSiniestro);
  guiaInbursa.agregarSeccion(seccionSeguros);

  // Sección de cierre
  const seccionCierre = new Seccion("Cierre de la llamada");
  const subtituloAgradecimiento = new Subtitulo("Agradecimiento al cliente");
  subtituloAgradecimiento.agregarPaso(
    "Agradecer al cliente por llamar al callcenter de Inbursa."
  );
  subtituloAgradecimiento.agregarPaso(
    "Preguntar si hay algo más en lo que se pueda ayudar."
  );

  seccionCierre.agregarSubtitulo(subtituloAgradecimiento);
  guiaInbursa.agregarSeccion(seccionCierre);

  const seccion3 = new Seccion("Seccion 3");
  const subtitulo3_1 = new Subtitulo("Suuuubtitulo 3.1");
  subtitulo3_1.agregarPaso("Paso 1: kkkkkkkkkkk");
  subtitulo3_1.agregarPaso("Paso 2: kkk");

  const [guiaU, setGuiaU] = useState(guiaInbursa);
  const [textoBuscar, setTextoBuscar] = useState(null)

  const buscarTexto = (textoBusqueda) => {
    console.log(`Texto en interfaz ${textoBusqueda}`);
    setTextoBuscar(textoBusqueda);
    const nuevaGuia = guiaInbursa.encontrarTexto(textoBusqueda);

    if(nuevaGuia === -1) {
      setGuiaU(guiaVacia);
    }else{
      setGuiaU(textoBusqueda === '' ? guiaInbursa: nuevaGuia);
    }

//    seccion3.agregarSubtitulo(subtitulo3_1);
 //   guiaInbursa.agregarSeccion(seccion3);
  };

  return (
    <div>
      <SearchAppBar buscarTexto={buscarTexto} />
      <div className="contenedor-1">
        <GuiaComponent guia={guiaU} searchString={textoBuscar}/>
      </div>
    </div>
  );
};

export default InterfazGuia;
