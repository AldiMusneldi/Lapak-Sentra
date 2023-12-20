import React, { useEffect, useState } from 'react';
import CardSemua from '../../components/Cards/CardSemua';
import { useDispatch, useSelector } from 'react-redux';
import { getHunian, lihatS, updateHunian } from '../../features/katagoriSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import menu from '../../components/Menu/Menu';
import { updateAuth } from '../../features/loginSlice';
import Navbar1 from '../../components/Navbar/Navbar1';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
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
  const datahunian = useSelector((state) => state.Skatagori.dataHunian);
  console.log(datahunian.pagination);
  const auth = useSelector((state) => state.login.auth);
  useEffect(() => {
    dispatch(getHunian());
    api();
    login();
    dispatch(lihatS({ katagoriFilter: '' }));
  }, [dispatch]);

  const api = async () => {
    const response = await axios.get('http://localhost:8000/api/v1/kost?page=2&limit=8');
    setNama(response.data);
  };
  const login = async () => {
    await axios.get('http://localhost:8000/api/v1/me').then((res) => {
      if (res.data.login === true) {
        dispatch(updateAuth(true));
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
                <ul className="menu-cont justify-between flex">
                  <Tabs width="100%">
                    <TabList justifyContent="space-between">
                      <Tab _selected={{ color: '#695cff' }}>
                        <button className="text-2xl" onClick={() => dispatch(lihatS({ katagoris }))}>
                          Semua Katagori
                        </button>
                      </Tab>
                      <Tab _selected={{ color: '#695cff' }}>
                        <button className="text-2xl" onClick={() => dispatch(lihatS({ katagoriFilter: 'kost' }))}>
                          Kost
                        </button>
                      </Tab>
                      <Tab _selected={{ color: '#695cff' }}>
                        <button className="text-2xl" onClick={() => dispatch(lihatS({ katagoriFilter: 'kontrakan' }))}>
                          Kontrakan
                        </button>
                      </Tab>
                      <Tab _selected={{ color: '#695cff' }}>
                        <button className="text-2xl" onClick={() => dispatch(lihatS({ katagoriFilter: 'fasilitas rumah' }))}>
                          Fasilitas rumah
                        </button>
                      </Tab>
                      <Tab _selected={{ color: '#695cff' }}>
                        <button className="text-2xl" onClick={() => lihatS()}>
                          Kerjasama Mitra
                        </button>
                      </Tab>
                    </TabList>
                    <TabIndicator mt="-1.5px" height="3px" bg="#695cff" borderRadius="1px" />
                  </Tabs>
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
