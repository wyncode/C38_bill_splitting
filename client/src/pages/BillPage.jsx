import React from 'react';
import QrReader from 'react-qr-reader';
import HomeNav from '../components/HomeNav';
import { useHistory } from 'react-router-dom';

const BillPage = () => {
  const history = useHistory();

  function handleScan(event) {
    if (event !== null) {
      history.push('/receipt');
    }
  }

  return (
    <div className="box">
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
