import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import love from "../assets/icons/love.svg";
import transaction from "../assets/icons/refresh.svg";
import exit from "../assets/icons/exit.svg";
import ricecooker from "../assets/gambar-barang/ricecooker2.svg";

const RiwayatTransaksi = () => {
  return (
    <>
      <div className="pl-12 items-center flex">
        <div className="flex flex-col relative mb-10 mt-24">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center items-center">
            <img
              src={profile}
              className="mt-12 rounded-full w-[150px] h-[150px] absolute"
            />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center">
            <div>
              <h1 className="text-2xl font-bold pt-4">Aldi Musneldi</h1>
              <Link to="/user/acount">
                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">
                  Lihat Profile
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/kossaya">
              <button className="flex items-center">
                <img src={home} />
                <p className="pl-3">Kos/Kontrakan Saya</p>
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
            <Link to="/itemfavorit">
              <button className="mt-4 flex items-center">
                <img src={love} />
                <p className="pl-3">Item Favorit</p>
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
            <Link to="/riwayat">
              <button className="mt-4 flex items-center">
                <img src={transaction} />
                <p className="pl-3">Riwayat Transaksi</p>
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
            <div className="mt-4 flex items-center">
              <img src={exit} className="w-[35px]" />
              <p className="pl-3">Keluar</p>
            </div>
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
        <div className="mb-[106px]">
          <div className="ml-4 bg-primary_70 rounded-md w-[900px] h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Riwayat Transaksi
            </p>
          </div>
          <div className="mb-6">
            <div className="border border-gray-300 ml-4 mt-3 rounded-md">
              <div className="text-2xl ml-8">Detail Transaksi</div>
              <div className="mb-3">
                <tbody>
                  <tr>
                    <td className="border-t border-b border-gray-300 pl-8 pr-4 py-2">
                      No.
                    </td>
                    <td className="border-t border-b border-gray-300 py-2">
                      Produk
                    </td>
                    <td className="border-t border-b border-gray-300 pr-[168px] py-2">
                      Variasi
                    </td>
                    <td className="border-t border-b border-gray-300 pl-8 pr-12 py-2">
                      Harga Barang
                    </td>
                    <td className="border-t border-b border-gray-300 pl-6 pr-24 py-2">
                      Kuantitas
                    </td>
                    <td className="border-t border-b border-gray-300 pr-10 py-2">
                      Subtotal
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-8 py-2">1</td>
                    <td className="py-2">Rice Cooker</td>
                    <td className="py-2">KSN-18 MG Merah</td>
                    <td className="pl-8 py-2">Rp254.900</td>
                    <td className="border-b border-gray-300 pl-6 py-2">1</td>
                    <td className="border-b border-gray-300 py-2">Rp254.900</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2"></td>
                    <td className="border-b py-2">
                      <img src={ricecooker} alt="" />
                    </td>
                    <td className="border-b py-2"></td>
                    <td className="border-b py-2"></td>
                    <td className="border-b border-gray-300 py-2">
                      Subtotal Barang <br />
                      Total Proteksi Barang <br />
                      Total Ongkos Kirim <br />
                      Biaya Layanan <br />
                      Total Penanganan <br />
                      <hr
                        className="mt-2"
                        style={{
                          borderTop: "1px solid grey",
                          display: "block",
                          width: "100%",
                        }}
                      />
                      Total Pembayaran
                    </td>
                    <td className="border-b border-gray-300 py-2">
                      Rp254.900 <br />
                      Rp18.000 <br />
                      Rp16.000 <br />
                      Rp1000 <br />
                      Rp28.890 <br />
                      <hr
                        className="mt-2"
                        style={{
                          borderTop: "1px solid grey",
                          display: "block",
                          width: "100%",
                        }}
                      />
                      Rp318.790
                    </td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiwayatTransaksi;
