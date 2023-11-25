import React from 'react';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../components/Navbar/Navbar1';
import menu from '../components/Menu/Menu';

const Layout1 = (props) => {
  const navigate = useNavigate(menu);
  return (
    <>
      {/* <Navbar1 /> */}
      <Navbar1 navigate={navigate} />
      <main>{props.children}</main>
      <Footer navigate={navigate} />
    </>
  );
};

export default Layout1;
