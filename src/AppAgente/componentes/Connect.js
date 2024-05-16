import "amazon-connect-streams";
import React, { useEffect } from 'react';

const Connect = () => {
  //Variables to assing the call id and the status of the call

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
        var attributeMap = contact.getAttributes();
        console.log(attributeMap);
      });
    });

  }, []);

  return <div id="ccp" style={{ width: "680px", height: "340px" }}></div>;
};

export default Connect;