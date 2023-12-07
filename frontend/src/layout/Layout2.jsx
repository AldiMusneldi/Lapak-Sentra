import React from 'react';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../components/Navbar/Navbar2';
import menu from '../components/Menu/Menu';

const Layout2 = (props) => {
    const navigate = useNavigate(menu);
    return (
      <>
        {/* <Navbar1 /> */}
        <Navbar2 navigate={navigate} />
        <main>{props.children}</main>
        <Footer navigate={navigate} />
      </>
    );
};

export default Layout2;