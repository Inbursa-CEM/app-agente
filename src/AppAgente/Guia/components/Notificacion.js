import React from 'react';
import "../styles/notificacion.css";

const Notificacion = ({ nombre, fechaReunion, imagenSrc, fechaNotificacion }) => {
    return (
        <div className="notificacion">
            <div className="imagen-container">
                <img src={imagenSrc} alt="Imagen" className="imagen" />
            </div>
            <div className="texto-container">
                <p>
                    <span className="nombre">{nombre}</span> quiere tener una reunión contigo el <span className="fechaReunion">{fechaReunion}</span>.
                </p>
            </div>
            <div className="fecha-container">
                <p className="fechaNotificacion">{fechaNotificacion}</p>
            </div>
        </div>
    );
};

export default Notificacion;
