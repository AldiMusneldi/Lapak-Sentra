import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ kost }) => {
  // const [clik, setClick] = useState();
  // function Clicksan(haledek) {
  //   setClick(clik);
  // }
  return (
    <>
      <div className="card-contents rounded-[9px] border bg-white border-Neutral_30 basis-[24%]">
        <Link>
          <div className="card-img w-full">
            <img src={kost.gambar} alt="" className="w-[100%]" />
          </div>
          <div className="card-content">
            <div className="rating justify-end mt-1 w-[90%] mx-auto flex gap-2">
              <div className="hati">
                <span className="">
                  <i class="fa-regular fa-heart"></i>
                  {/* <i class="fa-solid fa-heart"></i> */}
                </span>
              </div>
              {/* <div className="bintang flex text-Neutral_70">
                <span className="text-secondary_70">
                  <i class="fa-solid fa-star"></i>
                </span>
                <p>4.5</p>
              </div> */}
            </div>
            <div className="katagori flex pt-1 px-2 gap-2 text-sm mb-[0.5rem]">
              <div className="border border-Neutral_90 basis-[22%] text-center p-1 rounded-lg">
                <p>{kost.katagoriFas}</p>
              </div>
              <div className="border border-Neutral_90 basis-[40%] text-center p-1 rounded-lg">
                <p>{kost.katagori}</p>
              </div>
            </div>
            <div className="title px-2 text-Neutral_70 mb-2 flex flex-col gap-y-2">
              <h1 className="font-medium ">{kost.title}</h1>
              <h2 className="font-bold">{kost.kecamatan}</h2>
              <p className="text-Neutral_30 text-xs">{kost.fasilitas}</p>
            </div>
            <div className="harga px-2 flex items-center gap-1 mb-2">
              <h3 className="text-Eror_70 font-medium text-lg">{kost.harga}/</h3>
              <span>{kost.satuan}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
