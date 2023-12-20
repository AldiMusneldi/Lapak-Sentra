import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconWifi from '../assets/icons/wifi1.svg';
import iconAC from '../assets/icons/ac1.svg';
import iconTV from '../assets/icons/tv1.svg';
import iconKulkas from '../assets/icons/kulkas1.svg';
import iconKipas from '../assets/icons/kipas1.svg';
import iconMeja from '../assets/icons/meja1.svg';
import iconKursi from '../assets/icons/kursi1.svg';
import iconKompor from '../assets/icons/kompor1.svg';
import iconLemari from '../assets/icons/lemari1.svg';
import iconTidur from '../assets/icons/tempattidur1.svg';
import iconMandi from '../assets/icons/mandi1.svg';
import iconMotor from '../assets/icons/motor1.svg';
import iconMobil from '../assets/icons/mobil1.svg';
import iconListrik from '../assets/icons/listrik1.svg';
import iconMasjid from '../assets/icons/masjid.svg';
import iconStasiun from '../assets/icons/stasiun.svg';
import iconUniv from '../assets/icons/univ.svg';
import iconRumahsakit from '../assets/icons/rumahsakit.svg';
import iconSupermarket from '../assets/icons/supermarket.svg';
import iconTempatmakan from '../assets/icons/tempatmakan.svg';
import iconHalte from '../assets/icons/halte.svg';
import CardProfileH from '../components/Hunian/Card-profileH/CardProfileH';
import SideBarH from '../components/Hunian/SidebarH/SideBarH';
import UploadImage from '../components/UMKM/Upload-image/UploadImage';
import axios from 'axios';

