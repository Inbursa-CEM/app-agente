//Autor: Arturo Montes G.
//Desc: Componente para renderear todo el menu de notificaciones y desplegarlas
import * as React from "react";
import "../styles/notificacion.css";
import Notificacion from "./Notificacion";
import { useState, useCallback, useEffect } from "react";

const MenuNotificaciones = () => {
  const [arrPrueba, setArrPrueba] = useState([]);

  const url = `http://localhost:8080/notificacion/obtenerSolicitudAyuda?idUsuario=2`;

  const formatFechaHora = (fechaHora) => {
    const date = new Date(fechaHora);
    const opcionesFecha = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit' };

    const fecha = date.toLocaleDateString(undefined, opcionesFecha);
    const hora = date.toLocaleTimeString(undefined, opcionesHora);

    return { fecha, hora };
  };

  const descargar = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const notificaciones = data.map((notificacion) => {
          const { fecha, hora } = formatFechaHora(notificacion.fechaHora);
          return {
            nombre: notificacion.idUsuario,
            contenido: notificacion.contenido,
            fechaNotificacion: fecha,
            horaNotificacion: hora,
          };
        });
        setArrPrueba(notificaciones);
      })
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    descargar();
  }, [descargar]);

  return (
    <div className="contenedor-notificaciones">
      Notificaciones
      {arrPrueba.map((notificacion, index) => (
        <Notificacion
          key={index}
          nombre={notificacion.nombre}
          contenido={notificacion.contenido}
          imagenSrc={require('../icons/user-icon.png')}
          fechaNotificacion={notificacion.fechaNotificacion}
          horaNotificacion={notificacion.horaNotificacion}
        />
      ))}
    </div>
  );
};

export default MenuNotificaciones;
