import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

const Alamat = () => {
  return (
    <>
      <div className="alamat p-2 border border-Neutral_70 rounded-md mb-3">
        <div className="title mb-4">
          <div className="flex items-center">
            <span className="text-2xl">
              <CiLocationOn />
            </span>
            <h2 className="font-medium text-2xl">Alamat Pengiriman</h2>
          </div>
        </div>
        <div className="flex items-center justify-between w-[99%] mx-auto mb-4">
          <div className="nama text-xl basis-[20%]">
            <h2>Aldi Musneldi</h2>
            <h2>(+62) 820-0292-9201</h2>
          </div>
          <div className="alamat basis-[60%]">
            <p>Jalan Mangga Besar III No.17, RT07 RW 02, Kelurahan Mangga Kecil, Kecamatan Mangga Sedang, KABUPATEN PONDOK MANGGA, JAKARTA TIMUR, DKI JAKARTA</p>
          </div>
          <div className="utama">
            <div className="p-2 border border-Eror_70 text-Eror_70 flex justify-center items-center">
              <p>utama</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alamat;
