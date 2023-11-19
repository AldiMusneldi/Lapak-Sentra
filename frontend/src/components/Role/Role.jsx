import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from '../../assets/logo.svg';
import penyewa from '../../assets/icons/penyewa.svg';
import pemilik from '../../assets/icons/pemilik.svg';
import umkm from '../../assets/icons/umkm.svg';


const Role = () => {
  return (
    <>
     <section className="p-[2rem] font-worksans">
       <div className="container mx-auto justify-center">
         <div className="flex flex-col items-center">
            <div className="mb-[18px]">
              <img src={ReactLogo} alt="React Logo" />
            </div>
            <div>
              <h1 className="font-title text-center font-semibold text-2xl mb-2">Masuk Ke Lapak Sentra</h1>
              <p className="mb-4 text-center text-md">Saya Ingin Masuk Sebagai</p>
            </div>
            <div className="mx-auto flex rounded-md shadow-md overflow-hidden mb-4">
              <div className="flex-shrink-0 flex items-center">
                <img className="mt-2 mr-8 mb-2 ml-4 h-25 w-25 object-cover" src={penyewa} alt="Gambar" />
              </div>
              <div>
                <Link to="/tenant"><button className="mt-7 mr-6 rounded-md bg-indigo-700 text-white w-48 py-[10px] px-[17px]">Penyewa</button></Link>
              </div>
            </div>
            <div className="mx-auto flex rounded-md shadow-md overflow-hidden mb-4">
              <div className="flex-shrink-0 flex items-center">
                <img className="mt-2 mr-8 mb-2 ml-4 h-25 w-25 object-cover" src={pemilik} alt="Gambar" />
              </div>
              <div>
                <button className="mt-7 mr-6 rounded-md bg-indigo-700 text-white w-48 py-[10px] px-[17px]">Pemilik Properti</button>
              </div>
            </div>
            <div className="mx-auto flex rounded-md shadow-md overflow-hidden mb-4">
              <div className="flex-shrink-0 flex items-center">
                <img className="mt-2 mr-8 mb-2 ml-4 h-25 w-25 object-cover" src={umkm} alt="Gambar" />
              </div>
              <div>
                <button className="mt-7 mr-6 rounded-md bg-indigo-700 text-white w-48 py-[10px] px-[17px]">Pemilik UMKM</button>
              </div>
            </div>
         </div>
       </div>
     </section>
    </>
  );
};

export default Role;