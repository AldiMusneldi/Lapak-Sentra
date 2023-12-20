import React from 'react';
import { Link } from 'react-router-dom';
import CardProfileH from '../components/Hunian/Card-profileH/CardProfileH';
import SideBarH from '../components/Hunian/SidebarH/SideBarH';
import UploadImage from '../components/UMKM/Upload-image/UploadImage';

function DashboardHunianEdit() {
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
            <div className="border border-gray-300 mt-3 px-[70px] py-6 rounded-md">
              <div className="flex mb-3">
                <h1 style={{ whiteSpace: "nowrap" }}>Nama Hunian</h1>
                <input
                  type="text"
                  className="ml-[56px] border border-black rounded-sm pl-2 h-10 w-full mb-4"
                  placeholder="Masukkan Nama Hunian Anda"
                />
              </div>
              <div className="flex mb-3">
                <h1>Foto Hunian</h1>
                <div className="pl-[63px]">
                  <UploadImage />
                </div>
              </div>
              <div className="flex mb-3">
                <h1 style={{ whiteSpace: "nowrap" }}>Lokasi</h1>
                <input
                  type="text"
                  className="ml-[114px] border border-black rounded-sm pl-2 h-10 w-full mb-4"
                  placeholder="Masukkan Lokasi"
                />
              </div>
              <div className="flex">
                <h1>Keterangan</h1>
                <textarea
                  type="text"
                  className="ml-[80px] border border-black rounded-sm pl-2 py-2 h-40 w-full"
                  placeholder="Masukkan Keterangan Hunian"
                />
              </div>
            </div>
            <div className="flex container ml-12 justify-center py-2">
              <Link to="/hunian/dashboardhunian">
                <button className="px-4 py-2 bg-primary_70 text-white rounded">
                  Simpan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHunianEdit;
