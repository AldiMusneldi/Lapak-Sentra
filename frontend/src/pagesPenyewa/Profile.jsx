import React from "react";
import Navbar1 from "../components/Navbar/Navbar1";
import profile from "../assets/gambar-testimoni/aldi.svg";
import home from "../assets/icons/home.svg";
import love from "../assets/icons/love.svg";
import transaction from "../assets/icons/refresh.svg";
import exit from "../assets/icons/exit.svg";

const Profile = () => {
  return (
    <>
      <div>
        <div>
          <div className="mt-28 pl-12 items-center flex">
            <div className="flex flex-col relative">
              <div className="absolute bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center items-center">
                <img
                  src={profile}
                  className="mt-12 rounded-full w-[150px] h-[150px]"
                />
              </div>
              <div className="mt-32 bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center">
                <div>
                  <h1 className="text-2xl font-bold pt-4">Aldi Musneldi</h1>
                  <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">
                    Lihat Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-[-122px]">
              <div className="ml-4 bg-primary_70 rounded-md w-[900px] h-[60px] flex justify-center items-center">
                <p className="text-[30px] text-white text font-bold">
                  Kos/Kontrakan Saya
                </p>
              </div>
              <div className="">
                <div className=" border-gray-300 ml-4 mt-3">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Hunian
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Kos <br />
                        <img src={profile} alt="" />
                        <br />
                        Mall Paragon Tipe A
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Alamat
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Kost Area Gajah Mada, Hayam Wuruk, Olive Paragon Mall
                        Tipe A, Jakarta Pusat Kota
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Nama Pemilik Kost
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Sepuh Aldi Tua
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        No. Telp/HP
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        +62 852-5652-7939
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Harga Perbulan
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Rp700.000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Lama Sewa
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        3 Bulan
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Total Harga Sewa
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Rp1.950.000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Status Sewa
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Aktif 11/11/2023 - 11/01/2024
                      </td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pl-12">
            <div className="flex items-center">
              <img src={home} />
              <p className="pl-3">Kos/Kontrakan Saya</p>
            </div>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "21%",
              }}
            />
            <div className="mt-4 flex items-center">
              <img src={love} />
              <p className="pl-3">Item Favorit</p>
            </div>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "21%",
              }}
            />
            <div className="mt-4 flex items-center">
              <img src={transaction} />
              <p className="pl-3">Riwayat Transaksi</p>
            </div>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "21%",
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
                width: "21%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
