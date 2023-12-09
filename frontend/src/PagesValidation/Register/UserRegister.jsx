import React from 'react';
import { Link } from "react-router-dom";
import AnimateTenant from "../../assets/icons/register.svg";
import iconUnhide from "../../assets/icons/visibility.svg";
import IconGoogle from "../../assets/icons/google.svg";
import iconFB from "../../assets/icons/facebook.svg";

function UserRegister() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="mt-36 pl-36">
            <img src={AnimateTenant} alt="" />
          </div>

          <form action="">
            <div className="w-96 p-6 ml-52 mt-16 shadow-lg flex flex-col bg-white rounded-md">
              <div>
                <h1 className="font-bold text-2xl">Daftar Akun Penyewa</h1>
                <label for="username" className="block text-base mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="username"
                  className="h-10 pl-4 border w-full border-black rounded-md"
                  placeholder="Masukkan Nama Lengkap Anda"
                />
              </div>
              <div className="mt-3">
                <label for="handphone" className="block text-base mb-2">
                  Nomor Handphone
                </label>
                <input
                  type="text"
                  id="handphone"
                  className="h-10 pl-4 border w-full border-black rounded-md"
                  placeholder="Masukkan Nomor Handphone Anda"
                />
              </div>
              <div className="mt-3">
                <label for="email" className="block text-base mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="h-10 pl-4 border w-full border-black rounded-md"
                  placeholder="Masukkan Email Anda"
                />
              </div>
              <div className="mt-3">
                <img src={iconUnhide} alt="" className="absolute ml-72 mt-10" />
                <label for="password" className="block text-base mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="h-10 pl-4 border w-full border-black rounded-md"
                  placeholder="Masukkan Password Anda"
                />
              </div>
              <div className="mt-3">
                <img src={iconUnhide} alt="" className="absolute ml-72 mt-10" />
                <label for="confirm" className="block text-base mb-2">
                  Konfirmasi Password
                </label>
                <input
                  type="confirm"
                  id="confirm"
                  className="h-10 pl-4 border w-full border-black rounded-md"
                  placeholder="Konfirmasi Password Anda"
                />
              </div>
              <div className="mt-3">
                <Link to="/home">
                  <button className="h-10 pl-4 border w-full bg-primary_70 text-white border-black rounded-md">
                    Daftar
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-96 p-6 ml-48 ">
              <div>
                <h1>Masuk Melalui: </h1>
              </div>
              <div className="mt-3">
                <img src={IconGoogle} alt="" className="absolute ml-4 mt-2" />
                <button className="w-full pr-3 pl-16 py-2 text-black rounded-xl border border-black">
                  Masuk Dengan Google
                </button>
              </div>
              <div className="mt-3">
                <img src={iconFB} alt="" className="absolute ml-4 mt-2" />
                <button className="w-full pr-3 pl-14 py-2 text-black rounded-xl border border-black">
                  Masuk Dengan Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserRegister;