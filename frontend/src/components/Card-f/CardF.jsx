import React from 'react';

const CardF = (props) => {
  const { fitur } = props;
  return (
    <>
      <div className="card flex flex-col basis-[27%] border justify-center items-center  rounded-[31px]  p-[1rem] text-center">
        <div className="card-img basis-[20%]  flex justify-center ">
          <div className="w-[80%] ">
            <img src={fitur.gambar} alt="" />
          </div>
        </div>
        <div className="card-title my-2">
          <h2 className="text-primary_70 font-bold  text-lg">{fitur.title}</h2>
        </div>
        <div className="card-desk w-[80%]">
          <p>{fitur.deskripsi}</p>
        </div>
      </div>
    </>
  );
};

export default CardF;
