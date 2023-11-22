import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import Navbar1 from '../components/Navbar/Navbar1';

const Layout = (props) => {
  return (
    <>
      {/* <Navbar1 /> */}
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
