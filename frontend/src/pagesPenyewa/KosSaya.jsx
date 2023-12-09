import React from 'react';
import kost1 from '../assets/gambar-kost&kontrakan/kost1.svg';
import dkost1 from '../assets/detail-kos/dkost1.svg';
import dkost2 from '../assets/detail-kos/dkost1,1.svg';
import CardProfile1 from '../components/Users/Card-profile/CardProfile1';
import Sidebar from '../components/Users/Sidebar/Sidebar';

const KosSaya = () => {
  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfile1 />
          <Sidebar />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Kos/Kontrakan Saya
            </p>
          </div>
          <div className="mb-6">
            <div className="mt-3">
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 rounded-tl-xl">
                    Hunian
                  </td>
                  <td className="border border-gray-300 px-4 py-2 rounded-tr-xl">
                    Kos
                    <br />
                    <div className="flex">
                      <img src={kost1} alt="" className="w-[450px]" />
                      <div className="flex-col ml-6 w-56">
                        <img src={dkost1} alt="" className="w-[200px] pb-3" />
                        <img src={dkost2} alt="" className="w-[200px]" />
                      </div>
                    </div>
                    Mall Paragon Tipe A
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Alamat</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Kost Area Gajah Mada, Hayam Wuruk, Olive Paragon Mall Tipe
                    A, Jakarta Pusat Kota
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2" style={{ whiteSpace: "nowrap" }}>
                    Nama Pemilik Kost
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex">
                    Sepuh Aldi Tua
                    <p className="text-indigo-700 pl-[480px]">Hubungi</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    No. Telp/HP
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +62 852-5652-7939
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Harga Perbulan
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rp700.000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Lama Sewa
                  </td>
                  <td className="border border-gray-300 px-4 py-2">3 Bulan</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Total Harga Sewa
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Rp1.950.000
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 rounded-bl-xl">
                    Status Sewa
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex rounded-br-xl">
                    Aktif
                    <p className="pl-10">11/11/2023 - 11/01/2024</p>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KosSaya;
