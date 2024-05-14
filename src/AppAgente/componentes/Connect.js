import React, { useEffect } from 'react';

const Connect = () => {
  useEffect(() => {
    const containerDiv = document.getElementById("container-div");
    const instanceURL = "https://inbursa-cem1.my.connect.aws/connect/ccp-v2/";

    const init = () => {
      window.connect.core.initCCP(containerDiv, {
        ccpUrl: instanceURL,
        loginPopup: true,
        loginPopupAutoClose: true,
        loginOptions: {
          autoClose: true,
          height: 600,
          width: 400,
          top: 0,
          left: 0
        },
        region: "us-east-1",
        softphone: {
          allowFramedSoftphone: true,
          disableRingtone: false,
          ringtoneUrl: "./ringtone.mp3"
        },
        pageOptions: {
          enableAudioDeviceSettings: false,
          enablePhoneTypeSettings: true
        },
        ccpAckTimeout: 5000,
        ccpSynTimeout: 3000,
        ccpLoadTimeout: 10000
      });
    };

    init();
  }, []);

  return (
    <div>
      <div id="container-div" style={{ width: '500px', height: '500px' }}></div>
    </div>
  );
};

export default Connect;
