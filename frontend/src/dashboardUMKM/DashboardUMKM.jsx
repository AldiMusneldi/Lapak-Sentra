import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import CardProfileU from '../components/UMKM/Card-profileU/CardProfileU';
import SidebarU from '../components/UMKM/SidebarU/SidebarU';
import Produk from '../components/List/Produk';
import { useDisclosure } from '@chakra-ui/react';
import Modalpemilik from '../components/Modals/Modalpemilik';
import { useDispatch, useSelector } from 'react-redux';
import { filteredF } from '../features/katagoriSlice';
// clear
const DashboardUMKM = () => {
  const dispatch = useDispatch();
  const filteredProduct = useSelector((state) => state.Skatagori.filteredDataF);

  useEffect(() => {
    dispatch(filteredF('fasilitas rumah'));
  }, [dispatch]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfileU />
          <SidebarU />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Dashboard Pemilik UMKM
            </p>
          </div>
          <div className="">
            <div className="border-gray-300 ml-4 mt-3">
              <div className="flex mb-3">
                <h1>Nama UMKM</h1>
                <p className="pl-[70px]">MEGAH JAYA ELEKTRONIK</p>
              </div>
              <div className="flex mb-3">
                <h1>Logo UMKM</h1>
                <span>
                  <img src={logo} className="pl-20" />
                </span>
              </div>
              <div className="flex mb-3">
                <h1>Alamat</h1>
                <p className="pl-[116px]">Jakarta Barat</p>
              </div>
              <div className="flex mb-3">
                <h1>Deskripsi</h1>
                <span className="border border-gray-400 rounded-md ml-24 px-2 py-2">
                  <p>
                    HAI PARA Lapak Sentra SELAMAT DATANG DI TOKO MEGAH JAYA
                    ELEKTRONIK :) <br /> TOKO YANG MENJUAL BERBAGAI MACAM
                    KEBUTUHAN ELEKTRONIK RUMAH ANDA :) <br /> SEBELUM BERBELANJA
                    YUK DI SIMAK KENAPA BELANJA DI TOKO KAMI. <br />
                    1. PRODUK JAMINAN ORIGINAL DAN BERGARANSI RESMI. <br />
                    2. PRODUK DI QUALITY CONTROL SEBELUM DI KIRIM. <br />
                    3. PENGIRIMAN DI JAMIN AMAN KARENA ADA ASURANSI DARI PIHAK
                    EKSPEDISI. <br />
                    4. RESPON TANGGAP SERTA AFTERSALE YANG SIAP MEMBANTU KENDALA
                    ANDA. <br />
                    JADI JANGAN RAGU YA BELANJA DI TOKO KAMI :)
                  </p>
                </span>
              </div>
              <div className="flex container ml-12 justify-center">
                <Link to="/umkm/dashboardumkm/edit">
                  <button className="px-4 py-2 bg-primary_70 text-white rounded">
                    Edit
                  </button>
                </Link>
              </div>
              <div className="text-2xl">
                <h1>List Produk Yang Didaftarkan</h1>
                <div className="container mt-4 mb-2">
                  <div className="basis-[90%] flex gap-3">
                    {/* card nya */}
                    {filteredProduct.slice(0,3).map((favor, index) => (
                      <Produk favor={favor} key={index} onOpen={onOpen} />
                    ))}
                    <Modalpemilik onClose={onClose} isOpen={isOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUMKM;
