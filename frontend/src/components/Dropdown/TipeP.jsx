import React, { useState } from 'react';

const TipeP = () => {
  const TipePenghuni = [
    {
      id: 1,
      nama: 'Campur',
    },
    {
      id: 2,
      nama: 'Putra',
    },
    {
      id: 3,
      nama: 'Putri',
    },
  ];

  const [selectedt, setSelectedt] = useState('');
  const [opent, setOpent] = useState(false);

  return (
    <>
      <div className="w-[20%] ">
        <div className="filter-jenis font-medium relative">
          <div className="label">
            <label className="text-lg">Tipe Penghuni</label>
          </div>
          <div className="input text-primary_70 h-50 w-[100%] absolute">
            <div onClick={() => setOpent(!opent)} className="border bg-slate-50 border-primary_70 w-full p-2 flex items-center justify-between rounded">
              {selectedt ? selectedt : 'All'}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul className={` mt-2 rounded overflow-y-auto ${opent ? 'max-h-60 bg-slate-50 border border-primary_70' : 'max-h-0'}`}>
              {TipePenghuni.map((tipe) => {
                return (
                  <li
                    key={tipe.id}
                    className="p-2 hover:bg-primary_70 hover:text-Neutral_10"
                    onClick={() => {
                      if (tipe.id !== selectedt) {
                        setSelectedt(tipe.nama);
                      }
                    }}
                  >
                    {tipe.nama}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipeP;
