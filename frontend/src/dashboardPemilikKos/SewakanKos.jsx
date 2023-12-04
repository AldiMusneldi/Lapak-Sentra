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

const SewakanKos = () => {
  return (
    <>
      <div className="pl-12 items-center flex">
        <div className="flex flex-col relative mb-[1150px]">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center items-center">
            <img
              src={profile}
              className="mt-12 rounded-full w-[150px] h-[150px] absolute"
            />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center">
            <div>
              <h1 className="text-2xl font-bold pt-4">Aldi Musneldi</h1>

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
            <div className="mt-4 flex items-center">
              <img src={exit} className="w-[35px]" />
              <p className="pl-3">Keluar</p>
            </div>
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
        <div className="mt-24">
          <div className="ml-8 bg-primary_70 rounded-md w-[900px] h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Sewakan Kos/Kontrakan Saya
            </p>
          </div>
          <div className="mb-6 ml-5">
            <div className=" border-gray-300 ml-4 mt-3">
              <h1 className="mb-6 text-xl font-bold">Lengkapi Data Kos</h1>
              <div className="mb-3">
                <h1>Nama Kost</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="mb-3">
                <h1>Luas Bangunan</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="mb-3">
                <h1>Jenis Kost</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="mb-3">
                <h1>Kamar Mandi</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="mb-3">
                <h1>Harga</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="mb-3">
                <h1>Harga</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <div className="mb-3">
                <h1>Deskripsi</h1>
                <textarea
                  type="text"
                  className="border border-black rounded-sm pl-2 h-28 w-80 mb-4"
                />
              </div>
              <div className="mb-3">
                <h1>Unggah Foto</h1>
                <p className="pl-20">Foto Utama</p>
                <p className="pl-20">Foto Tambahan</p>
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
              <div className="mb-3">
                <h1>Fasilitas Lainnya</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
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
              <div className="mb-3">
                <h1>Tempat Terdekat Lainnya</h1>
                <input
                  type="text"
                  className="border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                />
              </div>
              <Link to="">
                <button className="px-4 py-2 bg-primary_70 text-white rounded">
                  Daftarkan Kost Anda sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SewakanKos;
