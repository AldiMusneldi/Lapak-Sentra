import React from 'react';
import Total from '../../components/payments/Total';
import PaymentMethod from '../../components/payments/PaymentMethod';
import DetailsAccordion from '../../components/payments/DetailsAccordion';

function Pembayaran() {
  return (
    <>
    <Total/>
    <PaymentMethod />
    <DetailsAccordion />
    </>
  );
}

export default Pembayaran;