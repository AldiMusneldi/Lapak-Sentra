import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import hunian from "../assets/icons/hunian.svg";
import promotion from "../assets/icons/ceklist.svg";
import statistic from "../assets/icons/statistic.svg";
import exit from "../assets/icons/exit.svg";
import logo from "../assets/icons/logo.svg";

const PromosiUMKM = () => {
  return (
    <>
      <div className="flex container ml-24">
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

              <Link to="/umkm/account">
                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">
                  Lihat Profile
                </button>
              </Link>
            </div>
          </div>
          <div className="container mt-6">
            <Link to="/umkm/dashboardumkm">
              <button className="flex items-center">
                <img src={home} />
                <p className="pl-3">Dashboard Pemilik UMKM</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/umkm/registerproduk">
              <button className="mt-4 flex items-center">
                <img src={hunian} />
                <p className="pl-3">Daftarkan Produk</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/umkm/promosi">
              <button className="mt-4 flex items-center">
                <img src={promotion} />
                <p className="pl-3">Fitur Promosi</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/">
              <div className="mt-4 flex items-center">
                <img src={exit} className="w-[35px]" />
                <p className="pl-3">Keluar</p>
              </div>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Dashboard Pemilik UMKM
            </p>
          </div>
          <div className="mt-3 border border-gray-400 rounded-md px-2 py-2 bg-slate-500">
            <h1>Rekomendasi Fitur Promosi Untukmu!</h1>
            <p>
              Jumlah pengunjung tokomu datap ditingkatkan. Tingkatkan Jumlah
              Pengunjung dengan menggunakan 3 fitur ini.
            </p>
            <div className="flex">
              <div className="flex-col">
                <div className="mt-3 border border-gray-400 rounded-md px-2 py-2 bg-white">
                  <h1 className="text-xl font-bold">Promo toko</h1>
                  <p>
                    Rata-rata peningkatan{" "}
                    <span className="text-green-400">
                      Jumlah Pengunjung +52%
                    </span>
                  </p>
                  <Link to="">
                    <button className="px-4 py-2 mt-2 bg-primary_70 text-white rounded">
                      Buat
                    </button>
                  </Link>
                </div>
                <div className="mt-3 border border-gray-400 rounded-md px-2 py-2 bg-white">
                  <h1 className="text-xl font-bold">Flash Sale Toko Kami</h1>
                  <p>
                    Rata-rata peningkatan{" "}
                    <span className="text-green-400">
                      Jumlah Pengunjung +45%
                    </span>
                  </p>
                  <Link to="">
                    <button className="px-4 py-2 mt-2 bg-primary_70 text-white rounded">
                      Buat
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-3 ml-10 border h-[116px] border-gray-400 rounded-md px-2 py-2 bg-white">
                <h1 className="text-xl font-bold">Voucher Toko Kami</h1>
                <p>
                  Rata-rata peningkatan{" "}
                  <span className="text-green-400">Jumlah Pengunjung +33%</span>
                </p>
                <Link to="">
                  <button className="px-4 py-2 mt-2 bg-primary_70 text-white rounded">
                    Buat
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <h1 className="text-2xl my-4 font-bold">
            Tingkatkan Pesanan dengan Promo
          </h1>
          <div>
            <div className="flex">
              <div className="flex-col">
                <div>
                  <h1>Voucher Toko Kami</h1>
                </div>
                <div>Kombo Hemat</div>
                <div>Promo Ongkir</div>
              </div>
              <div className="flex-col">
                <div>
                  <h1>Paket Diskon</h1>
                </div>
                <div>Koin Penjual</div>
              </div>
              <div className="flex-col">
                <div>Promo Toko</div>
                <div>Flash Sale Toko Kami</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromosiUMKM;
