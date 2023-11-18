import React from 'react';
import ReactLogo from '../../assets/logo.svg';

const FootLog = () => {
  return (
    <>
      <div className="foot-logo  basis-[20%] items-center flex justify-center flex-col">
        <a href="/">
          <img src={ReactLogo} alt="" />
        </a>
        <div className="deks-foot text-sm">
          <p>Situs bantu wirausaha lokal promosi produk, cari kost, dan jual beli fasilitas rumah.</p>
        </div>
      </div>
    </>
  );
};

export default FootLog;
