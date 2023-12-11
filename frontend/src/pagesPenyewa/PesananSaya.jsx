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
                              <TbMessages size={iconSize} style={{ color: "#695CFF" }} />
                              <p className="px-2 text-primary_70">Chat Penjual</p>
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
                      <p></p>
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
