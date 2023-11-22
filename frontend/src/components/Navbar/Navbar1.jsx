import React, { useEffect } from 'react';
import ReactLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import menu from '../Menu/Menu';
import Search from '../Search/Search';
import Profile from '../../assets/gambar-testimoni/rfiq.png';

const Navbar1 = () => {
  useEffect(() => {
    window.onscroll = function () {
      const header = document.querySelector('header');
      const e = header.offsetTop;
      if (window.pageYOffset > e) {
        header.classList.add('navbar-fixed');
        header.classList.remove('navbar');
      } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('navbar');
      }
    };
  });
  return (
    <>
      <header className="navbar">
        <nav className="container mx-auto flex justify-between p-1 items-center font-Poppins">
          <div className="nav-title scale-100 flex basis-[35%] items-center gap-5">
            <Link to="/">
              <img src={ReactLogo} alt="React Logo" />
            </Link>
            <div className=" basis-[85%]">
              <Search />
            </div>
          </div>
          <div className="nav-link w-[40%] text-sm ">
            <ul className="flex justify-center gap-11 ">
              {menu.map((m) => {
                return (
                  <li key={m.id}>
                    <Link className="text-Neutral_90 hover:text-primary_70 font-medium" to={m.path}>
                      {m.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-profile basis-[4%] ">
            <a href="">
              <div className="rounded-[50%] overflow-hidden border-2 border-Neutral_70">
                <img src={Profile} alt="" className="w-[100%]" />
              </div>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar1;