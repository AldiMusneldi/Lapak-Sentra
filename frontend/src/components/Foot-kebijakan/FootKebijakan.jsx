import React from 'react';

const FootKebijakan = () => {
  return (
    <>
      <div className="foot-kebijakan basis-[20%]">
        <div className="foot-title py-2 mb-[1rem] ">
          <h2 className=" font-bold text-2xl mb-2">Kebijakan</h2>
          <div className="w-[40%] bg-primary_70 h-1"></div>
        </div>
        <div className="nav-link">
          <ul className="text-sm">
            <li className="mb-[1rem]">
              <a href="">Kebijakan Privasi</a>
            </li>
            <li className="mb-[1rem]">
              <a href="">Syarat dan Ketentuan Umum</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FootKebijakan;
