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
import SemuaData from './data/SemuaData';

function App() {
  const [katagori, setKatagori] = useState(SemDat);
  const [katagoris, setKatagoris] = useState(SemuaData);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home katagori={katagori} setKatagori={setKatagori} />{' '}
          </Layout>
        }
      />
      <Route
        path="/hunian"
        element={
          <Layout>
            <Hunian katagoris={katagoris} />
          </Layout>
        }
      />
      <Route
        path="/fasilitas-rumah"
        element={
          <Layout>
            <FasilitasRumah katagoris={katagoris} setKatagoris={setKatagoris} />
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
          <Layout>
            <Lihatsemua katagoris={katagoris} setKatagoris={setKatagoris} />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/tenant" element={<Tenant />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
