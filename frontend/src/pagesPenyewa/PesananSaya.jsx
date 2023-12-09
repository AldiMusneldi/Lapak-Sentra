import React from "react";
import ricecooker from "../assets/gambar-barang/ricecooker2.svg";
import CardProfile from "../componentsUsers/Card-profile/CardProfile";
import Sidebar from "../componentsUsers/Sidebar/Sidebar";

const PesananSaya = () => {
  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfile />
          <Sidebar />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Pesanan Saya
            </p>
          </div>
          <div className="mb-6">
            <div className="border border-gray-300 mt-3 rounded-md">
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

export default PesananSaya;
