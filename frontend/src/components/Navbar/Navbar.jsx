import React, { useEffect } from 'react';
import ReactLogo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import menu from '../Menu/Menu';

const Navbar = () => {

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

  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <>
      <header className="navbar">
        <nav className="container mx-auto flex justify-between p-1 items-center font-Poppins">
          <div className="nav-title scale-100 w-[10%]">
            <Link to="/">
              <img src={ReactLogo} alt="React Logo" />
            </Link>
          </div>
          <div className="nav-link w-[40%] text-sm">
            <ul className="flex justify-center gap-10 ">
              {menu.map((m) => (
                <li key={m.id}>
                  <Link className="text-Neutral_90 hover:text-primary_70 font-medium"
                    onClick={() => goToPage(`/${m.path}`)}
                    style={{ cursor: 'pointer' }}>
                    {m.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-profile w-[15%] flex justify-between items-center">
            <div className=" rounded-md border-2 bg-neutral-50 border-primary_70 py-[10px] px-[17px]">
              <Link to="/login">
                <span className="font-semibold text-Neutral_70">Masuk</span>
              </Link>
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
