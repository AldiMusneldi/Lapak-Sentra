import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import menu from '../components/Menu/Menu';
import { useNavigate } from 'react-router-dom';
// import Navbar1 from '../components/Navbar/Navbar1';

const Layout = (props) => {
  const navigate = useNavigate(menu);
  return (
    <>
      {/* <Navbar1 /> */}
      <Navbar navigate={navigate} />
      <main>{props.children}</main>
      <Footer navigate={navigate} />
    </>
  );
};

export default Layout;
