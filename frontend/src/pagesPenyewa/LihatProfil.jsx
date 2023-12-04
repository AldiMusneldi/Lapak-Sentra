import React from "react";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import love from "../assets/icons/love.svg";
import transaction from "../assets/icons/refresh.svg";
import exit from "../assets/icons/exit.svg";
import kost1 from "../assets/gambar-kost&kontrakan/kost1.svg";
import dkost1 from "../assets/detail-kos/dkost1.svg";
import dkost2 from "../assets/detail-kos/dkost1,1.svg";

const LihatProfil = () => {
  return (
    <>
      <div className="pl-12 items-center flex">
        <div className="flex flex-col relative mb-[76px]">
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
            <div className="flex items-center">
              <img src={home} />
              <p className="pl-3">Kos/Kontrakan Saya</p>
            </div>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <div className="mt-4 flex items-center">
              <img src={love} />
              <p className="pl-3">Item Favorit</p>
            </div>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <div className="mt-4 flex items-center">
              <img src={transaction} />
              <p className="pl-3">Riwayat Transaksi</p>
            </div>
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
          <div className="mb-6 ml-4 border border-blue-500 mt-3 rounded-lg shadow-xl">
            <div className="ml-4 mt-3 flex justify-center items-center">
              <div>
                <img src={profile} alt="" />
                <h1 className="font-bold text-xl flex justify-center items-center">
                  Aldi Musneldi
                </h1>
              </div>
            </div>
            <div className="pl-20">
              <div className="flex">
                <p>Jenis Kelamin :</p>
                <p>Pria</p>
              </div>
              <div className="flex">
                <p>Tanggal Lahir :</p>
                <p>21 Januari 2000</p>
              </div>
              <div className="flex">
                <p>Pekerjaan :</p>
                <p>Mahasiswa</p>
              </div>
              <div className="flex">
                <p>Nama Kantor/Sekolah : </p>
                <p>Universitas Indonesia</p>
              </div>
              <div className="flex">
                <p>Kota Asal : </p>
                <p>Padang</p>
              </div>
              <div className="flex">
                <p>Status :</p>
                <p>Sedang menyewa Kost</p>
              </div>
              <div className="flex">
                <p>Pendidikan terakhir :</p>
                <p>SMK</p>
              </div>
              <div className="flex">
                <p>Kontak Darurat : </p>
                <p>+62 820-0292-9201</p>
              </div>
              <button className="ml-4 mb-10 px-4 py-2 bg-primary_70 text-white rounded">
                Edit Profil
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LihatProfil;