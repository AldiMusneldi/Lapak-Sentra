import React, { useState } from 'react';
import RowRight from '../../assets/icons/row_Right.svg';

import Cards from '../Cards/Cards';
import SemDat from '../../data/DataBaru';
import { NavLink } from 'react-router-dom';

const ContentHome = () => {
  const [katagori, setKatagori] = useState(SemDat);
  function filtered(KatagoriFilter) {
    const filteredData = KatagoriFilter ? SemDat.filter((kat) => kat.katagori === KatagoriFilter) : SemDat;
    setKatagori(filteredData);
  }

  return (
    <>
      <section className="p-[2rem]" id="content">
        <div className="container mx-auto">
          <div className="content-title flex  justify-between items-center mb-[2rem]">
            <div className="title basis-[50%] ">
              <h1 className="font-title text-4xl  text-primary_70 font-semibold">Pilih Kebutuhan Anda</h1>
              <div className="w-[20%] h-[6px] rounded-full bg-secondary_70 my-2"></div>
            </div>
            <div className="lihat-semua  ">
              <div className="justify-center bg-primary_70 flex items-center p-2 text-Neutral_10 font-medium rounded-md">
                <h1>Lihat semua</h1>
                <span className=" mt-1">
                  <img src={RowRight} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="content-menu font-Poppins font-medium text-2xl mb-[1rem]">
            <div className=" ">
              <ul className="menu-cont border-b-2  border-Neutral_30 justify-between flex">
                <li className="border-b-4 border-primary_70  p-2 ">
                  <button onClick={() => filtered()}>Semua Katagori</button>
                </li>
                <li className=" p-2 ">
                  <NavLink onClick={() => filtered('kost')} className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
                    Kost
                  </NavLink>
                </li>
                <li className=" p-2">
                  <NavLink onClick={() => filtered('kontrakan')}>Kontrakan</NavLink>
                </li>
                <li className=" p-2">
                  <NavLink onClick={() => filtered('fasilitas rumah')}>Fasilitas rumah</NavLink>
                </li>
                <li className=" p-2">
                  <NavLink onClick={() => filtered()}>Kerjasama Mitra</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-card font-Poppins flex justify-center gap-4 flex-wrap">
            {katagori.map((kost, index) => {
              return <Cards key={index} kost={kost} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentHome;
