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
import Tenant from './components/Tenant/Tenant';
import Register from './components/Tenant/Register';
// import SemuaData from './data/SemuaData';
import DetailKos from './pages/Detail-kos/DetailKos';
import Layout1 from './layout/Layout1';
import KosSaya from './pagesPenyewa/KosSaya';
import LihatProfile from './pagesPenyewa/LihatProfil';
import DetailFasilitas from './pages/Detail-fasilitas/DetailFasilitas';

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
        path="/hunian"
        element={
          <Layout>
            <Hunian />
          </Layout>
        }
      />
      <Route
        path="/fasilitas-rumah"
        element={
          <Layout>
            <FasilitasRumah />
          </Layout>
        }
      />
      <Route
        path="/tentang-kami"
        element={
          <Layout>
            <TentangKami />
          </Layout>
        }
      />
      <Route
        path="/hubungi-kami"
        element={
          <Layout>
            <HubungiKami />
          </Layout>
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
          <Layout>
            <DetailKos />
          </Layout>
        }
      />
      <Route
        path="/detailfasilitas"
        element={
          <Layout>
            <DetailFasilitas />
          </Layout>
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
        path="/user/acount"
        element={
          <Layout1>
            <LihatProfile />
          </Layout1>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/masuk/penyewa" element={<Tenant />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