const SewakanKos = () => {
  const navigate = useNavigate();
  const [checkedValuesFacility, setValueFacility] = useState([]);
  const handleChangeFacility = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setValueFacility((pre) => [...pre, value]);
    } else {
      setValueFacility((pre) => {
        return [...pre.filter((facility) => facility !== value)];
      });
    }
  };
  console.log(checkedValuesFacility);

  const [checkedValuesPlace, setValuePlace] = useState([]);
  const handleChangePlace = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setValuePlace((pre) => [...pre, value]);
    } else {
      setValuePlace((pre) => {
        return [...pre.filter((place) => place !== value)];
      });
    }
  };
  console.log(checkedValuesPlace);

  const [values, setValues] = useState({
    name: '',
    price: '',
    type_kost: '',
    category_kost: '',
    address: '',
    land_size: '',
    city: '',
    facility: checkedValuesFacility,
    nearest_place: checkedValuesPlace,
    description: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/v1/kost', values)
      .then(
        (res) => {
          console.log(res);
          navigate('/hunian/dashboardhunian');
        },

        (req) => {
          console.log(req);
        }
      )
      .catch((err) => console.log(err));
    console.log(e);
  };
  return (
    <>
      <div className="flex container ml-24">
        <div>
          <CardProfileH />
          <SideBarH />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">Tambah Kos/Kontrakan </p>
          </div>
          <div className="">
            <div className="border border-gray-300 px-4 py-5 pr-24 mt-3 mb-4">
              <h1 className="mb-6 text-xl font-bold">Tambah Data Hunian</h1>
              <form onSubmit={handleSubmit}>
                <input type="file" name="images" />
                <div className="mb-3">
                  <h1 className="pb-2">Nama Hunian</h1>
                  <input type="text" name="name" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" onChange={(e) => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className="mb-3">
                  <h1 className="pb-2">Alamat Lengkap</h1>
                  <input type="text" name="address" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" onChange={(e) => setValues({ ...values, address: e.target.value })} />
                </div>
                <div className="mb-3">
                  <h1 className="pb-2">Kota</h1>
                  <select id="" className=" border border-black rounded-sm pl-2 h-10 w-full mb-4" name="city" onChange={(e) => setValues({ ...values, city: e.target.value })}>
                    <option value="">Pilih Kota</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Jakarta Barat">Jakarta Barat</option>
                    <option value="Jakarta Utara">Jakarta Utara</option>
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Timur">Jakarta Timur</option>
                  </select>
                </div>
                <div className="mb-3">
                  <h1 className="pb-2">Luas Bangunan</h1>
                  <input type="text" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" name="land_size" onChange={(e) => setValues({ ...values, land_size: e.target.value })} />
                </div>
                <div className="mb-3">
                  {/* ganti dengan dropdown */}
                  <h1 className="pb-2">Tipe</h1>
                  <select id="" className=" border border-black rounded-sm pl-2 h-10 w-full mb-4" name="type_kost" onChange={(e) => setValues({ ...values, type_kost: e.target.value })}>
                    <option value="">Pilih Tipe Hunian</option>
                    <option value="Kost">Kost</option>
                    <option value="Kontrakan">Kontrakan</option>
                  </select>
                </div>
                <div className="mb-3">
                  {/* ganti dengan dropdown */}
                  <h1 className="pb-2">Kategori Kost</h1>
                  <select id="" className=" border border-black rounded-sm pl-2 h-10 w-full mb-4" name="category_kost" onChange={(e) => setValues({ ...values, category_kost: e.target.value })}>
                    <option value="">Pilih Kategori Kost Hunian</option>
                    <option value="Campuran">Campuran</option>
                    <option value="Pria">Pria</option>
                    <option value="wanita">wanita</option>
                  </select>
                </div>
                <div className="mb-3">
                  <h1 className="pb-2">Harga</h1>
                  <input type="text" className="border border-black rounded-sm pl-2 h-10 w-full mb-4" name="price" onChange={(e) => setValues({ ...values, price: e.target.value })} />
                </div>
                <div className="mb-3">
                  <h1 className="pb-2">Deskripsi</h1>
                  <textarea type="text" className="border border-black rounded-sm pl-2 h-28 w-full mb-4" name="description" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                </div>
                <div className="">
                  <h1>Unggah Foto</h1>
                  <div className="flex mt-4">
                    <p className="pl-12">Foto Utama</p>
                    <div className="pl-16">
                      <UploadImage />
                    </div>
                  </div>
                  <div className="flex mt-3">
                    <p className="pl-12">Foto Tambahan</p>
                    <div className="flex pl-10">
                      <UploadImage />
                      <div className="pl-3">
                        <UploadImage />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  <h1>Fasilitas</h1>
                  <div className="mt-10 -ml-12">
                    <div className="flex mb-3">
                      <input type="checkbox" id="wifi" value="wifi " onChange={handleChangeFacility} />
                      <label htmlFor="wifi" className="flex">
                        <img src={iconWifi} className="pl-3" />
                        <p className="pl-3">Wifi</p>
                      </label>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="ac" value={'ac'} onChange={handleChangeFacility} />
                      <label htmlFor="ac" className="flex">
                        <img src={iconAC} className="pl-3" />
                        <p className="pl-3">AC</p>
                      </label>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="tv" value="tv " onChange={handleChangeFacility} />
                      <label htmlFor="tv" className="flex">
                        <img src={iconTV} className="pl-3" />
                        <p className="pl-3">TV</p>
                      </label>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="kulkas" value="kulkas " onChange={handleChangeFacility} />
                      <label htmlFor="kulkas" className="flex">
                        <img src={iconKulkas} className="pl-3" />
                        <p className="pl-3">Kulkas</p>
                      </label>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="" value="kipas " onChange={handleChangeFacility} />
                      <img src={iconKipas} className="pl-3" />
                      <p className="pl-3">Kipas Angin</p>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="" value="meja " onChange={handleChangeFacility} />
                      <img src={iconMeja} className="pl-3" />
                      <p className="pl-3">Meja</p>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="" value="kursi " onChange={handleChangeFacility} />
                      <img src={iconKursi} className="pl-3" />
                      <p className="pl-3">Kursi</p>
                    </div>
                  </div>
                  <div className="mt-10 ml-10">
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="" value="kompor " onChange={handleChangeFacility} />
                      <img src={iconKompor} className="pl-3" />
                      <p className="pl-3">Kompor</p>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="" value="lemari " onChange={handleChangeFacility} />
                      <img src={iconLemari} className="pl-3" />
                      <p className="pl-3">Lemari</p>
                    </div>
                    <div className="flex mb-4">
                      <input type="checkbox" name="" id="" value="tidur " onChange={handleChangeFacility} />
                      <img src={iconTidur} className="pl-3" />
                      <p className="pl-3">Tempat Tidur</p>
                    </div>
                    <div className="flex mb-4">
                      <input type="checkbox" name="" id="" value="mandi " onChange={handleChangeFacility} />
                      <img src={iconMandi} className="pl-3" />
                      <p className="pl-3">Kamar Mandi</p>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="" value="motor " onChange={handleChangeFacility} />
                      <img src={iconMotor} className="pl-3" />
                      <p className="pl-3">Parkiran Motor</p>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="" value="mobil " onChange={handleChangeFacility} />
                      <img src={iconMobil} className="pl-3" />
                      <p className="pl-3">Parkiran Mobil</p>
                    </div>
                    <div className="flex mb-3">
                      <input type="checkbox" name="" id="" value="listrik " onChange={handleChangeFacility} />
                      <img src={iconListrik} className="pl-3" />
                      <p className="pl-3">Listrik</p>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <h1>Tempat Terdekat</h1>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="masjid" value="masjid" onChange={handleChangePlace} />
                    <label htmlFor="masjid" className="flex">
                      <img src={iconMasjid} className="pl-3" />
                      <p className="pl-3">Masjid</p>
                    </label>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="univ" value="univ" onChange={handleChangePlace} />
                    <label htmlFor="univ" className="flex">
                      <img src={iconUniv} className="pl-3" />
                      <p className="pl-3">Universitas</p>
                    </label>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="halte" value="halte" onChange={handleChangePlace} />
                    <label htmlFor="halte" className="flex">
                      <img src={iconHalte} className="pl-3" />
                      <p className="pl-3">Halte</p>
                    </label>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="statiun" value="statiun" onChange={handleChangePlace} />
                    <label htmlFor="statiun" className="flex">
                      <img src={iconStasiun} className="pl-3" />
                      <p className="pl-3">Stasiun</p>
                    </label>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="supermarket" value="supermarket" onChange={handleChangePlace} />
                    <label htmlFor="supermarket" className="flex">
                      <img src={iconSupermarket} className="pl-3" />
                      <p className="pl-3">Supermarket</p>
                    </label>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="rumahsakit" value="rumahsakit" onChange={handleChangePlace} />
                    <label htmlFor="rumahsakit" className="flex">
                      <img src={iconRumahsakit} className="pl-3" />
                      <p className="pl-3">Rumah Sakit</p>
                    </label>
                  </div>
                  <div className="flex mb-3">
                    <input type="checkbox" name="" id="tempatmakan" value="tempatmakan" onChange={handleChangePlace} />
                    <label htmlFor="tempatmakan" className="flex">
                      <img src={iconTempatmakan} className="pl-3" />
                      <p className="pl-3">Tempat Makan</p>
                    </label>
                  </div>
                </div>
                {/* <Link to="/hunian/dashboardhunian"> */}
                <button className="px-4 py-2 bg-primary_70 text-white rounded">Daftarkan Kost Anda sekarang</button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SewakanKos;
