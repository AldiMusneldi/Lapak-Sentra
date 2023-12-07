import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import shop from "../assets/icons/shop+.svg";
import promotion from "../assets/icons/ceklist.svg";
import statistic from "../assets/icons/statistic.svg";
import exit from "../assets/icons/exit.svg";

const EditUMKM = () => {
  return (
    <>
      <div className="pl-12 items-center flex">
        <div className="flex flex-col relative mb-[218px]">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center items-center">
            <img
              src={profile}
              className="mt-12 rounded-full w-[150px] h-[150px] absolute"
            />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center">
            <div>
              <h1 className="text-2xl font-bold pt-4">Bevin Stevanius</h1>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/umkm/dashboardumkm">
              <button className="flex items-center">
                <img src={home} />
                <p className="pl-3">Dashboard Pemilik UMKM</p>
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
            <Link to="/umkm/registerproduk">
              <button className="mt-4 flex items-center">
                <img src={shop} />
                <p className="pl-3">Daftarkan Produk</p>
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
        <div className="mt-24">
          <div className="ml-4 bg-primary_70 rounded-md w-[900px] h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">Profile</p>
          </div>
          <div className="mb-6 ml-4 mt-3 rounded-lg shadow-xl">
            <div className="ml-4 mt-3 flex justify-center items-center">
              <div>
                <img src={profile} alt="" />
                <br />
                <br />
              </div>
            </div>
            <div>
              <div className="pl-28">
                <div className="flex text-lg">
                  <p>Nama Lengkap :</p>
                  <input
                    type="text"
                    className="ml-[115px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Masukkan Nama Anda"
                  />
                </div>
                <div className="flex text-lg">
                  <p>Jenis Kelamin :</p>
                  <input
                    type="text"
                    className="ml-32 border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Pilih Jenis Kelamin L/P"
                  />
                </div>
                <div className="flex text-lg">
                  <p>Tanggal Lahir :</p>
                  <input
                    type="text"
                    className="ml-[130px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Masukkan Tanggal Lahir"
                  />
                </div>
                <div className="flex text-lg">
                  <p>Pekerjaan :</p>
                  <input
                    type="text"
                    className="ml-[159px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Pilih Pekerjaan"
                  />
                </div>
                <div className="flex text-lg">
                  <p>Nama Kantor : </p>
                  <input
                    type="text"
                    className="ml-[129px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Contoh : PT Kreative Multimedia"
                  />
                </div>
                <div className="flex text-lg">
                  <p>Kota Asal : </p>
                  <input
                    type="text"
                    className="ml-[162px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Masukkan Kota Asal"
                  />
                </div>
                <div className="flex text-lg">
                  <p>Status :</p>
                  <input
                    type="text"
                    className="ml-[187px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Pilih Status"
                  />
                </div>
                <div className="flex text-lg">
                  <p>Pendidikan terakhir :</p>
                  <input
                    type="text"
                    className="ml-[82px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Pilih Pendidikan Terakhir"
                  />
                </div>
                <div className="flex text-lg">
                  <p>Kontak Darurat : </p>
                  <input
                    type="text"
                    className="ml-[116px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Masukkan Kontak Anda"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/umkm/account">
                  <button className="mb-10 px-4 py-2 bg-primary_70 text-white rounded">
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
};

export default EditUMKM;
