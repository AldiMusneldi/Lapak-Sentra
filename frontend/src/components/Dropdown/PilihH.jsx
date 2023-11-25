import React from 'react';

const PilihH = () => {
  return (
    <>
      <div className="w-[25%] ">
        <div className="filter-jenis font-medium relative">
          <div className="label">
            <label className="text-lg">Pilih Hunian</label>
          </div>
          <div className="input text-primary_70 h-50 w-[100%] absolute">
            <div className=" bg-slate-50 text-Neutral_10 text-center  gap-2 w-full flex items-center justify-between rounded">
              <div className="basis-[50%] rounded border text-Neutral_70 p-2 border-primary_70">Kost</div>
              <div className="basis-[50%] rounded border p-2 bg-primary_70">Kontrakan</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PilihH;
