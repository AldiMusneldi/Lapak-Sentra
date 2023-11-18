import React from 'react';
import ReactLogo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="container mx-auto flex justify-between p-1 items-center font-Poppins">
          <div className="nav-title scale-100  w-[10%]">
            <a href="/">
              <img src={ReactLogo} alt="React Logo" />
            </a>
          </div>
          <div className="nav-link w-[40%] text-sm">
            <ul className="flex justify-between ">
              <li>
                <a href="">Hunian</a>
              </li>
              <li>
                <a href="">Fasilitas Rumah</a>
              </li>
              <li>
                <a href="">Tentang kami</a>
              </li>
              <li>
                <a href="">Hubungi Kami</a>
              </li>
            </ul>
          </div>
          <div className="nav-profile w-[15%] flex justify-between items-center">
            <div className=" rounded-md border-2 border-primary_70 py-[10px] px-[17px]">
              <a href="">
                <span className="font-semibold text-Neutral_70">Masuk</span>
              </a>
            </div>
            <div className="rounded-md bg-primary_70 border-2 border-primary_70 py-[10px] px-[17px]">
              <a href="">
                <span className="font-semibold text-Neutral_10">Daftar</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
