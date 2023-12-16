import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Checkbox } from '@chakra-ui/react';
import gambarBarang from '../../assets/gambar-barang/ricecooker2.svg';

function Keranjang() {
  const navigate = useNavigate();
  function Back(b) {
    navigate(b);
  }
  return (
    <>
      <section id="keranjang" className="pt-[10rem] font-worksans text-Neutral_70">
        <div className="container mx-auto my-5">
          {/* kembali */}
          <Link to={`/home`} onClick={() => Back('/home')} className="flex items-center gap-2 text-2xl">
            <span className="">
              <BsArrowLeft />
            </span>
            <h1>Keranjang</h1>
          </Link>
          {/* header */}
          <div className="p-5 rounded-md font-medium bg-primary_70 text-Neutral_10 my-2 ml-5 flex justify-between">
            <div className="basis-[40%]">Produk</div>
            <div className="flex justify-between basis-[60%]">
              <div>Harga Satuan</div>
              <div>Jumlah Beli</div>
              <div>Total Harga</div>
              <div>Aksi</div>
            </div>
          </div>
          {/* body */}
          <div className="rounded-md flex flex-col gap-2 my-2 ">
            <div className="flex-nowrap border flex gap-3 p-5">
              <div className="flex basis-[40%] gap-1">
                <Checkbox />
                <div className=" items-center gap-1 flex">
                  <div className="cek-gambar basis-[20%]">
                    <img src={gambarBarang} alt="" />
                  </div>
                  <div className="title text-sm basis-[70%]">
                    <h1>SHARP RICE COOKER / MAGICCOM KS-N18MG-RD / KSN 18 MG SL / KSN 18MG RD (1,8 LITER) GARANSI RESMI alknsknsknsknskjnkjnskjn lsknclksncslkncs</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-5 basis-[60%] items-center">
                <div className="harga">Rp254.900</div>
                <div className="basis-[12%]  text-center">1</div>
                <div className="total-harga">Rp254.900</div>
                <div className="hapus text-Eror_70">hapus</div>
              </div>
            </div>
          </div>
          {/* footer harga */}
          <div className="rounded-md flex flex-col gap-2 my-2 ">
            <div className="flex border justify-between  p-5">
              <div className="pilih-semua items-center gap-2 flex">
                <Checkbox colorScheme="green" />
                <h2>Pilih semua</h2>
              </div>
              <div className="total flex items-center gap-2">
                <p>Total (0 Produk):</p>
                <h2 className="text-2xl text-Eror_70">Rp 0</h2>
                <button className="p-2 text-Neutral_10 font-medium rounded-md bg-primary_70">Cekout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Keranjang;
