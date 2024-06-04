//Autor: Arturo Montes G.
//Desc: Componente para renderear todo el menu de notificaciones y desplegarlas
import * as React from "react";
import "../styles/notificacion.css";
import Notificacion from "./Notificacion";
const arrPrueba = [
  {nombre: "Ares Ortiz", fechaReunion:"06-03-24", fechaNotificacion:"Hace 1 minuto"},
  {nombre: "Alan Alcántara", fechaReunion:"08-20-24", fechaNotificacion:"Hace 10 minutos"},
  {nombre: "Ares Ortiz", fechaReunion:"08-20-24" ,fechaNotificacion:"Hace 2 días"},
  {nombre: "Rosa Figueroa", fechaReunion:"08-12-24", fechaNotificacion:"Hace 5 días"},
  {nombre: "Jhon Cena", fechaReunion:"08-02-24" ,fechaNotificacion:"Hace 7 días"},
  {nombre: "Ares Ortiz", fechaReunion:"08-10-24", fechaNotificacion:"Hace 15 días"},
  {nombre: "Ares Ortiz", fechaReunion:"08-10-24", fechaNotificacion:"Hace 15 días"},
  {nombre: "Ares Ortiz", fechaReunion:"08-10-24", fechaNotificacion:"Hace 15 días"},
  {nombre: "Ares Ortiz", fechaReunion:"08-10-24", fechaNotificacion:"Hace 15 días"},
]
export default function MenuNotificaciones() {
  return (
    <div className="contenedor-notificaciones">
      Notificaciones

      {
        arrPrueba.map((notificacion, index) => (
          <Notificacion 
            key={index}
            nombre={notificacion.nombre} 
            fechaReunion={notificacion.fechaReunion} 
            imagenSrc={require('../icons/user-icon.png')} 
            fechaNotificacion={notificacion.fechaNotificacion}
          />
        ))
      }
    </div>
  );
}

