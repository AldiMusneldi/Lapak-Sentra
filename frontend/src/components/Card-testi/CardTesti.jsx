import React from 'react';

const CardTesti = ({ testi }) => {
  return (
    <>
      <div className="card-testi border basis-[30%] h-[400px] rounded-lg">
        <div className=" flex items-center p-5 gap-3">
          <div className="img border basis-[25%] border-Neutral_70 rounded-[50%] overflow-hidden">
            <img src={testi.gambar} alt="" />
          </div>
          <div className="title-name basis-[60%]">
            <h2 className="font-semibold text-base">{testi.nama}</h2>
            <p className="text-sm font-light italic text-Neutral_30">{testi.keterangan}</p>
          </div>
        </div>
        <div className="deskripsi-card p-3 ">
          <p className="leading-7 text-sm">"{testi.deskripsi}"</p>
        </div>
      </div>
    </>
  );
};

export default CardTesti;
