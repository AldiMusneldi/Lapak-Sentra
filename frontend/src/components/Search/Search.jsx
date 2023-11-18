import React from 'react';

const Search = () => {
  return (
    <>
      <a href="">
        <div className="search font-medium p-2 flex justify-between shadow-lg border  rounded-[16px]">
          <span className=" text-3xl flex items-center">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <span className=" basis-[50%] items-center flex">
            <h3>Kost/kontrakan/fasilitas</h3>
          </span>
          <div className="p-[10px] basis-[30%] text-center rounded-[10px] bg-primary_70 text-Neutral_10">
            <h2>Cari</h2>
          </div>
        </div>
      </a>
    </>
  );
};

export default Search;
