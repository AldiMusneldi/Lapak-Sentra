import React from 'react';
import { useNavigate } from 'react-router-dom';

const TotalPembayaran = () => {
  const navigate = useNavigate();
  const pesan = (pesan) => {
    navigate(pesan);
  };
  return (
    <>
      <div className="total p-2 border border-Neutral_70 rounded-md">
        <div className="flex  justify-end p-2 mb-3">
          <div className="flex flex-col basis-[30%] gap-5">
            <div className="flex  basis-[30%] justify-between">
              <p>Subtotal Barang</p>
              <h3 className="font-semibold">Rp254.900</h3>
            </div>
            <div className="flex  basis-[30%] justify-between">
              <p>Total Proteksi Barang:</p>
              <h3 className="font-semibold">Rp18.000</h3>
            </div>
            <div className="flex  basis-[30%] justify-between">
              <p>Total Ongkos Kirim:</p>
              <h3 className="font-semibold">Rp16.000</h3>
            </div>
            <div className="flex  basis-[30%] justify-between">
              <p>Biaya Layanan</p>
              <h3 className="font-semibold">Rp1000</h3>
            </div>
            <div className="flex  basis-[30%] justify-between">
              <p>Biaya Penanganan</p>
              <h3 className="font-semibold">Rp28.890</h3>
            </div>
            <div className="flex  basis-[30%] justify-between">
              <p>Total Pembayaran:</p>
              <h3 className="font-semibold text-2xl text-Eror_70">Rp318.790</h3>
            </div>
          </div>
        </div>
        <div className="border border-b-1 border-t-neutral-500"></div>
        <div className="pesan flex justify-between p-3 items-center">
          <div className="">
            <p>
              Dengan melanjutkan, Saya menyetujui <span className="text-primary_70">Syarat & Ketentuan </span> yang berlaku.
            </p>
          </div>
          <div className="">
            <button onClick={() => pesan('/pembayaran')} className="p-2 bg-primary_70 text-Neutral_10 text-lg font-semibold rounded-md">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalPembayaran;
