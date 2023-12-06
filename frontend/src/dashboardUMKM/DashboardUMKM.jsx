import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import hunian from "../assets/icons/hunian.svg";
import promotion from "../assets/icons/ceklist.svg";
import statistic from "../assets/icons/statistic.svg";
import exit from "../assets/icons/exit.svg";
import logo from "../assets/icons/logo.svg";
// clear
const DashboardUMKM = () => {
  return (
    <>
      <div className="flex container ml-24">
        <div className="flex flex-col relative mt-24">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center">
            <img
              src={profile}
              className="mt-12 rounded-full w-[150px] h-[150px] z-10"
            />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center z-0">
            <div>
              <h1 className="text-2xl font-bold pt-4">Bevin Stevanius</h1>

              <Link to="/umkm/account">
                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">
                  Lihat Profile
                </button>
              </Link>
            </div>
          </div>
          <div className="container mt-6">
            <Link to="/umkm/dashboardumkm">
              <button className="flex items-center">
                <img src={home} />
                <p className="pl-3">Dashboard Pemilik UMKM</p>
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
            <Link to="/umkm/registerproduk">
              <button className="mt-4 flex items-center">
                <img src={hunian} />
                <p className="pl-3">Daftarkan Produk</p>
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
            <Link to="">
              <button className="mt-4 flex items-center">
                <img src={statistic} />
                <p className="pl-3">Laporan Statistik</p>
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
              Dashboard Pemilik UMKM
            </p>
          </div>
          <div className="">
            <div className="border-gray-300 ml-4 mt-3">
              <div className="flex mb-3">
                <h1>Nama UMKM</h1>
                <p className="pl-[70px]">MEGAH JAYA ELEKTRONIK</p>
              </div>
              <div className="flex mb-3">
                <h1>Logo UMKM</h1>
                <span>
                  <img src={logo} className="pl-20" />
                </span>
              </div>
              <div className="flex mb-3">
                <h1>Alamat</h1>
                <p className="pl-[116px]">Jakarta Barat</p>
              </div>
              <div className="flex mb-3">
                <h1>Deskripsi</h1>
                <span className="border border-gray-400 rounded-md ml-24 px-2 py-2">
                  <p>
                    HAI PARA Lapak Sentra SELAMAT DATANG DI TOKO MEGAH JAYA
                    ELEKTRONIK :) <br /> TOKO YANG MENJUAL BERBAGAI MACAM
                    KEBUTUHAN ELEKTRONIK RUMAH ANDA :) <br /> SEBELUM BERBELANJA
                    YUK DI SIMAK KENAPA BELANJA DI TOKO KAMI. <br />
                    1. PRODUK JAMINAN ORIGINAL DAN BERGARANSI RESMI. <br /> 
                    2. PRODUK DI QUALITY CONTROL SEBELUM DI KIRIM. <br /> 
                    3. PENGIRIMAN DI JAMIN AMAN KARENA ADA ASURANSI DARI PIHAK EKSPEDISI. <br /> 
                    4. RESPON TANGGAP SERTA AFTERSALE YANG SIAP MEMBANTU KENDALA ANDA. <br />
                    JADI JANGAN RAGU YA BELANJA DI TOKO KAMI :)
                  </p>
                </span>
              </div>
              <div className="flex justify-end">
                <Link to="/umkm/dashboard/edit">
                  <button className="px-4 py-2 bg-primary_70 text-white rounded">
                    Edit Deskripsi
                  </button>
                </Link>
              </div>
              <div className="text-2xl">
                <h1>List Produk Yang Didaftarkan</h1>
                {/*Panggil Cards */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUMKM;
