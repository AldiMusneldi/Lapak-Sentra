import React from 'react';

const FootMenu = () => {
  return (
    <>
      <div className="foot-menu  basis-[20%] ">
        <div className="foot-title py-2 mb-[1rem] ">
          <h2 className=" font-bold text-2xl mb-2">Lapak Sentra</h2>
          <div className="w-[40%] bg-primary_70 h-1"></div>
        </div>
        <div className="nav-link">
          <ul className="text-sm ">
            <li className="mb-[1rem]">
              <a href="">Hunian</a>
            </li>
            <li className="mb-[1rem]">
              <a href="">Fasilitas Rumah</a>
            </li>
            <li className="mb-[1rem]">
              <a href="">Tentang kami</a>
            </li>
            <li className="mb-[1rem]">
              <a href="">Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FootMenu;
