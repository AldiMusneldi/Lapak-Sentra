import React from 'react';
import { Link } from 'react-router-dom';
import iconWifi from '../assets/icons/wifi1.svg';
import iconAC from '../assets/icons/ac1.svg';
import iconTV from '../assets/icons/tv1.svg';
import iconKulkas from '../assets/icons/kulkas1.svg';
import iconKipas from '../assets/icons/kipas1.svg';
import iconMeja from '../assets/icons/meja1.svg';
import iconKursi from '../assets/icons/kursi1.svg';
import iconKompor from '../assets/icons/kompor1.svg';
import iconLemari from '../assets/icons/lemari1.svg';
import iconTidur from '../assets/icons/tempattidur1.svg';
import iconMandi from '../assets/icons/mandi1.svg';
import iconMotor from '../assets/icons/motor1.svg';
import iconMobil from '../assets/icons/mobil1.svg';
import iconListrik from '../assets/icons/listrik1.svg';
import iconMasjid from '../assets/icons/masjid.svg';
import iconStasiun from '../assets/icons/stasiun.svg';
import iconUniv from '../assets/icons/univ.svg';
import iconRumahsakit from '../assets/icons/rumahsakit.svg';
import iconSupermarket from '../assets/icons/supermarket.svg';
import iconTempatmakan from '../assets/icons/tempatmakan.svg';
import iconHalte from '../assets/icons/halte.svg';
import CardProfileH from '../components/Hunian/Card-profileH/CardProfileH';
import SideBarH from '../components/Hunian/SidebarH/SideBarH';
import UploadImage from '../components/UMKM/Upload-image/UploadImage';

const SewakanKos = () => {
  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfileH />
          <SideBarH />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">Tambah Kos/Kontrakan </p>
          </div>
          <div className="">
            <div className="border border-gray-300 px-4 py-5 pr-24 mt-3 mb-4">
              <h1 className="mb-6 text-xl font-bold">Tambah Data Hunian</h1>
              <form action=""></form>
              <div className="mb-3">
                <h1 className="pb-2">Nama Hunian</h1>
                <input type="text" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" />
              </div>
              <div className="mb-3">
                <h1 className="pb-2">Alamat Lengkap</h1>
                <input type="text" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" />
              </div>
              <div className="mb-3">
                <h1 className="pb-2">Kota</h1>
                <select name="" id="" className=" border border-black rounded-sm pl-2 h-10 w-full mb-4">
                  <option value="">Pilih Kota</option>
                  <option value="">Jakarta Pusat</option>
                  <option value="">Jakarta Barat</option>
                  <option value="">Jakarta Utara</option>
                  <option value="">Jakarta Selatan</option>
                  <option value="">Jakarta Timur</option>
                </select>
              </div>
              <div className="mb-3">
                <h1 className="pb-2">Luas Bangunan</h1>
                <input type="text" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" />
              </div>
              <div className="mb-3">
                {/* ganti dengan dropdown */}
                <h1 className="pb-2">Tipe</h1>
                <select name="" id="" className=" border border-black rounded-sm pl-2 h-10 w-full mb-4">
                  <option value="">Pilih Tipe Hunian</option>
                  <option value="">Kost</option>
                  <option value="">Kontrakan</option>
                </select>
              </div>
              <div className="mb-3">
                <h1 className="pb-2">Harga</h1>
                <input type="text" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" />
              </div>
              <div className="mb-3">
                <h1 className="pb-2">Deskripsi</h1>
                <textarea type="text" className="border border-black rounded-sm pl-2 h-28 w-full mb-4" />
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
              <div className="flex mb-3">
                <h1>Fasilitas</h1>
                <div className="mt-10 -ml-12">
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconWifi} className="pl-3" />
                    <p className="pl-3">Wifi</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconAC} className="pl-3" />
                    <p className="pl-3">AC</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconTV} className="pl-3" />
                    <p className="pl-3">TV</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconKulkas} className="pl-3" />
                    <p className="pl-3">Kulkas</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconKipas} className="pl-3" />
                    <p className="pl-3">Kipas Angin</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconMeja} className="pl-3" />
                    <p className="pl-3">Meja</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconKursi} className="pl-3" />
                    <p className="pl-3">Kursi</p>
                  </div>
                </div>
                <div className="mt-10 ml-10">
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconKompor} className="pl-3" />
                    <p className="pl-3">Kompor</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconLemari} className="pl-3" />
                    <p className="pl-3">Lemari</p>
                  </div>
                  <div className="flex mb-4">
                    <input type="checkbox" name="" id="" />
                    <img src={iconTidur} className="pl-3" />
                    <p className="pl-3">Tempat Tidur</p>
                  </div>
                  <div className="flex mb-4">
                    <input type="checkbox" name="" id="" />
                    <img src={iconMandi} className="pl-3" />
                    <p className="pl-3">Kamar Mandi</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconMotor} className="pl-3" />
                    <p className="pl-3">Parkiran Motor</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconMobil} className="pl-3" />
                    <p className="pl-3">Parkiran Mobil</p>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="" />
                    <img src={iconListrik} className="pl-3" />
                    <p className="pl-3">Listrik</p>
                  </div>
                </div>
              </div>
              {/* <div className="mb-3">
                <h1>Fasilitas Lainnya</h1>
                <input type="text" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" />
              </div> */}
              <div className="mb-3">
                <h1>Tempat Terdekat</h1>
                <div className="flex mb-3">
                  <input type="checkbox" name="" id="" />
                  <img src={iconMasjid} className="pl-3" />
                  <p className="pl-3">Masjid</p>
                </div>
                <div className="flex mb-3">
                  <input type="checkbox" name="" id="" />
                  <img src={iconUniv} className="pl-3" />
                  <p className="pl-3">Universitas</p>
                </div>
                <div className="flex mb-3">
                  <input type="checkbox" name="" id="" />
                  <img src={iconHalte} className="pl-3" />
                  <p className="pl-3">Halte</p>
                </div>
                <div className="flex mb-3">
                  <input type="checkbox" name="" id="" />
                  <img src={iconStasiun} className="pl-3" />
                  <p className="pl-3">Stasiun</p>
                </div>
                <div className="flex mb-3">
                  <input type="checkbox" name="" id="" />
                  <img src={iconSupermarket} className="pl-3" />
                  <p className="pl-3">Supermarket</p>
                </div>
                <div className="flex mb-3">
                  <input type="checkbox" name="" id="" />
                  <img src={iconRumahsakit} className="pl-3" />
                  <p className="pl-3">Rumah Sakit</p>
                </div>
                <div className="flex mb-3">
                  <input type="checkbox" name="" id="" />
                  <img src={iconTempatmakan} className="pl-3" />
                  <p className="pl-3">Tempat Makan</p>
                </div>
              </div>
              {/* <div className="mb-3">
                <h1>Tempat Terdekat Lainnya</h1>
                <input type="text" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" />
              </div> */}
              <Link to="/hunian/dashboardhunian">
                <button className="px-4 py-2 bg-primary_70 text-white rounded">Daftarkan Kost Anda sekarang</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SewakanKos;
