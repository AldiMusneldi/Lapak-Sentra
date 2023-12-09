import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/gambar-testimoni/aldi.svg';
import CardProfile from '../components/Users/Card-profile/CardProfile';
import Sidebar from '../components/Users/Sidebar/Sidebar';

const Profil = () => {
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
                <Link to="/user/account/edit">
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

export default Profil;
