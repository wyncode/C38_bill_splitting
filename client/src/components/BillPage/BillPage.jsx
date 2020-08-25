import React from 'react';
import QrReader from 'react-qr-reader';
//import { useHistory } from 'react-router-dom';

const billPage = () => {
  //const history = useHistory();

  function handleScan(event) {
    console.log('Event: ', event);
    if (event !== null) {
      // API call using event. If call is true then update context/save onto session storage
      //    and push me to next page

      console.log('I am no longer null');
    }
  }

  return (
    <div>
      <h1>QR Code</h1>
      <QrReader
        delay={1000}
        onScan={(event) => handleScan(event)}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default billPage;
