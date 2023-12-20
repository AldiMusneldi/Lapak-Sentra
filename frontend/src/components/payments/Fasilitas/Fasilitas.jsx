import React from 'react';
import gambar2 from '../../../assets/gambar-barang/ricecooker2.svg';
import { IoMdChatboxes } from 'react-icons/io';

const Fasilitas = () => {
  return (
    <>
      <div className="fasilitas-rumah p-2 border border-Neutral_70 rounded-md mb-2">
        <div className="title mb-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-2xl">Fasilitas Rumah dipesan</h2>
            <div className="menu basis-[60%]">
              <ul className="flex justify-between">
                <li>Harga Satuan</li>
                <li>Jumlah</li>
                <li>Subtotal Produk</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nama-pt flex gap-3 mb-2">
          <h2 className="uppercase">Megah jaya Eloktronik</h2>
          <span>|</span>
          <div className="flex text-xl items-center mb-2 text-primary_70">
            <IoMdChatboxes size="" />
            <h1 className="">Tanya Pemilik</h1>
          </div>
        </div>
        <div className="border border-b-1 border-t-neutral-500"></div>
        <div className="flex p-2 items-center font-semibold">
          <div className="merah basis-[40%] items-center gap-3 flex p-1 rounded-md text-sm">
            <div className="basis-[10%]">
              <img src={gambar2} alt="" />
            </div>
            <h3>KSN-18 MG Merah</h3>
          </div>
          <div className="menu basis-[60%]">
            <ul className="flex justify-between">
              <li>Rp254.900</li>
              <li>1</li>
              <li>Rp254.900</li>
            </ul>
          </div>
        </div>
        <div className="border border-b-1 border-t-neutral-500"></div>
        <div className="total-jumlah flex justify-end p-2">
          <div className="flex gap-3">
            <p>Total Pesanan (1 Produk):</p>
            <h3 className="font-bold">Rp254.900</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fasilitas;
