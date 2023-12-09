import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import TentangKami from './pages/Tentang-kami/TentangKami';
import HubungiKami from './pages/Hubungi-kami/HubungiKami';
import FasilitasRumah from './pages/Fasilitas-rumah/FasilitasRumah';
import Hunian from './pages/Hunian/Hunian';
import SemDat from './data/DataBaru';
import Lihatsemua from './pages/Lihat-semua/Lihatsemua';
import Login from './pages/Login/Login';
import UserLogin from './PagesValidation/Login/UserLogin';
import UserRegister from './PagesValidation/Register/UserRegister';
// import SemuaData from './data/SemuaData';
import DetailKos from './pages/Detail-kos/DetailKos';
import Layout1 from './layout/Layout1';
import Layout2 from './layout/Layout2';
import KosSaya from './pagesPenyewa/KosSaya';
import Profile from './pagesPenyewa/Profil';
import EditProfile from './pagesPenyewa/EditProfile';
import PesananSaya from './pagesPenyewa/PesananSaya';
import DetailFasilitas from './pages/Detail-fasilitas/DetailFasilitas';
import ItemFavorit from './pagesPenyewa/ItemFavorit';
import ProfileHunian from './dashboardPemilikKos/ProfileHunian';
import EditHunian from './dashboardPemilikKos/EditHunian';
import DashboardHunian from './dashboardPemilikKos/DashboardHunian';
import DashboardHunianEdit from './dashboardPemilikKos/DashboardHunianEdit';
import SewakanKos from './dashboardPemilikKos/SewakanKos';
import PromosiHunian from './dashboardPemilikKos/PromosiHunian';
import DaftarPemilik from './dashboardPemilikKos/DaftarPemilik';
import ProfileUMKM from './dashboardUMKM/ProfileUMKM';
import EditUMKM from './dashboardUMKM/EditUMKM';
import DashboardUMKM from './dashboardUMKM/DashboardUMKM';
import DashboardUmkmEdit from './dashboardUMKM/DashboardUmkmEdit';
import RegisterProduk from './dashboardUMKM/RegisterProduk';
import PromosiUMKM from './dashboardUMKM/PromosiUMKM';
import HunianLogin from './PagesValidation/Login/HunianLogin';

function App() {
  const [katagori, setKatagori] = useState(SemDat);
  // const [katagoris, setKatagoris] = useState(SemuaData);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home katagori={katagori} setKatagori={setKatagori} />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout1>
            <Home katagori={katagori} setKatagori={setKatagori} />
          </Layout1>
        }
      />
      <Route
        path="/hunian"
        element={
          <Layout1>
            <Hunian />
          </Layout1>
        }
      />
      <Route
        path="/fasilitas-rumah"
        element={
          <Layout1>
            <FasilitasRumah />
          </Layout1>
        }
      />
      <Route
        path="/tentang-kami"
        element={
          <Layout1>
            <TentangKami />
          </Layout1>
        }
      />
      <Route
        path="/hubungi-kami"
        element={
          <Layout1>
            <HubungiKami />
          </Layout1>
        }
      />
      <Route
        path="/lihat-semua"
        element={
          <Layout1>
            <Lihatsemua />
          </Layout1>
        }
      />
      <Route
        path="/detailkos"
        element={
          <Layout1>
            <DetailKos />
          </Layout1>
        }
      />
      <Route
        path="/detailfasilitas"
        element={
          <Layout1>
            <DetailFasilitas />
          </Layout1>
        }
      />
      <Route
        path="/user/account"
        element={
          <Layout1>
            <Profile />
          </Layout1>
        }
      />
      <Route
        path="/user/account/edit"
        element={
          <Layout1>
            <EditProfile />
          </Layout1>
        }
      />
        <Route
          path="/user/kos"
          element={
            <Layout1>
              <KosSaya />
            </Layout1>
          }
        />
        <Route
          path="/user/item"
          element={
            <Layout1>
              <ItemFavorit />
            </Layout1>
          }
        />
        <Route
          path="/user/pesanan"
          element={
            <Layout1>
              <PesananSaya />
            </Layout1>
          }
        />
      <Route
        path="/hunian/account"
        element={
          <Layout2>
            <ProfileHunian />
          </Layout2>
        }
      />
      <Route
        path="/hunian/account/edit"
        element={
          <Layout2>
            <EditHunian />
          </Layout2>
        }
      />
      <Route
        path="/hunian/dashboardhunian"
        element={
          <Layout2>
            <DashboardHunian />
          </Layout2>
        }
      />
      <Route
        path="/hunian/dashboardhunian/edit"
        element={
          <Layout2>
            <DashboardHunianEdit />
          </Layout2>
        }
      />
      <Route
        path="/hunian/registerhunian"
        element={
          <Layout2>
            <SewakanKos />
          </Layout2>
        }
      />
      <Route
        path="/hunian/promosi"
        element={
          <Layout2>
            <PromosiHunian />
          </Layout2>
        }
      />
      <Route
        path="/umkm/account"
        element={
          <Layout2>
            <ProfileUMKM />
          </Layout2>
        }
      />
      <Route
        path="/umkm/account/edit"
        element={
          <Layout2>
            <EditUMKM />
          </Layout2>
        }
      />
      <Route
        path="/umkm/dashboardumkm"
        element={
          <Layout2>
            <DashboardUMKM />
          </Layout2>
        }
      />
      <Route
        path="/umkm/dashboardumkm/edit"
        element={
          <Layout2>
            <DashboardUmkmEdit />
          </Layout2>
        }
      />
      <Route
        path="/umkm/registerproduk"
        element={
          <Layout2>
            <RegisterProduk />
          </Layout2>
        }
      />
      <Route
        path="/umkm/promosi"
        element={
          <Layout2>
            <PromosiUMKM />
          </Layout2>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/masuk/penyewa" element={<UserLogin />} />
      <Route path="/masuk/pemilik" element={<HunianLogin />} />
      <Route path="/register/pemilik" element={<DaftarPemilik />} />
      <Route path="/daftar/penyewa" element={<UserRegister />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
