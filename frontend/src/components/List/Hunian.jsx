import React from 'react';

const Hunian = ({ onOpen, favor }) => {
  return (
    <>
      <div className="card-fovorit overflow-hidden border flex rounded-md w-[33%]">
        <div className="container gap-2 basis-[95%] items-center mx-auto flex">
          <div className="img-faforit w-full">
            <img src={favor.gambar} alt="" className="w-full p-2" />
            <div className="rating justify-end w-[90%] mx-auto flex gap-2">
                <span className="text-black text-sm">
                  <i class="fa-regular fa-heart"></i>
                </span>
              <div className="bintang flex text-Neutral_70">
                <span className="text-secondary_70 text-sm">
                  <i class="fa-solid fa-star"></i>
                </span>
                <p className="text-sm">4.5</p>
              </div>
            </div>
            <div className="katagori flex pt-1 gap-2 text-sm mb-[0.5rem]">
              <div className="border border-Neutral_90 basis-[22%] text-center p-1 rounded-lg">
                <p>{favor.katagoriFas}</p>
              </div>
              <div className="border border-Neutral_90 basis-[40%] text-center p-1 rounded-lg">
                <p>{favor.katagori}</p>
              </div>
            </div>
            <div className="card-content basis-[60%]">
              <div className="title text-Neutral_70 mb-2 flex flex-col gap-y-2">
                <h1 className="font-medium text-xl ">{favor.title}</h1>
                <h2 className="font-bold text-lg">{favor.kecamatan}</h2>
                <p className="text-Neutral_30 text-xs">{favor.fasilitas}</p>
              </div>
              <div className="harga flex items-center gap-1 mb-2">
                <h3 className="text-Eror_70 font-medium text-lg">
                  {favor.harga}/
                </h3>
                <span>{favor.satuan}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hunian;
