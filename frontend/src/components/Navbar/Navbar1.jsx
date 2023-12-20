import React, { useEffect } from 'react';
import ReactLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import menu from '../Menu/Menu';
import Search from '../Search/Search';
import MenuProfile from '../Dropdown/MenuProfile';
import { BsCart2 } from 'react-icons/bs';
const Navbar1 = ({ navigate, cartCount }) => {
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
                    <Link className="text-Neutral_90 hover:text-primary_70 font-medium" to={`/${m.path}`} onClick={() => page(`/${m.path}`)}>
                      {m.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-profile basis-[10%] gap-3 flex justify-center items-center ">
            <Link to="/keranjang" className="text-2xl text-Neutral_70 p-1 relative font-bold flex justify-center w-[35%]">
              <BsCart2 />
              {cartCount?.length ? <div className="absolute top-0 right-0 text-xs w-4 h-4 justify-center items-center flex rounded-full bg-red-400 px-1 text-Neutral_10">1</div> : <></>}
            </Link>
            <span className="basis-[40%] z-10">
              <MenuProfile navigate={navigate} />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar1;
