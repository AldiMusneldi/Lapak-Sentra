import React from 'react';
import { Link } from 'react-router-dom';
import CardProfileU from '../components/UMKM/Card-profileU/CardProfileU';
import SidebarU from '../components/UMKM/SidebarU/SidebarU';
import UploadImage from '../components/UMKM/Upload-image/UploadImage';

const RegisterProduk = () => {
  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfileU />
          <SidebarU />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Daftarkan Produk Anda
            </p>
          </div>
          <div className="">
            <div className="border-gray-300 ml-4 mt-3">
              <h1 className="mb-6 text-xl font-bold">Tambah Data Produk</h1>
              <div className="">
                <h1>Nama Barang</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-full mb-4"
                />
              </div>
              <div className="">
                <h1>Harga Barang</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-full mb-4"
                />
              </div>
              <div className="">
                <h1>Proctection</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-full mb-4"
                />
              </div>
              <div className="">
                <h1>Kategori Fasilitas</h1>
                <select
                  name=""
                  id=""
                  className="border border-black rounded-sm pl-2 h-10 w-full mb-4"
                >
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
                  className="border border-black rounded-sm pl-2 h-10 w-full mb-4"
                />
              </div>
              <div className="">
                <h1>Variasi</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-full mb-4"
                />
              </div>
              <div className="">
                <h1>Spesifikasi Produk</h1>
                <textarea
                  type="text"
                  className="border border-black rounded-sm pl-2 h-28 w-full mb-4"
                />
              </div>
              <div className="">
                <h1>Deskripsi Produk</h1>
                <textarea
                  type="text"
                  className="border border-black rounded-sm pl-2 h-28 w-full mb-4"
                />
              </div>
              <div className="">
                <h1>Unggah Foto</h1>
                <div className="flex mt-4">
                  <p className="pl-12">Foto Utama</p>
                  <div className="pl-16">
                    <UploadImage />
                  </div>
                </div>
                <div className="flex mt-3">
                  <p className="pl-12">Foto Tambahan</p>
                  <div className="flex pl-10">
                    <UploadImage />
                    <div className="pl-3">
                      <UploadImage />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="">
                <h1>Metode Pembayaran</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div> */}
              <Link to="/umkm/dashboardumkm">
                <button className="px-4 py-2 bg-primary_70 text-white rounded mb-3 mt-6">
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
