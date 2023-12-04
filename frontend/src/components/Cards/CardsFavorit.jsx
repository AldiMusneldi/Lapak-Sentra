import React from 'react';

const CardsFavorit = ({ onOpen, favor }) => {
  return (
    <>
      <div className="card-fovorit overflow-hidden border flex rounded-md">
        <div className="container gap-2 p-5 basis-[95%] items-center mx-auto flex">
          <div className="img-faforit basis-[55%]">
            <img src={favor.gambar} alt="" className="w-full" />
          </div>
          <div className="card-content basis-[60%]">
            <div className="flex">
              <div className="katagori flex pt-1 px-2 gap-2 text-sm mb-[0.5rem]">
                <div className="border border-Neutral_90 basis-[22%] text-center p-1 rounded-lg">
                  <p>{favor.katagoriFas}</p>
                </div>
                <div className="border border-Neutral_90 basis-[40%] text-center p-1 rounded-lg">
                  <p>{favor.katagori}</p>
                </div>
              </div>
              <div className="rating justify-end mt-1 w-[90%] mx-auto flex gap-2">
                <div className="hati">
                  <span className="text-Eror_70">
                    <i class="fa-solid fa-heart"></i>
                  </span>
                </div>
                <div className="bintang flex text-Neutral_70">
                  <span className="text-secondary_70">
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>4.5</p>
                </div>
              </div>
            </div>
            <div className="title px-2 text-Neutral_70 mb-2 flex flex-col gap-y-2">
              <h1 className="font-medium ">{favor.title}</h1>
              <h2 className="font-bold">{favor.kecamatan}</h2>
              <p className="text-Neutral_30 text-xs">{favor.fasilitas}</p>
            </div>
            <div className="harga px-2 flex items-center gap-1 mb-2">
              <h3 className="text-Eror_70 font-medium text-lg">{favor.harga}/</h3>
              <span>{favor.satuan}</span>
            </div>
            <div onClick={onOpen} className="border cursor-pointer p-[5px] text-center rounded-md bg-primary_70">
              <span>
                <h1 className=" text-white">Ajukan Sewa</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="halo basis-[5%] bg-Eror_70 flex justify-center items-center">
          <span className="text-2xl text-Neutral_10">
            <i class="fa-regular fa-trash-can"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default CardsFavorit;
