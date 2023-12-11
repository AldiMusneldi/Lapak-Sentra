import React, { useEffect } from 'react';
import ReactLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import menu from '../Menu/Menu';
import Search from '../Search/Search';
import MenuProfile from '../Dropdown/MenuProfile';

const Navbar2 = ({ navigate }) => {
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

      const page = (path) => {
        navigate(path);
      };

  return (
    <>
      <header className="navbar">
        <nav className="container mx-auto flex justify-between p-1 items-center font-Poppins">
          <div className="nav-title scale-100 flex basis-[35%] items-center gap-5">
            <Link to="/home">
              <img src={ReactLogo} alt="React Logo" />
            </Link>
            {/* <div className=" basis-[85%]">
              <Search />
            </div> */}
          </div>
          <div className="nav-link w-[40%] text-sm ">
            {/* <ul className="flex justify-center gap-11 ">
              {menu.map((m) => {
                return (
                  <li key={m.id}>
                    <Link className="text-Neutral_90 hover:text-primary_70 font-medium" to={`/${m.path}`} onClick={() => page(`/${m.path}`)}>
                      {m.text}
                    </Link>
                  </li>
                );
              })}
            </ul> */}
          </div>
          <div className="nav-profile basis-[10%] flex justify-center items-center ">
            {/* <Link className="text-xl font-bold flex justify-center basis-[50%]">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link> */}
            <span className="basis-[40%] z-10">
              <MenuProfile navigate={navigate} />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar2;