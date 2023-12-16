import React from 'react';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import CardProfileU from '../components/UMKM/Card-profileU/CardProfileU';
import SidebarU from '../components/UMKM/SidebarU/SidebarU';
import { TbTrendingUp } from 'react-icons/tb';
import voucher from '../assets/gambar-promosi/ticket-01.svg';
import bag from '../assets/gambar-promosi/shopping-bag-02.svg';
import truck from '../assets/gambar-promosi/truck-02.svg';
import bag1 from '../assets/gambar-promosi/shopping-bag-01.svg';
import coin from '../assets/gambar-promosi/currency-dollar-circle.svg';
import sale from '../assets/gambar-promosi/sale-04.svg';
import store from '../assets/gambar-promosi/building-02.svg';
import like from '../assets/gambar-promosi/like.svg';
import quenue from '../assets/gambar-promosi/Add_To_Queue.svg';
import add from '../assets/gambar-promosi/List_Add.svg';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { SlArrowRight } from "react-icons/sl";

const PromosiUMKM = () => {
  const iconSize = 30;
  const iconSize1 = 17;

  const { isOpen, onToggle, onClose } = useDisclosure();

  const {
    isOpen: isOpenVoucher,
    onToggle: onToggleVoucher,
    onClose: onCloseVoucher,
  } = useDisclosure();

  const {
    isOpen: isOpenFlashSale,
    onToggle: onToggleFlashSale,
    onClose: onCloseFlashSale,
  } = useDisclosure();

  const {
    isOpen: isOpenPaketDiskon,
    onToggle: onTogglePaketDiskon,
    onClose: onClosePaketDiskon,
  } = useDisclosure();

  const {
    isOpen: isOpenVoucherToko,
    onToggle: onToggleVoucherToko,
    onClose: onCloseVoucherToko,
  } = useDisclosure();

  const {
    isOpen: isOpenKombo,
    onToggle: onToggleKombo,
    onClose: onCloseKombo,
  } = useDisclosure();

  const {
    isOpen: isOpenOngkir,
    onToggle: onToggleOngkir,
    onClose: onCloseOngkir,
  } = useDisclosure();

  const {
    isOpen: isOpenKoin,
    onToggle: onToggleKoin,
    onClose: onCloseKoin,
  } = useDisclosure();

  const {
    isOpen: isOpenToko,
    onToggle: onToggleToko,
    onClose: onCloseToko,
  } = useDisclosure();

  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfileU />
          <SidebarU />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Dashboard Pemilik UMKM
            </p>
          </div>
          <div className="mt-3 border border-gray-400 rounded-md px-2 py-2 pb-8 mb-5">
            <div className="flex items-center">
              <img src={like} alt="" />
              <div className="flex flex-col px-6">
                <h1 className="text-2xl font-semibold">
                  Rekomendasi Fitur Promosi Untukmu!
                </h1>
                <p className="text-[15px]">
                  Jumlah pengunjung tokomu datap ditingkatkan. Tingkatkan Jumlah
                  Pengunjung dengan menggunakan 3 fitur ini.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-col">
                <div className="mt-3 border border-gray-400 rounded-md px-2 py-2 mx-3 bg-white">
                  <h1 className="text-xl font-bold">Promo toko</h1>
                  <p className="flex">
                    Rata-rata peningkatan{" "}
                    <span className="text-green-400 flex ml-2">
                      Jumlah Pengunjung +52% <TbTrendingUp size={iconSize} />
                    </span>
                  </p>
                  <Link to="">
                    <button className="px-4 py-2 mt-2 bg-primary_70 text-white rounded">
                      Buat
                    </button>
                  </Link>
                </div>
                <div className="mt-3 border border-gray-400 rounded-md px-2 py-2 mx-3 bg-white">
                  <h1 className="text-xl font-bold">Flash Sale Toko Kami</h1>
                  <p className="flex">
                    Rata-rata peningkatan
                    <span className="text-green-400 flex ml-2">
                      Jumlah Pengunjung +45% <TbTrendingUp size={iconSize} />
                    </span>
                  </p>
                  <Link to="">
                    <button className="px-4 py-2 mt-2 bg-primary_70 text-white rounded">
                      Buat
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-3 mx-2 border h-[124px] border-gray-400 rounded-md px-2 py-2 bg-white">
                <h1 className="text-xl font-bold">Voucher Toko Kami</h1>
                <p className="flex">
                  Rata-rata peningkatan
                  <span className="text-green-400 flex ml-2">
                    Jumlah Pengunjung +33% <TbTrendingUp size={iconSize} />
                  </span>
                </p>
                <Link to="">
                  <button className="px-4 py-2 mt-2 bg-primary_70 text-white rounded">
                    Buat
                  </button>
                </Link>
              </div>
            </div>
            <h1 className="text-2xl my-4 font-bold">
              Tingkatkan Pesanan dengan Promo
            </h1>
            <div>
              <div className="flex">
                <div className="flex-col">
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white mx-2 my-2 w-[263px]">
                    <div className="flex items-center">
                      <img src={voucher} alt="" />
                      <div className="flex flex-col ">
                        <h1 className="text-[14px] px-2 font-bold">
                          Voucher Toko Kami
                        </h1>
                        <p className="text-[12px] px-2">
                          Berikan Voucher diskon untuk Pembeli dan tingkatkan
                          pesanan
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button
                          size={iconSize1}
                          onClick={onToggleVoucherToko}
                          bg={"white"}
                        >
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpenVoucherToko}
                          onClose={onCloseVoucherToko}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white flex mx-2 my-2 w-[263px]">
                    <div className="flex">
                      <img src={bag} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[14px] px-2 font-bold" >
                          Kombo Hemat
                        </h1>
                        <p className="text-[12px] px-2" >
                          Jual lebih banyak produk dengan diskon Kombo hemat
                          atau hadiah
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button size={iconSize1} onClick={onToggleKombo} bg={"white"}>
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpenKombo}
                          onClose={onCloseKombo}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white flex mx-2 my-2 w-[263px]">
                    <div className="flex">
                      <img src={truck} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[14px] px-2 font-bold">
                          Promo Ongkir
                        </h1>
                        <p className="text-[12px] px-2">
                          Atur diskon ongkir toko ditanggung penjual untuk
                          menarik Pembeli
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button size={iconSize1} onClick={onToggleOngkir} bg={"white"}>
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpenOngkir}
                          onClose={onCloseOngkir}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white flex mx-2 my-2 w-[263px]">
                    <div className="flex">
                      <img src={bag1} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[14px] px-2 font-bold">
                          Paket Diskon
                        </h1>
                        <p className="text-[12px] px-2">
                          Berikan Voucher diskon untuk Pembeli & Tingkatkan
                          pesanan
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button size={iconSize1} onClick={onToggle} bg={"white"}>
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpen}
                          onClose={onClose}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white flex mx-2 my-2 w-[263px]">
                    <div className="flex">
                      <img src={coin} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[14px] px-2 font-bold">
                          Koin Penjual
                        </h1>
                        <p className="text-[12px] px-2">
                          Isi Saldo Koin Penjual sebagai hadiah mengajak
                          Pembeli mengikuti kegiatan toko
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button size={iconSize1} onClick={onToggleKoin} bg={"white"}>
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpenKoin}
                          onClose={onCloseKoin}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white mx-2 my-2 w-[263px]">
                    <div className="flex">
                      <img src={sale} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[14px] px-2 font-bold">
                          Promo Toko
                        </h1>
                        <p className="text-[12px] px-2">
                          Atur diskon produk dan tingkatkan penjualan tokomu dengan cepat
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button size={iconSize1} onClick={onToggleToko} bg={"white"}>
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpenToko}
                          onClose={onCloseToko}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white mx-2 my-2 w-[263px]">
                    <div className="flex">
                      <img src={store} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[14px] px-2 font-bold">
                          Flash Sale Toko Kami
                        </h1>
                        <p className="text-[12px] px-2">
                          Tingkatkan Penjualan dengan memberikan diskon
                          dalam waktu terbatas di tokomu
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button size={iconSize1} onClick={onToggleFlashSale} bg={"white"}>
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpenFlashSale}
                          onClose={onCloseFlashSale}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl my-4 font-bold">
                Tingkatkan Kunjungan ke Toko
              </h1>
              <div className="flex">
                <div className="flex-col">
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white mx-2 my-2 w-[360px]">
                    <div className="flex items-center">
                      <img src={add} alt="" />
                      <div className="flex flex-col ">
                        <h1 className="text-[14px] font-bold px-2">
                          Iklan Lapak Sentra
                        </h1>
                        <p className="text-[12px] px-2">
                          Tingkatkan Penjualanmu di Lapak Sentra menggunakan
                          Iklan
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button size={iconSize1} onClick={onToggleVoucher} bg={"white"}>
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpenVoucher}
                          onClose={onCloseVoucher}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="border border-gray-400 rounded-md px-2 py-2 bg-white flex mx-2 my-2 w-[360px]">
                    <div className="flex items-center">
                      <img src={quenue} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[14px] font-bold px-2">
                          Produk Pilihan Toko
                        </h1>
                        <p className="text-[12px] px-2">
                          Tingkatkan kunjungan produk tertentu dengan
                          menampilkannya dihalaman produk
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button
                          size={iconSize1}
                          onClick={onTogglePaketDiskon}
                          bg={"white"}
                        >
                          <SlArrowRight />
                        </Button>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={isOpenPaketDiskon}
                          onClose={onClosePaketDiskon}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <p></p>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Konfirmasi
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Apakah kamu yakin ingin menerapkan promo ini?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button variant="outline">Cancel</Button>
                                <Button colorScheme="red">Apply</Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromosiUMKM;
