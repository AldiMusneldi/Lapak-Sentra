import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const DetailsAccordion = () => {
  return (
    <>
      <div className="container">
        <div className="ml-24 w-full">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Petunjuk Transfer mBanking
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    Pilih{" "}
                    <span className="font-semibold">
                      m-Transfer {">"} BCA Virtual Account
                    </span>
                  </li>
                  <li>
                    Masukan{" "}
                    <span className="font-semibold">Nomor Virtual Account</span>{" "}
                    <span className="text-red-500">121 0801 2238 3329</span> dan
                    pilih <span className="font-semibold">Send</span>{" "}
                  </li>
                  <li>
                    Periksa infomasi yang tertera dilayar. Pastikan Merchant.{" "}
                    <span className="font-semibold">Total Tagihan</span> sudah
                    benar dan username kamu{" "}
                    <span className="font-semibold">Aldi.Musneldi.</span> Jika
                    benar Pilih <span className="font-semibold">Ya.</span>
                  </li>
                  <li>
                    Masukan PIN m-BCA Anda dan pilih{" "}
                    <span className="font-semibold">OK.</span>
                  </li>
                  <li>
                    Jika muncul notifikasi{" "}
                    <span className="font-semibold">
                      {" "}
                      “Transaksi Gagal. Nominal melebihi limit harian”.
                    </span>{" "}
                    mohon ulangi transaksi menggunakan KlikBCA (iBanking) atau
                    ATM.
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Petunjuk Transfer iBanking
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    Pilih Transfer Dana {">"} Transfer ke BCA Virtual Account
                  </li>
                  <li>
                    Centang Nomor Virtual Account dan masukkan{" "}
                    <span className="text-red-500">121 0801 2238 3329</span> dan
                    pilih Lanjutkan.
                  </li>
                  <li>
                    Periksa informasi yang tertera di layar. Pastikan Merchant
                    adalah Lapak Sentra, Total tagihan sudah benar dan username
                    kamu Aldi Musneldi. Jika benar pilih Lanjutkan.
                  </li>
                  <li>Masukkan respon KeyBCA Anda dan klik Kirim.</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Petunjuk Transfer ATM
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    Pilih Transaksi Lainnya {">"} Transfer {">"} Ke Rek BCA
                    Virtual Account.
                  </li>
                  <li>
                    Masukkan Nomor Virtual Account{" "}
                    <span className="text-red-500">121 0801 2238 3329</span> dan
                    pilih Benar.
                  </li>
                  <li>
                    Periksa informasi yang tertera di layar. Pastikan Merchant
                    adalah Lapak Sentra, Total tagihan sudah benar dan username
                    kamu Aldi Musneldi. Jika benar pilih Ya.
                  </li>
                  <li>Masukkan respon KeyBCA Anda dan klik Kirim.</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex justify-center mt-4 mb-6 ml-44">
          <Link to="">
            <button className="px-4 py-2 bg-primary_70 text-white rounded w-40 h-10">
              OK
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailsAccordion;
