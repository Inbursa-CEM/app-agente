import "amazon-connect-streams";
import React, { useContext, useEffect, useState } from 'react';
import { ContextoInfo } from "./ProveedorInfoCliente";

const Connect = ({ setContactId, setTime, idTransaccion, sentimiento, idAgente}) => {
  // Contexto de proveedor de información
  const [ , , , , , setCell, , ] = useContext(ContextoInfo);
  const [url] = useState("http://localhost:8080/llamada/inicioLlamada");
  const [urlFin] = useState("http://localhost:8080/llamada/finLlamada");
  const [contacto, setContacto] = useState("")


  //Funciones para guardar los datos de la llamada en la base de datos 
  const inicializaLlamada = () =>{
    const request = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idUsuario: 2,
        // idUsuario: idAgente,
        idTransaccion: 3, 
        contactId: contacto
        // contactId: contactId
      })
    };

    fetch(url, request)
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      console.log(request)
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  }

  const finalizaLlamada = () =>{
    const request = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // idLlamada: "110",
        sentimiento: sentimiento, 
        contactId: contacto
      })
    };

    fetch(urlFin, request)
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      console.log(request)
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  }

  // Code to embed the Amazon Connect CCP
  useEffect(() => {
    const container = document.getElementById("ccp");
    // Initialize CCP
    // eslint-disable-next-line no-undef
    connect.core.initCCP(container, {
      ccpUrl: "https://inbursa-cem1.my.connect.aws/connect/ccp-v2/", // REQUIRED
      loginPopup: true, // optional, defaults to `true`
      loginPopupAutoClose: true, // optional, defaults to `false`
      loginOptions: {
        // optional, if provided opens login in new window
        autoClose: true, // optional, defaults to `false`
        height: 600, // optional, defaults to 578
        width: 400, // optional, defaults to 433
        top: 0, // optional, defaults to 0
        left: 0, // optional, defaults to 0
      },
      region: "us-west-2", // REQUIRED for `CHAT`, optional otherwise
      softphone: {
        // optional, defaults below apply if not provided
        allowFramedSoftphone: true, // optional, defaults to false
        disableRingtone: false, // optional, defaults to false
      },
      pageOptions: {
        //optional
        enableAudioDeviceSettings: true, //optional, defaults to 'false'
        enablePhoneTypeSettings: true, //optional, defaults to 'true'
      },
      ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
      ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
      ccpLoadTimeout: 10000, //optional, defaults to 5000 (ms)
    });

    
    // Code to be executed once a call starts
    // eslint-disable-next-line no-undef
    connect.contact(function (contact) {
      contact.onConnected(async function (contact) {
        let cid = contact.getContactId();
        console.log(cid);
        setContactId(cid); // Aquí se llama a setContactId con el valor de cid
        setContacto(cid)
        console.log("Contact ID:", cid);
        var attributeMap = contact.getAttributes();
        const number = contact.getInitialConnection().getEndpoint().phoneNumber;
        // console.log("Número de telefono: ", number);
        setCell(number);

      });
      
      //Cuando la llamada termine se deben de restablecer los parametros
      //Hacer que se haga un update de la llamada una vez que se acabe
      contact.onEnded(async function (contact){
        finalizaLlamada(contact.getContactId())
        setContactId(null)
        setTime(0)
      });
    });

  }, []);

  useEffect(() =>{
    if (contacto !== null){
      inicializaLlamada();//Se guardan los datos del inicio de la llamada en la bd
    }
  }, [contacto])

  return <div id="ccp" style={{ width: "680px", height: "350px" }}></div>;
};

export default Connect;
