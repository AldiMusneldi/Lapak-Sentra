import React from 'react';
import ReactLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import menu from '../Menu/Menu';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="container mx-auto flex justify-between p-1 items-center font-Poppins">
          <div className="nav-title scale-100  w-[10%]">
            <Link to="/">
              <img src={ReactLogo} alt="React Logo" />
            </Link>
          </div>
          <div className="nav-link w-[40%] text-sm">
            <ul className="flex justify-between ">
              {menu.map((m) => {
                return (
                  <>
                    <li key={m.id}>
                      <Link to={m.path}>{m.text}</Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="nav-profile w-[15%] flex justify-between items-center">
            <div className=" rounded-md border-2 border-primary_70 py-[10px] px-[17px]">
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
