import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import TentangKami from './pages/Tentang-kami/TentangKami';
import HubungiKami from './pages/Hubungi-kami/HubungiKami';
import FasilitasRumah from './pages/Fasilitas-rumah/FasilitasRumah';
import Hunian from './pages/Hunian/Hunian';
import Login from './pages/Login/Login';
import Tenant from './components/Tenant/Tenant';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hunian" element={<Hunian />} />
          <Route path="/fasilitas-rumah" element={<FasilitasRumah />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tenant" element={<Tenant />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
