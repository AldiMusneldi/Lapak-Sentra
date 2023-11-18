import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
