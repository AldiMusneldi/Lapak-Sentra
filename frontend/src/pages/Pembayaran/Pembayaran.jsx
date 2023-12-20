import React, { useEffect } from 'react';
import Total from '../../components/payments/Total';
import PaymentMethod from '../../components/payments/PaymentMethod';
import DetailsAccordion from '../../components/payments/DetailsAccordion';
import { useNavigate } from 'react-router-dom';
import menu from '../../components/Menu/Menu';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateAuth } from '../../features/loginSlice';
import Navbar1 from '../../components/Navbar/Navbar1';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Pembayaran() {
  const navigate = useNavigate(menu);
  const auth = useSelector((state) => state.login.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/me').then((res) => {
      console.log(res.data);
      if (res.data.login === true) {
        dispatch(updateAuth(true));
      } else {
        dispatch(updateAuth(false));
      }
    });
  });
  return (
    <>
      {/* validasi sudah login */}
      {auth ? (
        <div>
          <Navbar1 navigate={navigate} />
        </div>
      ) : (
        <div>
          <Navbar navigate={navigate} />
        </div>
      )}
      <Total />
      <PaymentMethod />
      <DetailsAccordion />
      <Footer />
    </>
  );
}

export default Pembayaran;
