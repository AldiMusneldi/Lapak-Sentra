import React, { useEffect, useState } from 'react';
import CardSemua from '../../components/Cards/CardSemua';
import { useDispatch, useSelector } from 'react-redux';
import { lihatS } from '../../features/katagoriSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import menu from '../../components/Menu/Menu';
import { updateAuth } from '../../features/loginSlice';
import Navbar1 from '../../components/Navbar/Navbar1';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
function Lihatsemua() {
  const [nama, setNama] = useState([]);

  const [isActive, setisActive] = useState('1');
  function aktive(satu) {
    const angka = satu;
    setisActive(angka);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate(menu);
  const katagoris = useSelector((state) => state.Skatagori.lihatSemua);
  const auth = useSelector((state) => state.login.auth);
  useEffect(() => {
    api();
    login();
    dispatch(lihatS({ katagoriFilter: '' }));
  }, [dispatch]);

  const api = async () => {
    const response = await axios.get('http://localhost:8000/api/v1/kost');
    setNama(response);
  };
  const login = async () => {
    const response = await axios.get('http://localhost:8000/api/v1/me').then((res) => {
      console.log(res.data);
      if (res.data.login === true) {
        dispatch(updateAuth(response));
      } else {
        dispatch(updateAuth(false));
      }
    });
  };
  return (
    <>
      {auth ? (
        <div>
          <Navbar1 navigate={navigate} />
        </div>
      ) : (
        <div>
          <Navbar navigate={navigate} />
        </div>
      )}
      <section className="pt-[10rem] mb-[2rem]" id="lihatsemua">
        <div className="container mx-auto">
          <div className="content-title ">
            <div className="title basis-[50%] ">
              <h1 className="font-title text-4xl  text-primary_70 font-semibold">Pilih Kebutuhan Anda</h1>
              <div className="w-[15%] h-[6px] rounded-full bg-secondary_70 my-2"></div>
            </div>
            <div className="content-menu font-Poppins font-medium text-2xl mb-[1rem]">
              <div className=" ">
                <ul className="menu-cont border-b-2 border-Neutral_30 justify-between flex">
                  <li onClick={() => aktive('1')} className={`p-2 ${isActive === '1' ? 'border-b-4 border-primary_70 text-primary_70' : ''}`}>
                    <button onClick={() => dispatch(lihatS({ katagoris }))}>Semua Katagori</button>
                  </li>
                  <li onClick={() => aktive('2')} className={`p-2 ${isActive === '2' ? 'border-b-4 border-primary_70 text-primary_70' : ''}`}>
                    <button onClick={() => dispatch(lihatS({ katagoriFilter: 'kost' }))}>Kost</button>
                  </li>
                  <li onClick={() => aktive('3')} className={`p-2 ${isActive === '3' ? 'border-b-4 border-primary_70 text-primary_70' : ''}`}>
                    <button onClick={() => dispatch(lihatS({ katagoriFilter: 'kontrakan' }))}>Kontrakan</button>
                  </li>
                  <li onClick={() => aktive('4')} className={`p-2 ${isActive === '4' ? 'border-b-4 border-primary_70 text-primary_70' : ''}`}>
                    <button onClick={() => dispatch(lihatS({ katagoriFilter: 'fasilitas rumah' }))}>Fasilitas rumah</button>
                  </li>
                  <li className=" p-2">
                    <button onClick={() => lihatS()}>Kerjasama Mitra</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-card font-Poppins flex justify-center gap-4 flex-wrap">
              {katagoris.map((kost, index) => {
                return <CardSemua kost={kost} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Lihatsemua;
