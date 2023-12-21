import React from 'react';

const Total = () => {
  return (
    <>
      <div className="pl-6 container pt-[10rem] relative ml-[84px] ">
        <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
          <p className="text-[30px] text-white text font-bold">Pembayaran</p>
        </div>
        <hr
          className="mt-10"
          style={{
            borderTop: '1px solid grey',
            display: 'block',
            width: '100%',
          }}
        />
        <div className="flex px-10 text-xl mb-2 py-4">
          <h1 className="font-semibold">Total Pembayaran</h1>
          <h1 className="ml-auto text-red-500 font-semibold">Rp 318.790</h1>
        </div>
        <hr
          className=""
          style={{
            borderTop: '1px solid grey',
            display: 'block',
            width: '100%',
          }}
        />
        <div className="flex px-10 text-xl mb-2 py-4">
          <h1 className="font-semibold">Bayar Dalam</h1>
          <div className="flex flex-col ml-auto">
            <h1 className="text-red-500 font-semibold">23 jam 59 menit 39 detik</h1>
            <p className="text-gray-400 text-sm">Jatuh tempo 09 Des 2023, 23.00</p>
          </div>
        </div>
        <hr
          className="mb-2"
          style={{
            borderTop: '1px solid grey',
            display: 'block',
            width: '100%',
          }}
        />
      </div>
    </>
  );
};

export default Total;
