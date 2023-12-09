import React from 'react';
import { Link } from 'react-router-dom';
import CardProfileU1 from '../components/UMKM/Card-profileU/CardProfileU1';
import profile from '../assets/gambar-testimoni/aldi.svg';
import SidebarU from '../components/UMKM/SidebarU/SidebarU';

const ProfileUMKM = () => {
  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfileU1 />
          <SidebarU />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">Profile</p>
          </div>
          <div className="mb-6 mt-3 rounded-lg shadow-xl">
            <div className="ml-4 mt-3 flex justify-center">
              <div>
                <img src={profile} alt="" />
                <h1 className="font-bold text-3xl flex justify-center">
                  Bevin Stevanius
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
                  <p className="pl-56">21 Maret 1993</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Pekerjaan :</p>
                  <p className="pl-[254px]">Pengusaha</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Nama Kantor : </p>
                  <p className="pl-[222px]">Anugrah Kharisma</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Kota Asal : </p>
                  <p className="pl-64">Jakarta</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Status :</p>
                  <p className="pl-[281px]">Pemilik Kost</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Pendidikan terakhir :</p>
                  <p className="pl-44">S1</p>
                  <br />
                  <br />
                </div>
                <div className="flex text-lg">
                  <p>Kontak Darurat : </p>
                  <p className="pl-52">+62 820-0242-1201</p>
                  <br />
                  <br />
                </div>
              </div>
              <div className="flex justify-center">
                <Link to="/umkm/account/edit">
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

export default ProfileUMKM;
