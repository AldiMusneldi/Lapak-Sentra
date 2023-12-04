import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/gambar-testimoni/aldi.svg';
import home from '../assets/icons/home.svg';
import love from '../assets/icons/love.svg';
import transaction from '../assets/icons/refresh.svg';
import exit from '../assets/icons/exit.svg';
import kost1 from '../assets/gambar-kost&kontrakan/kost1.svg';
import dkost1 from '../assets/detail-kos/dkost1.svg';
import dkost2 from '../assets/detail-kos/dkost1,1.svg';

const KosSaya = () => {
  return (
    <>
      <div className="pl-12 items-center flex">
        <div className="flex flex-col relative mb-[76px]">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center items-center">
            <img src={profile} className="mt-12 rounded-full w-[150px] h-[150px] absolute" />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center">
            <div>
              <h1 className="text-2xl font-bold pt-4">Aldi Musneldi</h1>
<<<<<<< HEAD
              <Link to="/lihatprofile">
                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">Lihat Profile</button>
=======
              <Link to="/user/acount">
                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">
                  Lihat Profile
                </button>
>>>>>>> f52667008c421e2261069311a428d2d93870417b
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <button className="flex items-center">
              <img src={home} />
              <p className="pl-3">Kos/Kontrakan Saya</p>
            </button>
            <hr
              className="mt-2"
              style={{
                borderTop: '1px solid grey',
                display: 'block',
                width: '100%',
              }}
            />
            <Link to="/itemfavorit">
              <button className="mt-4 flex items-center">
                <img src={love} />
                <p className="pl-3">Item Favorit</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: '1px solid grey',
                display: 'block',
                width: '100%',
              }}
            />
            <Link to="/riwayat">
              <button className="mt-4 flex items-center">
                <img src={transaction} />
                <p className="pl-3">Riwayat Transaksi</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: '1px solid grey',
                display: 'block',
                width: '100%',
              }}
            />
            <div className="mt-4 flex items-center">
              <img src={exit} className="w-[35px]" />
              <p className="pl-3">Keluar</p>
            </div>
            <hr
              className="mt-2"
              style={{
                borderTop: '1px solid grey',
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        </div>
        <div className="mt-24">
          <div className="ml-4 bg-primary_70 rounded-md w-[900px] h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">Kos/Kontrakan Saya</p>
          </div>
          <div className="mb-6">
            <div className=" border-gray-300 ml-4 mt-3">
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 rounded-tl-xl">Hunian</td>
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
                  <td className="border border-gray-300 px-4 py-2">Kost Area Gajah Mada, Hayam Wuruk, Olive Paragon Mall Tipe A, Jakarta Pusat Kota</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Nama Pemilik Kost</td>
                  <td className="border border-gray-300 px-4 py-2 flex">
                    Sepuh Aldi Tua
                    <p className="text-indigo-700 pl-[480px]">Hubungi</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">No. Telp/HP</td>
                  <td className="border border-gray-300 px-4 py-2">+62 852-5652-7939</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Harga Perbulan</td>
                  <td className="border border-gray-300 px-4 py-2">Rp700.000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Lama Sewa</td>
                  <td className="border border-gray-300 px-4 py-2">3 Bulan</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Total Harga Sewa</td>
                  <td className="border border-gray-300 px-4 py-2">Rp1.950.000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 rounded-bl-xl">Status Sewa</td>
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
