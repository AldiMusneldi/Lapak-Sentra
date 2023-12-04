import React from 'react';
import { Link } from "react-router-dom";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import hunian from "../assets/icons/hunian.svg";
import promotion from "../assets/icons/ceklist.svg";
import statistic from "../assets/icons/statistic.svg";
import exit from "../assets/icons/exit.svg";

const ProfilPemilik = () => {
  return (
    <>
      <div className="pl-12 items-center flex">
        <div className="flex flex-col relative mb-[275px]">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center items-center">
            <img
              src={profile}
              className="mt-12 rounded-full w-[150px] h-[150px] absolute"
            />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center">
            <div>
              <h1 className="text-2xl font-bold pt-4">Aldi Musneldi</h1>
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
          <div className="ml-4 bg-primary_70 rounded-md w-[900px] h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">Profile</p>
          </div>
          <div className="mb-6 ml-4 mt-3 rounded-lg shadow-xl">
            <div className="ml-4 mt-3 flex justify-center items-center">
              <div>
                <img src={profile} alt="" />
                <h1 className="font-bold text-3xl flex justify-center items-center">
                  Aldi Musneldi
                </h1>
                <br />
                <br />
              </div>
            </div>
            <div>
              <div className="pl-28">
                <div className="flex text-lg">
                  <p>Jenis Kelamin :</p>
                  <p className="pl-56">Pria</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Tanggal Lahir :</p>
                  <p className="pl-56">21 Januari 2000</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Pekerjaan :</p>
                  <p className="pl-[254px]">Mahasiswa</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Nama Kantor/Sekolah : </p>
                  <p className="pl-[156px]">Universitas Indonesia</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Kota Asal : </p>
                  <p className="pl-64">Padang</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Status :</p>
                  <p className="pl-[281px]">Sedang menyewa Kost</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Pendidikan terakhir :</p>
                  <p className="pl-44">SMK</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Kontak Darurat : </p>
                  <p className="pl-52">+62 820-0292-9201</p>
                  <br />
                  <br />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/pemilik/account/edit">
                  <button className="mb-10 px-4 py-2 bg-primary_70 text-white rounded">
                    Edit Profil
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPemilik;