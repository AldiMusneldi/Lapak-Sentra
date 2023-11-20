import React from 'react';
import menu from '../Menu/Menu';
import { Link } from 'react-router-dom';

const FootMenu = () => {
  const dataMenu = menu;
  return (
    <>
      <div className="foot-menu  basis-[20%] ">
        <div className="foot-title py-2 mb-[1rem] ">
          <h2 className=" font-bold text-2xl mb-2">Lapak Sentra</h2>
          <div className="w-[40%] bg-primary_70 h-1"></div>
        </div>
        <div className="nav-link">
          <ul className="text-sm ">
            {dataMenu.map((dataM) => {
              return (
                <li key={dataM.id} className="mb-[1rem]">
                  <Link className=" hover:text-primary_70" to={dataM.path}>
                    {dataM.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FootMenu;
