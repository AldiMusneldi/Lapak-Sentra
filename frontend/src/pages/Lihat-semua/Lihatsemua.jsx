import React from 'react';
import { NavLink } from 'react-router-dom';
// import Cards from '../../components/Cards/Cards';
import SemuaData from '../../data/SemuaData';
import CardSemua from '../../components/Cards/CardSemua';
function Lihatsemua({ katagoris, setKatagoris }) {
  function filtered(KatagoriFilter) {
    const filteredData = KatagoriFilter ? SemuaData.filter((kat) => kat.katagori === KatagoriFilter) : SemuaData;
    setKatagoris(filteredData);
  }
  return (
    <>
      <section className="pt-[10rem] mb-[2rem]" id="lihatsemua">
        <div className="container mx-auto">
          <div className="content-title ">
            <div className="title basis-[50%] ">
              <h1 className="font-title text-4xl  text-primary_70 font-semibold">Pilih Kebutuhan Anda</h1>
              <div className="w-[15%] h-[6px] rounded-full bg-secondary_70 my-2"></div>
            </div>
            <div className="content-menu font-Poppins font-medium text-2xl mb-[1rem]">
              <div className=" ">
                <ul className="menu-cont border-b-2 border-Neutral_30 justify-between flex">
                  <li className="border-b-4 border-primary_70  p-2 ">
                    <button onClick={() => filtered()}>Semua Katagori</button>
                  </li>
                  <li className=" p-2 ">
                    <NavLink onClick={() => filtered('kost')}>Kost</NavLink>
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
              {katagoris.map((kost, index) => {
                return <CardSemua kost={kost} index={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lihatsemua;
