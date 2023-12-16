import React from 'react';
import { Link } from 'react-router-dom';
import CardProfileU from '../components/UMKM/Card-profileU/CardProfileU';
import SidebarU from '../components/UMKM/SidebarU/SidebarU';
import UploadImage from '../components/UMKM/Upload-image/UploadImage';

function DashboardUmkmEdit() {
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
              Dashboard Pemilik UMKM
            </p>
          </div>
          <div className="">
            <div className=" border-gray-300 ml-4 mt-3">
              <div className="flex mb-3">
                <h1 style={{ whiteSpace: "nowrap" }}>Nama UMKM</h1>
                <input
                  type="text"
                  className="ml-[56px] border border-black rounded-sm pl-2 h-10 w-full mb-4"
                  placeholder="Masukkan Nama UMKM Anda"
                />
              </div>
              <div className="flex mb-3">
                <h1>Logo UMKM</h1>
                <div className="pl-[63px]">
                  <UploadImage />
                </div>
              </div>
              <div className="flex mb-3">
                <h1>Alamat</h1>
                <input
                  type="text"
                  className="ml-[100px] border border-black rounded-sm pl-2 h-10 w-full mb-4"
                  placeholder="Masukkan Alamat Anda"
                />
              </div>
              <div className="flex mb-3">
                <h1>Deskripsi</h1>
                <textarea
                  type="text"
                  className="ml-[85px] border border-black rounded-sm pl-2 py-2 h-40 w-full"
                  placeholder="Masukkan Deskripsi Toko Anda"
                />
              </div>
              <div className="flex container ml-12 justify-center">
                <Link to="/umkm/dashboardumkm">
                  <button className="px-4 py-2 bg-primary_70 text-white rounded">
                    Simpan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardUmkmEdit;
