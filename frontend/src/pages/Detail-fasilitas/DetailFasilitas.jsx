import React, { useState } from 'react';
import gambarutama from '../../assets/gambar-barang/ricecooker1.svg';
import gambar2 from '../../assets/gambar-barang/ricecooker2.svg';
import gambar3 from '../../assets/gambar-barang/ricecooker3.svg';
import gambar4 from '../../assets/gambar-barang/ricecooker4.svg';
import { Link } from 'react-router-dom';

function DetailFasilitas() {
  const kota = [
    {
      id: 1,
      nama: 'Jakarta Pusat',
    },
    {
      id: 2,
      nama: 'Jakarta Barat',
    },
    {
      id: 3,
      nama: 'Jakarta Utara',
    },
    {
      id: 4,
      nama: 'Jakarta Selatan',
    },
    {
      id: 5,
      nama: 'Jakarta Timur',
    },
  ];
  const [kot, setKot] = useState('');
  const [angka, setAngka] = useState(0);
  const TambahAngka = () => {
    if (angka < 10) {
      setAngka(angka + 1);
    } else {
      alert('mencapai Batas maksimal');
    }
  };
  const KurangAngka = () => {
    if (angka > 0) {
      setAngka(angka - 1);
    } else {
      alert('tidak bisa kurang');
    }
  };

  const select = (e) => {
    setKot(e.target.value);
  };
  return (
    <>
      <section id="detail-kos" className="pt-[10rem] font-worksans text-Neutral_70">
        <div className="container mx-auto">
          <div className="border rounded-md">
            <div className="flex items-center justify-center p-2 gap-3">
              <div className="detail-img basis-[50%]">
                <img src={gambarutama} alt="" />
                <div className="flex justify-between">
                  <span>
                    <img src={gambar2} alt="" />
                  </span>
                  <span>
                    <img src={gambar3} alt="" />
                  </span>
                  <span>
                    <img src={gambar4} alt="" />
                  </span>
                </div>
              </div>
              <div className="detail-title basis-[50%]">
                <div className="title">
                  <h1 className="text-2xl text-Neutral_70 font-semibold">SHARP RICE COOKER / MAGIC COM KS-N18MG -RD / KSN 18 MG SL / KSN 18MG RD (1,8 LITER) GARANSI RESMI</h1>
                </div>
                <div className="flex p-2 gap-2">
                  <div className="rating flex gap-2 items-center">
                    <p>4.7</p>
                    <div className="rating-bintang flex gap-1">
                      <span className="text-secondary_70">
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span className="text-secondary_70">
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span className="text-secondary_70">
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span className="text-secondary_70">
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span className="text-secondary_70">
                        <i class="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div className="text-primary_70">|</div>
                  <div className="penilaian flex gap-2 items-center">
                    <span className="text-Neutral_90 font-semibold">84</span>
                    <p>Penilaian</p>
                  </div>
                  <div className="text-primary_70">|</div>
                  <div className="terjual flex gap-2 items-center">
                    <span className="text-Neutral_90 font-semibold">4</span>
                    <p>Terjual</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-primary_70 rounded-md">
                    <div className="card-title p-6 text-Neutral_10">
                      <div className="flex items-center gap-2">
                        <div className="harga">
                          <strike>Rp264.900</strike>
                        </div>
                        <div className="harga-diskon">
                          <h1 className="text-4xl text-secondary_70">Rp254.900</h1>
                        </div>
                        <div className="diskon basis-[10%] p-[2px] justify-center gap-2 rounded-md flex bg-Eror_70">
                          <span>4%</span>
                          <span>off</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">
                          <i class="fa-regular fa-circle-check"></i>
                        </span>
                        <p className="text-secondary_70 font-light">Lapak Sentra Garansi 100% Ori</p>
                      </div>
                      <div className="font-medium">
                        <p>Garansi uang kembali jika produk tidak ori</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <div className=" flex flex-col gap-5">
                      <div className=" flex items-center justify-between gap-6 w-[50%] ">
                        <li className="list-none">Hemat</li>
                        <div className="p-2 text-Neutral_10 font-medium rounded-sm text-sm bg-primary_70">
                          <span>Kombo Hemat</span>
                        </div>
                      </div>
                      <div className=" flex items-center justify-between gap-6 w-[50%]  ">
                        <li className="list-none">Protection</li>
                        <div className="">
                          <span className="text-Neutral_30">Proteksi Elektronik</span>
                        </div>
                      </div>
                      <div className=" flex items-center justify-between gap-6 w-[80%] ">
                        <li className="list-none">Pengiriman</li>
                        <div className="flex gap-4 items-center text-Neutral_30">
                          <span className=" scale-x-[-1] text-3xl">
                            <i class="fa-solid fa-truck"></i>
                          </span>
                          <div className="text-sm">
                            <h2>pengiriman ke</h2>
                            <h2>ongkos kirim</h2>
                          </div>
                          <div className="flex flex-col">
                            <select name="" className="rounded-sm w-[160px] text-sm  border" value={kot} onChange={select}>
                              <option value="" disabled>
                                Pilih Kota
                              </option>
                              {kota.map((ctr) => (
                                <option value={ctr.nama}>{ctr.nama}</option>
                              ))}
                            </select>
                            <p>0</p>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center justify-between gap-6 w-[90%]  ">
                        <li className="list-none basis-[40%]">Variasi</li>
                        <div className="flex gap-2">
                          <div className="merah basis-[40%] border flex p-1 rounded-md text-sm">
                            <div className="basis-[15%]">
                              <img src={gambar2} alt="" />
                            </div>
                            <h3>KSN-18 MG Merah</h3>
                          </div>
                          <div className="hitam basis-[40%] border flex p-1 rounded-md text-sm">
                            <div className="basis-[15%]">
                              <img src={gambar3} alt="" />
                            </div>
                            <h3>KSN-18 MG Hitam</h3>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center  justify-between gap-6 w-[60%]  ">
                        <li className="list-none  basis-[25%]">Kuantitas</li>
                        <div className="flex gap-2 ">
                          <div className=" border flex p-1 rounded-md text-sm">
                            <button className="min p-2 border" onClick={KurangAngka}>
                              -
                            </button>
                            <div className="angka p-2 border">{angka}</div>
                            <button className="max p-2 border" onClick={TambahAngka}>
                              +
                            </button>
                          </div>
                          <div className="sisa  p-2 text-sm">
                            <h3>Tersisa 13 buah</h3>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center  justify-between gap-6 w-[60%]  ">
                        <li className="list-none ">Metode Pembayaran</li>
                        <div className="flex gap-2 items-center text-primary_70">
                          <p>Pilih</p>
                          <Link to="">
                            <i class="fa-solid fa-chevron-right"></i>
                          </Link>
                        </div>
                      </div>
                      <div className=" flex items-center  justify-between gap-6 w-[60%]  ">
                        <div className="p-2 flex items-center gap-2 border border-primary_70 text-primary_70 rounded-md">
                          <span>
                            <i class="fa-solid fa-cart-plus"></i>
                          </span>
                          <p>Masukan Keranjang</p>
                        </div>
                        <div className="p-2 flex items-center bg-primary_70 text-Neutral_10 rounded-md">
                          <p>Buat Pesanan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-md">
            <div className="chat-pemilik">
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailFasilitas;
