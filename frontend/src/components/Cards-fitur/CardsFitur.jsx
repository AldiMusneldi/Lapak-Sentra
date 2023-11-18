import React from 'react';

import CardF from '../Card-f/CardF';
import data from '../../data/Data';

const CardsFitur = () => {
  const fitur = data;
  return (
    <>
      <section className="p-[2rem] " id="fitur">
        <div className="container mx-auto font-worksans font-medium text-Neutral_70 ">
          <div className="fitur-card flex p-[1rem] gap-9 w-[90%] mx-auto justify-center">
            {fitur.map((data) => {
              return <CardF fitur={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsFitur;
