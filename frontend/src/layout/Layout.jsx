import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
