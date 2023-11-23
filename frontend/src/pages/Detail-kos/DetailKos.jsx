import React from 'react';
import '../../pages/Detail-kos/detailkos.css';
import kost1 from '../../assets/fasilitas/sample1.svg';
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


function DetailKos() {
  return (
    <div>
        <div className="flex">
          <img src={kost1} alt="" className="w-box" />
        </div>
        <div>
            <div>
                <h1 className="pl-10 font-bold text-5xl pt-10">Olive Paragon Mall Tipe A</h1>
            </div>
            <div className="pr-10 pl-10 mt-10">
                <div className="pl-5 border border-black rounded-md w-border">
                    <p className="mb-2 mt-3">Olive Paragon Mall Tipe A adalah kost yang memiliki area strategis. Semua fasilitas sudah lengkap. Kamar mandi di dalam. Termasuk layanan bersih bersih kamar gratis serta sampo dan sabun free refill. Hubungi kami segera untuk info kelengkapan layanan kos lainnya. </p>
                    <ul className="list-disc pl-5 mb-3">
                        <li>Kost Putra</li>
                        <li>Luas Kamar: 3 m x 3 m</li>
                        <li>Kamar mandi dalam</li>
                    </ul>
                </div>
                <div className="pl-5 border border-black rounded-md w-border mt-8">
                    <h2 className="text-2xl mt-3">Alamat lengkap</h2>
                    <p className="mb-3">Kost Area Gajah Mada, Hayam Wuruk, Olive Paragon Mall Tipe A, Jakarta Pusat Kota</p>
                </div>
                <div className="pl-5 border border-black rounded-md w-border mt-8">
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
                <div className="pl-5 border border-black rounded-md w-border mt-8 mb-10">
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
