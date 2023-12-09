import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/gambar-testimoni/aldi.svg';
import CardProfile from '../components/Users/Card-profile/CardProfile';
import Sidebar from '../components/Users/Sidebar/Sidebar';

const EditProfile = () => {
  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfile />
          <Sidebar />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">Profile</p>
          </div>
          <div className="mb-6 mt-3 rounded-lg shadow-xl">
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
                  <p>Nama Kantor/Sekolah : </p>
                  <input
                    type="text"
                    className="ml-[61px] border border-black rounded-sm pl-2 h-10 w-80 mb-4"
                    placeholder="Contoh : Universitas Negeri Malang"
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
                <Link to="/user/account">
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

export default EditProfile;
