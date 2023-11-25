import React from 'react';
import AnimateHero from '../../assets/animasi/animasi-hero.svg';
import Search from '../Search/Search';

const Hero = () => {
  return (
    <>
      <section className="pt-[10rem] font-worksans" id="hero">
        <div className="container mx-auto flex items-center ">
          <div className="hero_left flex flex-col  basis-[50%]">
            <div className="left_title mb-[18px] ">
              <h1 className="font-title text-4xl text-primary_70 font-semibold">Lapak Sentra</h1>
              <div className="w-[15%] h-[6px] rounded-full bg-secondary_70 my-2"></div>
            </div>
            <div className="left_desk mb-[18px]">
              <h2 className="font-title text-4xl text-Neutral_70 font-semibold mb-[18px]">Sewa Nyaman, Hidup Tenang</h2>
              <p className=" leading-7 w-[65%]">Bersama kami anda akan merasakan kemudahan dalam mencari kos/kontrakan serta menjangkau berbagai produk fasilitas rumah yang anda butuhkan disekitar anda.</p>
            </div>
            <div className="left_search flex w-[80%] justify-between items-center ">
              <div className="">
                <h2 className="text-2xl font-medium">Cari sesuatu?</h2>
              </div>
              <div className=" basis-[70%]">
                <Search />
              </div>
            </div>
          </div>
          <div className="hero_right flex justify-center  basis-[50%]">
            <div className="basis-[80%] ">
              <img src={AnimateHero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
