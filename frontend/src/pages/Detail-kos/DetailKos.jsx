import React, { useState } from 'react';
import kost1 from '../../assets/gambar-kost&kontrakan/kost1.svg';
import dkost1 from '../../assets/detail-kos/dkost1.svg';
import dkost2 from '../../assets/detail-kos/dkost1,1.svg';
import iconWifi from '../../assets/icons/wifi.svg';
import iconCar from '../../assets/icons/car.svg';
import iconTv from '../../assets/icons/tv.svg';
import iconKasur from '../../assets/icons/kasur.svg';
import iconListrik from '../../assets/icons/listrik.svg';
import iconKulkas from '../../assets/icons/kulkas.svg';
import iconKamarmandi from '../../assets/icons/kamarmandi.svg';
import iconMotor from '../../assets/icons/motor.svg';
import iconKartu from '../../assets/icons/kartu.svg';
import iconMasjid from '../../assets/icons/masjid.svg';
import iconStasiun from '../../assets/icons/stasiun.svg';
import iconUniv from '../../assets/icons/univ.svg';
import iconRumahsakit from '../../assets/icons/rumahsakit.svg';
import iconSupermarket from '../../assets/icons/supermarket.svg';
import iconTempatmakan from '../../assets/icons/tempatmakan.svg';
import iconHalte from '../../assets/icons/halte.svg';
import iconDiskon from '../../assets/icons/diskon.svg';
import iconChat from '../../assets/icons/chat.svg';
import { useDisclosure } from '@chakra-ui/react';
import Modalpemilik from '../../components/Modals/Modalpemilik';
function DetailKos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const paket = [
    {
      name: 'Per Bulan',
    },
    {
      name: 'Per 3 Bulan',
    },
    {
      name: 'Per 6 Bulan',
    },
    {
      name: 'Per Tahun',
    },
  ];

  const [pakets, setPakets] = useState('');
  const [states, setStates] = useState({});
  //   const changePakets = (event) => {
  //     setPakets(event.target.value);
  //     setStates(paket.find((ctr) => ctr.name === event.target.value));
  //   };
  const changePakets = (event) => {
    setPakets(event.target.value);

    // Tambahkan pengecekan untuk menetapkan states berdasarkan opsi yang dipilih
    switch (event.target.value) {
      case 'Per Bulan':
        setStates({
          null: '',
          dp: 1080000,
          pelunasan: 3045000,
          penuh: 4125000,
          total: 4125000,
        });
        break;
      case 'Per 3 Bulan':
        setStates({
          null: '',
          dp: 3240000,
          pelunasan: 8835000,
          penuh: 11575000,
          total: 11575000,
        });
        break;
      case 'Per 6 Bulan':
        setStates({
          null: '',
          dp: 6480000,
          pelunasan: 15970000,
          penuh: 22450000,
          total: 22450000,
        });
        break;
      case 'Per Tahun':
        setStates({
          null: '',
          dp: 12960000,
          pelunasan: 31240000,
          penuh: 44200000,
          total: 44200000,
        });
        break;
      default:
        setStates({});
        break;
    }
  };

  return (
    <div>
      <div className="flex">
        <section>
          <img src={kost1} alt="" className="w-[900px] h-[700px] ml-12 pt-6" />
        </section>
        <section>
          <img src={dkost1} alt="" className="w-[390px] h-[290px] ml-[25px] mt-[70px]" />
          <img src={dkost2} alt="" className="w-[390px] h-[290px] ml-[25px]" />
        </section>
      </div>
      <div>
        <div className="flex relative ">
          <h1 className="pl-10  font-bold text-5xl pt-10">Olive Paragon Mall Tipe A</h1>
          <div className=" absolute ">
            <div className="">
              <section className="w-[390px] pl-6 py-5 mt-10 ml-[62rem] shadow-2xl bg-white rounded-md">
                <div className="flex items-center">
                  <img src={iconDiskon} alt="" className="w-[20px] h-[20px]" />
                  <p className="text-red-500 pl-1">Diskon 70rb</p>
                  <p className="pl-3 text-gray-400">
                    <strike>Rp700.000</strike>
                  </p>
                </div>
                <div className="flex items-center">
                  <h1 className="text-3xl">
                    <b>Rp630.000</b>
                  </h1>
                  <p className="pl-2 text-gray-400">(Bulan Pertama)</p>
                </div>
                <div className="pt-4 flex">
                  <input type="date" className="rounded-sm w-[160px] h-[36px] text-lg p-2 border border-black" />
                  <select name="" className="rounded-sm w-[160px] h-[38px] text-lg ml-5 p-1 border border-black" value={pakets} onChange={changePakets}>
                    <option value="" disabled>
                      Per Bulan
                    </option>
                    {paket.map((ctr) => (
                      <option value={ctr.name}>{ctr.name}</option>
                    ))}
                  </select>
                </div>
              </section>
              <section className="w-[390px] mt-[-6px] pl-6 ml-[62rem] shadow-2xl bg-white rounded-md p-3">
                {states && (
                  <>
                    {pakets === 'Per Bulan' && (
                      <>
                        <div className="w-[388px] p-4 mb-3 mt-[-15px] ml-[-24px]">
                          <div className="rounded-md border border-black p-3">
                            <div className="container mt-4">Jika kamu bayar pakai DP :</div>
                            {states.dp && (
                              <div className="container mt-4 flex">
                                Uang Muka (DP) :<div className="pl-28">Rp. {states.dp}</div>
                              </div>
                            )}
                            {states.pelunasan && (
                              <div className="container mt-4 flex">
                                Pelunasan :<div className="pl-40">Rp. {states.pelunasan}</div>
                              </div>
                            )}
                            <span
                              className="mt-2"
                              style={{
                                borderTop: '1px solid grey',
                                display: 'block',
                                width: '100%',
                              }}
                            ></span>
                            <div className="container mt-4">Jika kamu pakai pembayaran penuh :</div>
                            {states.penuh && (
                              <div className="container mt-4 flex">
                                Pembayaran penuh :<div className="pl-24">Rp. {states.penuh}</div>
                              </div>
                            )}
                          </div>
                          <span
                            className="mt-5"
                            style={{
                              borderTop: '1px solid grey',
                              display: 'block',
                              width: '100%',
                            }}
                          ></span>
                          <div className="mt-3">
                            {states.total && (
                              <div className="container mt-4 flex">
                                Total Pembayaran Pertama :<div className="pl-14">Rp. {states.total}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {pakets === 'Per 3 Bulan' && (
                      <>
                        <div className="w-[388px] p-4 mb-3 mt-[-15px] ml-[-24px]">
                          <div className="rounded-md border border-black p-3">
                            <div className="container mt-4">Jika kamu bayar pakai DP :</div>
                            {states.dp && (
                              <div className="container mt-4 flex">
                                Uang Muka (DP) :<div className="pl-28">Rp. {states.dp}</div>
                              </div>
                            )}
                            {states.pelunasan && (
                              <div className="container mt-4 flex">
                                Pelunasan :<div className="pl-40">Rp. {states.pelunasan}</div>
                              </div>
                            )}
                            <span
                              className="mt-2"
                              style={{
                                borderTop: '1px solid grey',
                                display: 'block',
                                width: '100%',
                              }}
                            ></span>
                            <div className="container mt-4">Jika kamu pakai pembayaran penuh :</div>
                            {states.penuh && (
                              <div className="container mt-4 flex">
                                Pembayaran penuh :<div className="pl-[87px]">Rp. {states.penuh}</div>
                              </div>
                            )}
                          </div>
                          <span
                            className="mt-5"
                            style={{
                              borderTop: '1px solid grey',
                              display: 'block',
                              width: '100%',
                            }}
                          ></span>
                          <div className="mt-3">
                            {states.total && (
                              <div className="container mt-4 flex">
                                Total Pembayaran Pertama :<div className="pl-14">Rp. {states.total}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {pakets === 'Per 6 Bulan' && (
                      <>
                        <div className="w-[388px] p-4 mb-3 mt-[-15px] ml-[-24px]">
                          <div className="rounded-md border border-black p-3">
                            <div className="container mt-4">Jika kamu bayar pakai DP :</div>
                            {states.dp && (
                              <div className="container mt-4 flex">
                                Uang Muka (DP) :<div className="pl-28">Rp. {states.dp}</div>
                              </div>
                            )}
                            {states.pelunasan && (
                              <div className="container mt-4 flex">
                                Pelunasan :<div className="pl-[148px]">Rp. {states.pelunasan}</div>
                              </div>
                            )}
                            <span
                              className="mt-2"
                              style={{
                                borderTop: '1px solid grey',
                                display: 'block',
                                width: '100%',
                              }}
                            ></span>
                            <div className="container mt-4">Jika kamu pakai pembayaran penuh :</div>
                            {states.penuh && (
                              <div className="container mt-4 flex">
                                Pembayaran penuh :<div className="pl-[86px]">Rp. {states.penuh}</div>
                              </div>
                            )}
                          </div>
                          <span
                            className="mt-5"
                            style={{
                              borderTop: '1px solid grey',
                              display: 'block',
                              width: '100%',
                            }}
                          ></span>
                          <div className="mt-3">
                            {states.total && (
                              <div className="container mt-4 flex">
                                Total Pembayaran Pertama :<div className="pl-14">Rp. {states.total}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {pakets === 'Per Tahun' && (
                      <>
                        <div className="w-[388px] p-4 mb-3 mt-[-15px] ml-[-24px]">
                          <div className="rounded-md border border-black p-3">
                            <div className="container mt-4">Jika kamu bayar pakai DP :</div>
                            {states.dp && (
                              <div className="container mt-4 flex">
                                Uang Muka (DP) :<div className="pl-[105px]">Rp. {states.dp}</div>
                              </div>
                            )}
                            {states.pelunasan && (
                              <div className="container mt-4 flex">
                                Pelunasan :<div className="pl-[150px]">Rp. {states.pelunasan}</div>
                              </div>
                            )}
                            <span
                              className="mt-2"
                              style={{
                                borderTop: '1px solid grey',
                                display: 'block',
                                width: '100%',
                              }}
                            ></span>
                            <div className="container mt-4">Jika kamu pakai pembayaran penuh :</div>
                            {states.penuh && (
                              <div className="container mt-4 flex">
                                Pembayaran penuh :<div className="pl-[88px]">Rp. {states.penuh}</div>
                              </div>
                            )}
                          </div>
                          <span
                            className="mt-5"
                            style={{
                              borderTop: '1px solid grey',
                              display: 'block',
                              width: '100%',
                            }}
                          ></span>
                          <div className="mt-3">
                            {states.total && (
                              <div className="container mt-4 flex">
                                Total Pembayaran Pertama :<div className="pl-14">Rp. {states.total}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
                <button className="flex border items-center border-black w-[340px] h-[36px] mb-2">
                  <img src={iconChat} alt="" className="ml-24 w-[20px] h-[20px]" />
                  <h1 className="pl-4">Tanya Pemilik</h1>
                </button>
                <button onClick={onOpen} className="flex border items-center w-[340px] h-[36px] bg-primary_70">
                  <h1 className="pl-[126px] text-white">Ajukan Sewa</h1>
                </button>
              </section>
              {/* modal ajukan sewa */}
              <Modalpemilik onClose={onClose} isOpen={isOpen} />
            </div>
          </div>
        </div>
        <div className="pr-10 pl-10 mt-10">
          <div className="pl-5 border border-black rounded-md w-[850px]">
            <p className="mb-2 mt-3">
              Olive Paragon Mall Tipe A adalah kost yang memiliki area strategis. Semua fasilitas sudah lengkap. Kamar mandi di dalam. Termasuk layanan bersih bersih kamar gratis serta sampo dan sabun free refill. Hubungi kami segera untuk
              info kelengkapan layanan kos lainnya.
            </p>
            <ul className="list-disc pl-5 mb-3">
              <li>Kost Putra</li>
              <li>Luas Kamar: 3 m x 3 m</li>
              <li>Kamar mandi dalam</li>
            </ul>
          </div>
          <div className="pl-5 border border-black rounded-md w-[850px] mt-8">
            <h2 className="text-2xl mt-3">Alamat lengkap</h2>
            <p className="mb-3">Kost Area Gajah Mada, Hayam Wuruk, Olive Paragon Mall Tipe A, Jakarta Pusat Kota</p>
          </div>
          <div className="pl-5 border border-black rounded-md w-[850px] mt-8">
            <h2 className="text-2xl pl-10 mb-5 mt-3">Fasilitas</h2>
            <div className="pl-10 flex-wrap flex-col grid grid-cols-4 grid-rows-2">
              <div className="flex items-center">
                <img src={iconWifi} alt="" className="mr-2" />
                <p>Wifi</p>
              </div>
              <div className="flex items-center">
                <img src={iconKasur} alt="" className="mr-2" />
                <p>Kasur</p>
              </div>
              <div className="flex items-center">
                <img src={iconKamarmandi} alt="" className="mr-2" />
                <p>Kamar mandi</p>
              </div>
            </div>
            <div className="pl-10 flex-wrap flex-col grid grid-cols-4 grid-rows-2">
              <div className="flex items-center">
                <img src={iconCar} alt="" className="mr-2" />
                <p>Parkiran Mobil</p>
              </div>
              <div className="flex items-center">
                <img src={iconListrik} alt="" className="mr-2" />
                <p>Listrik</p>
              </div>
              <div className="flex items-center">
                <img src={iconMotor} alt="" className="mr-2" />
                <p>Parkiran motor</p>
              </div>
            </div>
            <div className="pl-10 flex-wrap flex-col grid grid-cols-4 grid-rows-2">
              <div className="flex items-center">
                <img src={iconTv} alt="" className="mr-2" />
                <p>Televisi</p>
              </div>
              <div className="flex items-center">
                <img src={iconKulkas} alt="" className="mr-2" />
                <p>Kulkas</p>
              </div>
              <div className="flex items-center">
                <img src={iconKartu} alt="" className="mr-2" />
                <p>Kartu akses</p>
              </div>
            </div>
          </div>
          <div className="pl-5 border border-black rounded-md w-[850px] mt-8 mb-10">
            <h2 className="text-2xl pl-10 mb-5 mt-3">Tempat terdekat</h2>
            <div className="pl-10 flex-wrap flex-col grid grid-cols-4 grid-rows-2">
              <div className="flex items-center">
                <img src={iconMasjid} alt="" className="mr-2" />
                <p>Masjid</p>
              </div>
              <div className="flex items-center">
                <img src={iconUniv} alt="" className="mr-2" />
                <p>Universitas</p>
              </div>
              <div className="flex items-center">
                <img src={iconSupermarket} alt="" className="mr-2" />
                <p>Supermarket</p>
              </div>
              <div className="flex items-center">
                <img src={iconHalte} alt="" className="mr-2" />
                <p>Halte</p>
              </div>
            </div>
            <div className="pl-10 flex-wrap flex-col grid grid-cols-4 grid-rows-2">
              <div className="flex items-center">
                <img src={iconStasiun} alt="" className="mr-2" />
                <p>Stasiun</p>
              </div>
              <div className="flex items-center">
                <img src={iconRumahsakit} alt="" className="mr-2" />
                <p>Rumah Sakit</p>
              </div>
              <div className="flex items-center">
                <img src={iconTempatmakan} alt="" className="mr-2" />
                <p>Tempat Makan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailKos;
