import React from 'react';
import { Link } from 'react-router-dom';
import fthunian from '../assets/gambar-kost&kontrakan/hunian.svg';
import CardProfileH from '../components/Hunian/Card-profileH/CardProfileH';
import SideBarH from '../components/Hunian/SidebarH/SideBarH';

const DashboardHunian = () => {
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
            <div className="border border-gray-300 mt-3 px-[70px] py-2 rounded-md">
              <div className="flex mb-3">
                <h1>Nama Hunian</h1>
                <p className="pl-[70px]">Kost Gedung Juang</p>
              </div>
              <div className="flex mb-3">
                <h1>Foto Hunian</h1>
                <span>
                  <img src={fthunian} className="pl-20"/>
                </span>
              </div>
              <div className="flex mb-3">
                <h1>Jenis Kamar</h1>
                <p className="pl-[83px]">Campur</p>
              </div>
              <div className="flex mb-3">
                <h1>Harga</h1>
                <p className="pl-[124px]">Rp. 2.450.000. - Rp. 2.900.000.</p>
              </div>
              <div className="flex mb-3">
                <h1>Jenis Sewa </h1>
                <p className="pl-[92px]">Bulanan</p>
              </div>
              <div className="flex mb-3">
                <h1>Jumlah Kamar</h1>
                <p className="pl-[68px]">15 Kamar</p>
              </div>
              <div className="flex mb-3">
                <h1>Parkir Mobil</h1>
                <p className="pl-[84px]">Ada/Luas</p>
              </div>
              <div className="flex mb-3">
                <h1>Parkir Motor</h1>
                <p className="pl-20">Ada/Luas</p>
              </div>
              <div className="flex mb-3">
                <h1>Fasilitas</h1>
                <p className="pl-[114px]">K.Mandi Dalam, AC, Meja, Kasur, Kulkas Mini</p>
              </div>
              <div className="flex mb-3">
                <h1>Tempat Terdekat</h1>
                <ul className="pl-[70px]" style={{ listStyleType: "disc" }}>
                  <li>Masjid</li>
                  <li>Supermarket</li>
                  <li>Tempat</li>
                  <li>Makan</li>
                  <li>Universitas</li>
                  <li>Stasiun</li>
                </ul>
              </div>
              <div className="flex mb-3">
                <h1>Lokasi</h1>
                <p className="pl-[123px]">Jakarta Pusat</p>
              </div>
              <div className="flex mb-3">
                <h1>Keterangan</h1>
                <ul className="pl-[65px] px-3 ml-10 border border-gray-400 rounded-md" style={{ listStyleType: "disc" }}>
                  <li>
                    Kamar Bisa Berdua Ada Tambahan Biaya Rp. 500.000./Bulan
                  </li>
                  <li>Parkir Mobil Bayar Rp. 150.000./Bulan</li>
                  <li>Parkir Montor Free Parkir</li>
                </ul>
              </div>
            </div>
            <div className="flex container justify-center py-2">
                <Link to="/hunian/dashboardhunian/edit">
                  <button className="px-4 py-2 bg-primary_70 text-white rounded">
                    Edit Deskripsi
                  </button>
                </Link>
              </div>
              <div className="text-2xl py-2">
                <h1>List Kamar Yang Didaftarkan</h1>
                {/*Panggil Cards */}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHunian;
