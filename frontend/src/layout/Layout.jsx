import React from 'react';
import Footer from '../components/Footer/Footer';
import menu from '../components/Menu/Menu';
import { useNavigate } from 'react-router-dom';
// import Navbar1 from '../components/Navbar/Navbar1';

const Layout = (props) => {
  const navigate = useNavigate(menu);
  return (
    <>
      <Layout navigate={navigate} />
      <main>{props.children}</main>
      <Footer navigate={navigate} />
    </>
  );
};

export default Layout;
