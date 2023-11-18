import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import TentangKami from './pages/Tentang-kami/TentangKami';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hunian" element={<Home />} />
          <Route path="/fasilitas-rumah" element={<Home />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/hubungi-kami" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
