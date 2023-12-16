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


function Home({ katagori, setKatagori }) {
  const [auth,setAuth] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(menu);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/v1/me')
    .then(res=>{
      console.log(res.data);
      if(res.data.login === true){
        setAuth(true);
        setName(res.data.name);
      }else{
        setAuth(false);
        setMessage(res.data.message);
      }
    })
  },[]);

  return (
    <div>
      <Hero />
      {
        auth
        ?
        <div>
          <Navbar1 />
        </div>
      :
      <div>
        <Navbar navigate={navigate} />
      </div>
    }
      <CardsFitur />
      <ContentHome katagori={katagori} setKatagori={setKatagori} />
      <Testimoni />

      
    </div>
  );
}

export default Home;
