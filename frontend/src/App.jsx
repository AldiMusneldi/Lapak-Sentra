import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import TentangKami from "./pages/Tentang-kami/TentangKami";
import HubungiKami from "./pages/Hubungi-kami/HubungiKami";
import FasilitasRumah from "./pages/Fasilitas-rumah/FasilitasRumah";
import Hunian from "./pages/Hunian/Hunian";
import SemDat from "./data/DataBaru";
import Lihatsemua from "./pages/Lihat-semua/Lihatsemua";
import Login from "./pages/Login/Login";
import Tenant from "./components/Tenant/Tenant";
import Register from "./components/Tenant/Register";
// import SemuaData from './data/SemuaData';
import DetailKos from "./pages/Detail-kos/DetailKos";
import Layout1 from "./layout/Layout1";
import KosSaya from "./pagesPenyewa/KosSaya";
import LihatProfile from "./pagesPenyewa/LihatProfil";
import EditProfile from "./pagesPenyewa/EditProfile";
import RiwayatTransaksi from "./pagesPenyewa/RiwayatTransaksi";
import DetailFasilitas from "./pages/Detail-fasilitas/DetailFasilitas";
import ItemFavorit from "./pagesPenyewa/ItemFavorit";
import ProfilPemilik from "./dashboardPemilikKos/ProfilPemilik";
import EditPemilik from "./dashboardPemilikKos/EditPemilik";
import DashboardHunian from "./dashboardPemilikKos/DashboardHunian";
import SewakanKos from "./dashboardPemilikKos/SewakanKos";
import PemilikHunian from "./dashboardPemilikKos/PemilikHunian";
import DaftarPemilik from "./dashboardPemilikKos/DaftarPemilik";
import ProfileUMKM from "./dashboardUMKM/ProfileUMKM";
import EditUMKM from "./dashboardUMKM/EditUMKM";
import DashboardUMKM from "./dashboardUMKM/DashboardUMKM";
import DashboardUmkmEdit from "./dashboardUMKM/DashboardUmkmEdit";
import RegisterProduk from "./dashboardUMKM/RegisterProduk";

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
        path="/kossaya"
        element={
          <Layout1>
            <KosSaya />
          </Layout1>
        }
      />
      <Route
        path="/itemfavorit"
        element={
          <Layout1>
            <ItemFavorit />
          </Layout1>
        }
      />
      <Route
        path="/riwayat"
        element={
          <Layout1>
            <RiwayatTransaksi />
          </Layout1>
        }
      />
      <Route
        path="/user/acount"
        element={
          <Layout1>
            <LihatProfile />
          </Layout1>
        }
      />
      <Route
        path="/user/acount/editprofile"
        element={
          <Layout1>
            <EditProfile />
          </Layout1>
        }
      />
      <Route
        path="/pemilik/account"
        element={
          <Layout1>
            <ProfilPemilik />
          </Layout1>
        }
      />
      <Route
        path="/pemilik/account/edit"
        element={
          <Layout1>
            <EditPemilik />
          </Layout1>
        }
      />
      <Route
        path="/dashboardhunian"
        element={
          <Layout1>
            <DashboardHunian />
          </Layout1>
        }
      />
      <Route
        path="/sewakankos"
        element={
          <Layout1>
            <SewakanKos />
          </Layout1>
        }
      />
      <Route
        path="/umkm/account"
        element={
          <Layout1>
            <ProfileUMKM />
          </Layout1>
        }
      />
      <Route
        path="/umkm/account/edit"
        element={
          <Layout1>
            <EditUMKM />
          </Layout1>
        }
      />
      <Route
        path="/umkm/dashboardumkm"
        element={
          <Layout1>
            <DashboardUMKM />
          </Layout1>
        }
      />
      <Route
        path="/umkm/dashboard/edit"
        element={
          <Layout1>
            <DashboardUmkmEdit />
          </Layout1>
        }
      />
      <Route
        path="/umkm/registerproduk"
        element={
          <Layout1>
            <RegisterProduk />
          </Layout1>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/masuk/penyewa" element={<Tenant />} />
      <Route path="/masuk/pemilik" element={<PemilikHunian />} />
      <Route path="/register/pemilik" element={<DaftarPemilik />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
