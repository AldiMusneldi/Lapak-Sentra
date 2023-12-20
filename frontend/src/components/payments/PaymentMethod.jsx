import React from 'react';
import BCA from '../../assets/icons/BCA.svg';

const PaymentMethod = () => {
  return (
    <>
      <div className="container">
        <div className="ml-36 py-6 flex items-center text-xl">
          <img src={BCA} alt="" />
          <h1 className="px-2">Bank BCA</h1>
        </div>
        <div className="text-xl px-56 mb-6">
          <p>No. Rekening : </p>
          <div className="flex">
            <p className="text-red-500">121 0801 2238 3329</p>
            <p className="px-8 text-primary_70">SALIN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
