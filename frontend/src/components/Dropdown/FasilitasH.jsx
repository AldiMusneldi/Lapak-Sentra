import React, { useState } from 'react';

const FasilitasH = () => {
  const KatagoriHarga = [
    {
      id: 1,
      nama: 'Harga Tertinggi',
    },
    {
      id: 2,
      nama: 'Harga Terendah',
    },
  ];

  const [selectedh, setSelectedh] = useState('');
  const [openh, setOpenh] = useState(false);
  return (
    <>
      <div className="w-[20%] ">
        <div className="filter-jenis font-medium relative">
          <div className="label">
            <label className="text-lg">Urutkan Berdasarkan</label>
          </div>
          <div className="input text-primary_70 h-50 w-[100%] absolute">
            <div onClick={() => setOpenh(!openh)} className="border bg-slate-50 border-primary_70 w-full p-2 flex items-center justify-between rounded">
              {selectedh ? selectedh : 'Rekomendasi'}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul className={` mt-2 rounded overflow-y-auto ${openh ? 'max-h-60 bg-slate-50 border border-primary_70' : 'max-h-0'}`}>
              {KatagoriHarga.map((katHar) => {
                return (
                  <li
                    key={katHar.id}
                    className="p-2 hover:bg-primary_70 hover:text-Neutral_10"
                    onClick={() => {
                      if (katHar.id !== selectedh) {
                        setSelectedh(katHar.nama);
                      }
                    }}
                  >
                    {katHar.nama}
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

export default FasilitasH;
