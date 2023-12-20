import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Navbar1 from '../../components/Navbar/Navbar1';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import menu from '../../components/Menu/Menu';
import axios from 'axios';

import Alamat from '../../components/payments/Alamat/Alamat';
import Fasilitas from '../../components/payments/Fasilitas/Fasilitas';
import MetodePembayaran from '../../components/payments/Metode-Pembayaran/MetodePembayaran';
import TotalPembayaran from '../../components/payments/Total-Pembayaran/TotalPembayaran';

function Pemesanan() {
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
      <section id="pemesana" className="pt-[10rem] mb-5 font-worksans">
        <div className="container mx-auto">
          <div className="header-title p-2 bg-primary_70 rounded-md my-2">
            <h1 className="text-center text-2xl font-bold text-Neutral_10">Checkout</h1>
          </div>
          <Alamat />
          <Fasilitas />
          <MetodePembayaran />
          <TotalPembayaran />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Pemesanan;
