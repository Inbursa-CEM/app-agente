// Autores: Alan Alcántara y Rosa Figueroa
// Interfaz de amazon connect con sus funciones de inicio y finalización de llamada

import "amazon-connect-streams";
import React, { useContext, useEffect } from 'react';
import { ContextoInfo } from "./ProveedorInfoCliente";

const Connect = ({ setContactId, setTime }) => {
  // Contexto de proveedor de información
  const [ , , , , , setCell, , ] = useContext(ContextoInfo);

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
        console.log("Contact ID:", cid);
        const number = contact.getInitialConnection().getEndpoint().phoneNumber;
        // console.log("Número de telefono: ", number);
        setCell(number);
      });

      //Cuando la llamada termine se deben de restablecer los parametros
      //Es mas importante que se reinicie el tiempo, mas que contact
      contact.onEnded(async function (contact){
        setContactId(null)
        setTime(0)
      });
    });

  }, []);

  return <div id="ccp" style={{ width: "680px", height: "350px" }}></div>;
};

export default Connect;
