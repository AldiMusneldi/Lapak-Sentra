import React from 'react';
import '../Tentang-kami/tentangkami.css';
import AnimateAboutUs from '../../assets/animasi/animasi-about.svg';

function TentangKami() {
  return (
    <>
    <div>
      <div className="background-about">
        <h1 className="text-center py-24 font-title text-white font-semibold">Tentang Kami</h1>
      </div>
      <div className="flex">
        <div className="w-cols p-6 my-8 ml-20 flex flex-col rounded-md mb-20">
          <h1 className="font-title text-4xl text-primary_70 font-semibold">Tentang Platform kami</h1>
          <div className="w-[15%] h-[6px] rounded-full bg-secondary_70 my-2"></div>
          <p className="w-text mb-4">Platform “Pencarian Lapak Sentra” ini adalah solusi kreatif untuk pemilik kosan atau kontrakan untuk mengelola dan memasarkan properti mereka, serta pedagang UMKM lokal dalam mempromosikan dagangannya.</p>
          <p className="w-text mb-20">Maka dari itu platform “Lapak Sentra” ini memberikan fitur” yg menarik seperti pembelian fasilitas rumah, sehingga penyewa kost atau kontrakan bisa dengan mudah membeli fasilitas rumah yg diperlukan secara online melalui platform ini.</p>
        </div>
        <div className="my-20 pl-44">
          <img src={AnimateAboutUs} alt="" />
        </div>
      </div>
    </div>
    </>
  );
}

export default TentangKami;
