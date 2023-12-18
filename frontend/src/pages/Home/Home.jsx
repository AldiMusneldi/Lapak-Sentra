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

function Home({ katagori, setKatagori }) {
  // const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.login.auth);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(menu);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      {auth ? (
        <div>
          <Navbar1 navigate={navigate} />
        </div>
      ) : (
        <div>
          <Navbar navigate={navigate} />
        </div>
      )}
      <Hero />
      <CardsFitur />
      <ContentHome katagori={katagori} setKatagori={setKatagori} />
      <Testimoni />
      <Footer navigate={navigate} />
    </div>
  );
}

export default Home;
