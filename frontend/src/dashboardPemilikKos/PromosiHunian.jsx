import React from 'react';
import { Link } from 'react-router-dom';
import CardProfileH from '../components/Hunian/Card-profileH/CardProfileH';
import SideBarH from '../components/Hunian/SidebarH/SideBarH';

function PromosiHunian() {
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
              Fitur Promosi
            </p>
          </div>
          <div className="mt-3 border border-gray-400 rounded-md px-6 py-2">
            <h1 className="text-3xl font-bold py-4">Paket Promosi</h1>
            <div className="">
              <div className="flex mb-3">
                <h1 className="text-lg px-3" style={{ whiteSpace: "nowrap" }}>
                  Pilih Paket*
                </h1>
                <select
                  name=""
                  id=""
                  className="border border-black rounded-md px-2 h-10 w-72 ml-auto"
                >
                  <option value="">Rekomendasi Paling Atas</option>
                  <option value="">Bulanan</option>
                  <option value="">3 Bulan</option>
                  <option value="">6 Bulan</option>
                  <option value="">1 Tahun</option>
                </select>
              </div>
              <div className="flex">
                <div className="mt-3 border border-gray-400 rounded-md px-2 py-2 w-[45%]">
                  <div className="flex">
                    <h1 className="text-2xl font-bold">6 Bulan</h1>
                    <input type="radio" className="ml-auto w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold line-through">
                      Rp1.180.000
                    </p>
                    <p>Rp1.080.000</p>
                  </div>
                </div>
                <div className="mt-3 border border-gray-400 rounded-md px-2 py-2 w-[45%] ml-auto">
                  <div className="flex">
                    <h1 className="text-2xl font-bold">1 Tahun</h1>
                    <input type="radio" className="ml-auto w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold line-through">
                      Rp1.800.000
                    </p>
                    <p>Rp1.500.000</p>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <div className="flex pb-2 text-lg">
                  <h1 className="font-bold">Harga</h1>
                  <p className="ml-72">Rp1.180.000</p>
                </div>
                <div className="flex pb-2 text-lg">
                  <h1 className="font-bold">Diskon</h1>
                  <p className="ml-[280px]">Rp118.000</p>
                </div>
                <div className="flex pb-6 text-lg" >
                  <h1 className="font-bold">Total Harga</h1>
                  <p className="ml-[240px]">Rp1.062.000</p>
                </div>
                <div className="flex justify-center">
                <Link to="/hunian/dashboardhunian">
                  <button className="px-4 py-2 mt-2 bg-primary_70 text-white rounded">
                    Pesan Sekarang
                  </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromosiHunian;
