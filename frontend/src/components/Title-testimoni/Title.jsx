import React from 'react';

const Title = () => {
  return (
    <>
      <div className="title basis-[40%] flex flex-col justify-center items-center">
        <h1 className="font-title text-4xl  text-primary_70 font-semibold">Kata Pemilik Usaha</h1>
        <div className="w-[30%] h-[6px] rounded-full bg-secondary_70 my-2"></div>
      </div>
      <div className="deskripsi w-[20%]">
        <p className="text-center">Kata pemilik kost/kontrakan dan pedagang UMKM</p>
      </div>
    </>
  );
};

export default Title;
