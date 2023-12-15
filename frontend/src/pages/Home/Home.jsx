import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import CardsFitur from '../../components/Cards-fitur/CardsFitur';
import ContentHome from '../../components/Content-home/ContentHome';
import Testimoni from '../../components/Testimoni/Testimoni';
import axios from 'axios';

function Home({ katagori, setKatagori }) {
  const [auth,setAuth] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
 
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

  const handleLogout = ()=>{
    axios.get('http://localhost:8000/api/v1/logout')
    .then(res => {
      if(res.data.Status === "Success"){
        location.reload(true);
      }else{
        alert("error");
      }
    }).catch(err=>console.log(err));
  }
  return (
    <div>
  
      <Hero />
      {
        auth
        ?
        <div>
          <p>{name}</p>
          <button className='font-semibold text-primary_70' onClick={handleLogout}>Logout</button>
        </div>
      :
      <div>Di Kasih Navbar Yang Gk login</div>
    }
      <CardsFitur />
      <ContentHome katagori={katagori} setKatagori={setKatagori} />
      <Testimoni />

      
    </div>
  );
}

export default Home;
