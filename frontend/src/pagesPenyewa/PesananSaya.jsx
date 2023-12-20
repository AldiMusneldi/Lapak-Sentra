import React from "react";
import { Link } from "react-router-dom";
import ricecooker from "../assets/gambar-barang/ricecooker2.svg";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { TbMessages } from "react-icons/tb";
import CardProfile1 from "../components/Users/Card-profile/CardProfile1";
import Sidebar from "../components/Users/Sidebar/Sidebar";

const PesananSaya = () => {
  const iconSize = 30;

  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfile1 />
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
              <div className="mb-3">
                <Tabs position="relative" variant="unstyled">
                  <div className="flex justify-center font-semibold">
                    <TabList>
                      <Tab style={{ fontSize: "21px" }}>Belum Dibayar</Tab>
                      <Tab style={{ fontSize: "21px" }}>Dikirim</Tab>
                      <Tab style={{ fontSize: "21px" }}>Dibatalkan</Tab>
                      <Tab style={{ fontSize: "21px" }}>Dibayar</Tab>
                    </TabList>
                  </div>
                  <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="#695cff"
                    borderRadius="1px"
                  />
                  <div className="flex justify-center">
                    <hr
                      style={{
                        borderTop: "1px solid grey",
                        display: "block",
                        width: "60%",
                      }}
                    />
                  </div>
                  <TabPanels>
                    <TabPanel>
                      <div className="border border-gray-400 rounded-md">
                        <div className="flex justify-between items-center">
                          <div className="flex">
                            <h1 className="pr-4 px-2">Megah Jaya Elektronik</h1>
                            <div className="flex">
                              <TbMessages
                                size={iconSize}
                                style={{ color: "#695CFF" }}
                              />
                              <p className="px-2 text-primary_70">
                                Chat Penjual
                              </p>
                            </div>
                          </div>
                          <p className="text-red-400 px-2">Belum Bayar</p>
                        </div>
                        <hr
                          className="pb-2"
                          style={{
                            borderTop: "1px solid grey",
                            display: "block",
                            width: "100%",
                          }}
                        />
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <img
                              src={ricecooker}
                              className="w-[125px] h-[125px] px-2"
                            />
                            <p className="px-2">
                              SHARP RICE COOKER / MAGICCOM KS-N18MG-RD / KSN 18
                              MG SL / KSN 18MG RD (1,8 LITER) GARANSI RESMI
                              <p className="flex">
                                Variasi : <span>Merah</span>
                              </p>
                              <p>1x</p>
                            </p>
                          </div>
                          <p className="text-red-400 px-2">Rp254.900</p>
                        </div>
                        <hr
                          className=""
                          style={{
                            borderTop: "1px solid grey",
                            display: "block",
                            width: "100%",
                          }}
                        />
                        <div>
                          <div className="flex justify-end">
                            <p className="flex items-center">
                              Jumlah Harus Dibayar:{" "}
                              <span className="px-2 text-2xl text-red-600">
                                Rp318.790
                              </span>
                            </p>
                          </div>
                          <div className="flex px-2 py-2 mb-4">
                            <div className="text-[13px] flex items-center">
                              <p>
                                Bayar Sebelum 08-12-2023 22:17 dengan Bank BCA
                              </p>
                            </div>
                            <div className="flex justify-end ml-auto">
                              <Link to="">
                                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">
                                  Bayar Sekarang
                                </button>
                              </Link>
                              <Link to="">
                                <button className="ml-4 px-4 py-2 border border-gray-400 rounded">
                                  Hubungi Penjual
                                </button>
                              </Link>
                              <Link to="">
                                <select
                                  name=""
                                  id=""
                                  className="ml-4 py-2 border border-gray-400 rounded"
                                >
                                  <option value="">Lainnya</option>
                                  <option value="">Batalkan Pesanan</option>
                                  <option value="">Ubah Pembayaran</option>
                                </select>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <p></p>
                    </TabPanel>
                    <TabPanel>
                      <p></p>
                    </TabPanel>
                    <TabPanel>
                      <div>
                        <p className="px-3 py-2 text-lg">Detail Pembayaran</p>
                        <div className="border border-black rounded-md">
                          <div className="px-2 border border-black rounded-md">
                            <div className="flex">
                              <p className="font-bold">
                                Nama Pembeli : <span className="font-normal">Aldi Musneldi</span>{" "}
                              </p>
                              <p className="flex justify-end ml-auto font-bold">
                                Nama Penjual : <span className="font-normal">Megah Jaya Elektronik</span>
                              </p>
                            </div>
                            <p className="font-bold">
                              Alamat Pembeli :{" "}
                              <span className="font-normal">
                                Jl.Mangga Besar, Pondok Mangga, Jakarta Timur,
                                DKI JAKARTA, INDONESIA
                              </span>{" "}
                            </p>
                            <p className="font-bold">
                              No. Handphone Pembeli : <span className="font-normal">6285151515151</span>{" "}
                            </p>
                          </div>
                          <div className="flex px-2">
                            <div>
                              <p>No. Pesanan</p>
                              <p>120333AKJW</p>
                            </div>
                            <div className="px-20">
                              <p>Waktu Pembayaran</p>
                              <p>20/11/23</p>
                            </div>
                            <div>
                              <p>Metode Pembayaran</p>
                              <p>Transfer Bank BCA</p>
                            </div>
                            <div className="px-24">
                              <p>Jasa Kirim</p>
                              <p>LS Yes</p>
                            </div>
                          </div>
                          <div className="font-bold px-2 pt-8">
                            <p>Rincian Pesanan (1 Produk)</p>
                          </div>
                          <div className="flex ">
                            <div className="px-2">
                              <p>No</p>
                            </div>
                            <div className="px-8">
                              <p>Produk</p>
                            </div>
                            <div className="px-10">
                              <p>Variasi</p>
                            </div>
                            <div className="px-20">
                              <p>Harga Barang</p>
                            </div>
                            <div className="">
                              <p>Kuantitas</p>
                            </div>
                            <div className="px-16">
                              <p>Subtotal</p>
                            </div>
                          </div>
                          <hr
                            className=""
                            style={{
                              borderTop: "1px solid grey",
                              display: "block",
                              width: "100%",
                            }}
                          />
                          <div className="flex text-gray-400">
                            <div className="px-2">
                              <p>1.</p>
                            </div>
                            <div className="px-10">
                              <p>Rice Cooker</p>
                            </div>
                            <div className="">
                              <p>KSN-18 MG Merah</p>
                            </div>
                            <div className="px-8">
                              <p>Rp254.900</p>
                            </div>
                            <div className="px-24">
                              <p>1</p>
                            </div>
                            <div>
                              <p>Rp254.900</p>
                            </div>
                          </div>
                          <hr
                            className=""
                            style={{
                              borderTop: "1px solid grey",
                              display: "block",
                              width: "100%",
                            }}
                          />
                          <div className="mb-8"></div>
                          <hr
                            className=""
                            style={{
                              borderTop: "1px solid grey",
                              display: "block",
                              width: "100%",
                            }}
                          />
                          <div className="flex justify-end text-2xl font-bold">
                            <h1 className="px-[84px]">Subtotal</h1>
                            <h1 className="px-4">Rp254.900</h1>
                          </div>
                          <div className="flex justify-end text-2xl font-bold">
                            <h1 className="px-8">Total Kuantitas</h1>
                            <h1 className="px-4">1 Barang</h1>
                          </div>
                          <div className="flex justify-end py-4 px-5">
                            <div className="flex border border-gray-500 rounded-md text-lg">
                              <div className="px-2 pr-24 py-2">
                                <p>Subtotal Barang</p>
                                <p>Total Proteksi Barang</p>
                                <p>Total Ongkos Kirim </p>
                                <p>Biaya Layanan</p>
                                <p>Total Penanganan</p>
                                <p>Total Pembayaran</p>
                              </div>
                              <div className="flex-col px-6 py-2">
                                <p>Rp254.900</p>
                                <p>Rp18.000</p>
                                <p>Rp16.000</p>
                                <p>Rp1000</p>
                                <p>Rp28.890</p>
                                <p className="text-2xl text-red-500">Rp318.790</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PesananSaya;
