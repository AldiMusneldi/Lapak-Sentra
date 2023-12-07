import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import hunian from "../assets/icons/hunian.svg";
import promotion from "../assets/icons/ceklist.svg";
import statistic from "../assets/icons/statistic.svg";
import exit from "../assets/icons/exit.svg";
import fthunian from "../assets/gambar-kost&kontrakan/hunian.svg";

const DashboardHunian = () => {
  return (
    <>
      <div className="flex container ml-24">
        <div className="flex flex-col relative mt-24">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center">
            <img
              src={profile}
              className="mt-12 rounded-full w-[150px] h-[150px] absolute"
            />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center">
            <div>
              <h1 className="text-2xl font-bold pt-4">Bevin Stevanius</h1>

              <Link to="/pemilik/account">
                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">
                  Lihat Profile
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/dashboardhunian">
              <button className="flex items-center">
                <img src={home} />
                <p className="pl-3">Dashboard Pemilik Hunian</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/sewakankos">
              <button className="mt-4 flex items-center">
                <img src={hunian} />
                <p className="pl-3">Sewakan Kost/Kontrakan saya</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="">
              <button className="mt-4 flex items-center">
                <img src={promotion} />
                <p className="pl-3">Fitur Promosi</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/">
              <div className="mt-4 flex items-center">
                <img src={exit} className="w-[35px]" />
                <p className="pl-3">Keluar</p>
              </div>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Dashboard Pemilik Hunian
            </p>
          </div>
          <div className="mb-6 ml-5">
            <div className=" border-gray-300 ml-4 mt-3">
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
                <ul className="pl-[106px]" style={{ listStyleType: "disc" }}>
                  <li>
                    Kamar Bisa Berdua Ada Tambahan Biaya Rp. 500.000./Bulan
                  </li>
                  <li>Parkir Mobil Bayar Rp. 150.000./Bulan</li>
                  <li>Parkir Montor Free Parkir</li>
                </ul>
              </div>
              <div className="text-2xl">
                <h1>List Kamar Yang Didaftarkan</h1>
                {/*Panggil Cards */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHunian;
