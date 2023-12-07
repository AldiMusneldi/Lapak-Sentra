import React from 'react';
import styled from 'styled-components';
import AnimateAboutUs from '../../assets/animasi/animasi-about.svg';
import BgTentangkami from '../../assets/animasi/bg-tentangkami.svg';

function TentangKami() {
  const BgAbout = styled.div`
    position: relative;
    background: url(${BgTentangkami}) center/cover no-repeat;
    height: 300px;

    h1 {
      position: relative;
      z-index: 1;
      font-size: 50px;
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 300px;
      background-color: #695cff;
      opacity: 0.4;
      z-index: -9;
    }
  `;

  const P = styled.p`
    width: 40rem;
  `;
  return (
    <>
      <section className="pt-[6rem]" id="tentang-kami">
        <BgAbout>
          <h1 className="text-center py-24 font-title text-white font-semibold">Tentang Kami</h1>
        </BgAbout>
        <div className="flex">
          <div className="w-cols p-6 my-8 ml-20 flex flex-col rounded-md mb-20">
            <h1 className="font-title text-4xl text-primary_70 font-semibold">Tentang Platform kami</h1>
            <div className="w-[15%] h-[6px] rounded-full bg-secondary_70 my-2"></div>
            <P className="2 mb-4">Platform “Pencarian Lapak Sentra” ini adalah solusi kreatif untuk pemilik kosan atau kontrakan untuk mengelola dan memasarkan properti mereka, serta pedagang UMKM lokal dalam mempromosikan dagangannya.</P>
            <P className="2 mb-20">
              Maka dari itu platform “Lapak Sentra” ini memberikan fitur” yg menarik seperti pembelian fasilitas rumah, sehingga penyewa kost atau kontrakan bisa dengan mudah membeli fasilitas rumah yg diperlukan secara online melalui
              platform ini.
            </P>
          </div>
          <div className="my-20 pl-44">
            <img src={AnimateAboutUs} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TentangKami;
