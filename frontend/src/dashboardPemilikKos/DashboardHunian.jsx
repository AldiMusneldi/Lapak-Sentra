import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fthunian from '../assets/gambar-kost&kontrakan/hunian.svg';
import CardProfileH from '../components/Hunian/Card-profileH/CardProfileH';
import SideBarH from '../components/Hunian/SidebarH/SideBarH';
import Hunian from '../components/List/Hunian';
import { useDisclosure } from '@chakra-ui/react';
import Modalpemilik from '../components/Modals/Modalpemilik';
import { useDispatch, useSelector } from 'react-redux';
import { filteredK } from '../features/katagoriSlice';

const DashboardHunian = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.Skatagori.filteredDataK);

  useEffect(() => {
    dispatch(filteredK({ kost: "kost" }));
  }, [dispatch]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfileH />
          <SideBarH />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Dashboard Pemilik Hunian
            </p>
          </div>
          <div className="">
            <div className="border border-gray-300 mt-3 px-[70px] py-10 rounded-md w-[70%]">
              <div className="flex flex-col font-bold text-2xl">
                <h1>‘Hi Pemilik Hunian’</h1>
                <p>Selamat datang di halaman Dashboard</p>
              </div>
            </div>
            <div className="text-2xl py-2">
              <h1>List Kamar Yang Didaftarkan</h1>
              <div className="container mt-4 mb-2">
                <div className="basis-[90%] flex gap-3">
                  {/* card nya */}
                  {filteredData.slice(4, 7).map((favor, index) => (
                    <Hunian favor={favor} key={index} onOpen={onOpen} />
                  ))}
                  <Modalpemilik onClose={onClose} isOpen={isOpen} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHunian;
