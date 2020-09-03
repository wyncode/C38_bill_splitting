import React from 'react';
import QrReader from 'react-qr-reader';
import HomeNav from '../components/HomeNav';

const BillPage = () => {
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
      <HomeNav />

      <h1>QR Code</h1>
      <QrReader
        delay={1000}
        onScan={(event) => handleScan(event)}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default BillPage;
