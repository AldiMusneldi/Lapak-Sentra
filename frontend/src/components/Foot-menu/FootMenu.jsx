import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../Menu/Menu';

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
            {menu.map((m) => {
              return (
                <>
                  <li key={m.id} className="mb-[1rem]">
                    <Link to={m.path}>{m.text}</Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FootMenu;
