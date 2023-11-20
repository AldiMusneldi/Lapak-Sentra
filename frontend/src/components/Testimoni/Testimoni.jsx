import React from 'react';
import Title from '../Title-testimoni/Title';
import CardTesti from '../Card-testi/CardTesti';
import DataTesti from '../../data/DataTesti';

const Testimoni = () => {
  return (
    <>
      <section className="p-[2rem] mb-[2rem]" id="testimoni">
        <div className="container mx-auto">
          <div className="content-title flex flex-col justify-center items-center gap-2 mb-[5rem]">
            <Title />
          </div>
          <div className="content-card font-Poppins text-Neutral_70">
            <div className="flex justify-center gap-10 ">
              {DataTesti.map((testi, index) => {
                return <CardTesti key={index} testi={testi} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
