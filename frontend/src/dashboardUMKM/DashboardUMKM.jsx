import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import CardProfileU from "../componentsUMKM/Card-profileU/CardProfileU";
import SideNavbar from "../componentsUMKM/Side-navbar/SideNavbar";
// clear
function DashboardUMKM() {
  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfileU />
          <SideNavbar />
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
                    3. PENGIRIMAN DI JAMIN AMAN KARENA ADA ASURANSI DARI PIHAK
                    EKSPEDISI. <br />
                    4. RESPON TANGGAP SERTA AFTERSALE YANG SIAP MEMBANTU KENDALA
                    ANDA. <br />
                    JADI JANGAN RAGU YA BELANJA DI TOKO KAMI :)
                  </p>
                </span>
              </div>
              <div className="flex container ml-12 justify-center">
                <Link to="/umkm/dashboardumkm/edit">
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
}

export default DashboardUMKM;
