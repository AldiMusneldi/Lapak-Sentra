import React, { useState } from 'react';

const FasilitasJ = () => {
  const KatagorijenisF = [
    {
      id: 1,
      nama: 'Furnitur',
    },
    {
      id: 2,
      nama: 'Elektronik',
    },
    {
      id: 3,
      nama: 'Kebersihan',
    },
  ];
  const [selectedf, setSelectedf] = useState('');
  const [openf, setOpenf] = useState(false);
  return (
    <div className="w-[15%] ">
      <div className="filter-jenisF font-medium relative">
        <div className="label">
          <label className="text-lg">Jenis Fasilitas</label>
        </div>
        <div className="input text-primary_70 h-50 w-[100%] absolute">
          <div onClick={() => setOpenf(!openf)} className="border bg-slate-50 border-primary_70 w-full p-2 flex items-center justify-between rounded">
            {selectedf ? selectedf : 'All'}
            <span>
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </div>
          <ul className={` mt-2 rounded overflow-y-auto ${openf ? 'max-h-60 bg-slate-50 border border-primary_70' : 'max-h-0'}`}>
            {KatagorijenisF.map((katFas) => {
              return (
                <li
                  key={katFas.id}
                  className="p-2 hover:bg-primary_70 hover:text-Neutral_10"
                  onClick={() => {
                    if (katFas.id !== selectedf) {
                      setSelectedf(katFas.nama);
                    }
                  }}
                >
                  {katFas.nama}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FasilitasJ;
