import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import CardsFitur from '../../components/Cards-fitur/CardsFitur';
import ContentHome from '../../components/Content-home/ContentHome';
import Testimoni from '../../components/Testimoni/Testimoni';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import menu from '../../components/Menu/Menu';
import Navbar1 from '../../components/Navbar/Navbar1';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuth } from '../../features/loginSlice';
import Footer from '../../components/Footer/Footer';
import { addTocart, getProdusctFasilitas, updateNotif } from '../../features/keranjangSlice';

function Home({ katagori, setKatagori }) {
  // const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.login.auth);
  const open = useSelector((state) => state.products.notif);
  const { products, cart } = useSelector((state) => state.products);
  console.log(products.pagination);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(menu);
  const HandleOpen = () => updateNotif(!open);
  const addtocart = (id) => dispatch(addTocart(id));
  useEffect(() => {
    dispatch(getProdusctFasilitas());
    axios.get('http://localhost:8000/api/v1/me').then((res) => {
      console.log(res.data);
      if (res.data.login === true) {
        dispatch(updateAuth(true));
        setName(res.data.name);
        setMessage(res.data.message);
      } else {
        dispatch(updateAuth(false));
        setMessage(res.data.message);
      }
    });
    // console.log(adds);
  }, []);

  return (
    <div>
      {auth ? (
        <div>
          <Navbar1 navigate={navigate} cartCount={cart} HandleOpen={HandleOpen} />
        </div>
      ) : (
        <div>
          <Navbar navigate={navigate} />
        </div>
      )}
      <Hero />
      <CardsFitur />
      <ContentHome katagori={katagori} products={products} addtocart={cart} setKatagori={setKatagori} />
      <Testimoni />
      <Footer navigate={navigate} />
    </div>
  );
}

export default Home;
