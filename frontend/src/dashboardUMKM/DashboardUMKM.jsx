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
    dispatch(filteredF("fasilitas rumah"));
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
            <div className="">
              <div className="border border-gray-300 mt-3 mb-3 px-[70px] py-10 rounded-md w-[70%]">
                <div className="flex flex-col font-bold text-2xl">
                  <h1>‘Hi Pemilik Hunian’</h1>
                  <p>Selamat datang di halaman Dashboard</p>
                </div>
              </div>
              <div className="text-2xl">
                <h1>List Produk Yang Didaftarkan</h1>
                <div className="container mt-4 mb-2">
                  <div className="basis-[90%] flex gap-3">
                    {/* card nya */}
                    {filteredProduct.slice(0, 3).map((favor, index) => (
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
