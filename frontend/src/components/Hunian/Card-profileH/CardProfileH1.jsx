import React from 'react';
import profile from '../../../assets/gambar-testimoni/aldi.svg';


function CardProfileH1() {
  return (
    <>
      <div className="flex container">
        <div className="flex flex-col relative mt-24">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center">
            <img
              src={profile}
              className="mt-12 rounded-full w-[150px] h-[150px] z-10"
            />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center z-0">
            <div>
              <h1 className="text-2xl font-bold pt-4">Bevin Stevanius</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfileH1;