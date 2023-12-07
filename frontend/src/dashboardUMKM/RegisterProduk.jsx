import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import hunian from "../assets/icons/hunian.svg";
import promotion from "../assets/icons/ceklist.svg";
import statistic from "../assets/icons/statistic.svg";
import exit from "../assets/icons/exit.svg";
import iconWifi from "../assets/icons/wifi1.svg";
import iconAC from "../assets/icons/ac1.svg";
import iconTV from "../assets/icons/tv1.svg";
import iconKulkas from "../assets/icons/kulkas1.svg";
import iconKipas from "../assets/icons/kipas1.svg";
import iconMeja from "../assets/icons/meja1.svg";
import iconKursi from "../assets/icons/kursi1.svg";
import iconKompor from "../assets/icons/kompor1.svg";
import iconLemari from "../assets/icons/lemari1.svg";
import iconTidur from "../assets/icons/tempattidur1.svg";
import iconMandi from "../assets/icons/mandi1.svg";
import iconMotor from "../assets/icons/motor1.svg";
import iconMobil from "../assets/icons/mobil1.svg";
import iconListrik from "../assets/icons/listrik1.svg";
import iconMasjid from "../assets/icons/masjid.svg";
import iconStasiun from "../assets/icons/stasiun.svg";
import iconUniv from "../assets/icons/univ.svg";
import iconRumahsakit from "../assets/icons/rumahsakit.svg";
import iconSupermarket from "../assets/icons/supermarket.svg";
import iconTempatmakan from "../assets/icons/tempatmakan.svg";
import iconHalte from "../assets/icons/halte.svg";

const RegisterProduk = () => {
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
            <Link to="">
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
              Daftarkan Produk Anda
            </p>
          </div>
          <div className="">
            <div className="border-gray-300 ml-4 mt-3">
              <h1 className="mb-6 text-xl font-bold">Lengkapi Data Produk</h1>
              <div className="">
                <h1>Nama Barang</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="">
                <h1>Harga Barang</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="">
                <h1>Proctection</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="">
                <h1>Kategori Fasilitas</h1>
                <select name="" id="" className="border border-black rounded-sm pl-2 h-10 w-80 mb-4">
                    <option value="">Pilih kategori Fasilitas</option>
                    <option value="">Barang Elektronik</option>
                    <option value="">Peralatan Dapur</option>
                    <option value="">Perlengkapan Tidur</option>
                </select>
              </div>
              <div className="">
                <h1>Pengiriman</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="">
                <h1>Variasi</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="">
                <h1>Spesifikasi Produk</h1>
                <textarea
                  type="text"
                  className="border border-black rounded-sm pl-2 h-28 w-80 mb-4"
                />
              </div>
              <div className="">
                <h1>Deskripsi Produk</h1>
                <textarea
                  type="text"
                  className="border border-black rounded-sm pl-2 h-28 w-80 mb-4"
                />
              </div>
              <div className="">
                <h1>Unggah Foto</h1>
                <p className="pl-20">Foto Utama</p>
                <p className="pl-20">Foto Tambahan</p>
              </div>
              <div className="">
                <h1>Metode Pembayaran</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <Link to="/umkm/dashboardumkm">
                <button className="px-4 py-2 bg-primary_70 text-white rounded mb-3">
                  Daftarkan Produk Anda
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterProduk;
