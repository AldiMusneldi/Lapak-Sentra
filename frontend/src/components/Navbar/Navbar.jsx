import React, { useState, useEffect } from 'react';
import ReactLogo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import menu from '../Menu/Menu';
import { useDisclosure } from '@chakra-ui/react';
import Role from '../Role/Role';
import Role1 from '../Role/Role1';

const Navbar = ({ navigate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [role1Open, setRole1Open] = useState(false);

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

  const goToPage = (path) => {
    navigate(path);
  };

  const openRole1 = () => {
    setRole1Open(true);
  };

  const closeRole1 = () => {
    setRole1Open(false);
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
                  <Link to={`/${m.path}`} onClick={() => goToPage(`/${m.path}`)} className="text-Neutral_90 hover:text-primary_70 font-medium" style={{ cursor: 'pointer' }}>
                    {m.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-profile w-[15%] flex justify-between items-center">
            <div className=" rounded-md border-2  border-primary_70 py-[10px] px-[17px]">
              <NavLink onClick={onOpen}>
                <span className="font-semibold text-primary_70">Masuk</span>
              </NavLink>
            </div>
            <div className="rounded-md bg-primary_70 border-2 border-primary_70 py-[10px] px-[17px]">
              <NavLink onClick={openRole1}>
                <span className="font-semibold text-Neutral_10">Daftar</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
      <Role isOpen={isOpen} onClose={onClose} />
      <Role1 isOpen={role1Open} onClose={closeRole1} />
    </>
  );
};

export default Navbar;
