//Autor: Arturo Montes G.
//Desc: Componente para dar formato a las notificaciones
import React from 'react';
import "../styles/notificacion.css";

const Notificacion = ({ nombre, contenido, imagenSrc, fechaNotificacion, horaNotificacion }) => {
  return (
    <div className="notificacion">
      <div className="imagen-container">
        <img src={imagenSrc} alt="Imagen" className="imagen" />
      </div>
      <div className="texto-container">
        <p>
          {/* <span className="nombre">{nombre}</span> */}
          <span className="fechaReunion">{contenido}</span> <span> {fechaNotificacion} {horaNotificacion}</span>.
        </p>
      </div>
    </div>
  );
};

export default Notificacion;

