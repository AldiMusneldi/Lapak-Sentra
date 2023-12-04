import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../assets/gambar-testimoni/aldi.svg';
import home from '../assets/icons/home.svg';
import love from '../assets/icons/love.svg';
import transaction from '../assets/icons/refresh.svg';
import exit from '../assets/icons/exit.svg';
import { useDisclosure } from '@chakra-ui/react';
import Modalpemilik from '../components/Modals/Modalpemilik';
import CardsFavorit from '../components/Cards/CardsFavorit';
import { useDispatch, useSelector } from 'react-redux';
import { filterFavorit } from '../features/katagoriSlice';
const ItemFavorit = () => {
  const dispatch = useDispatch();
  const favorit = useSelector((state) => state.Skatagori.filterFavorit);
  useEffect(() => {
    dispatch(filterFavorit(true));
  }, [dispatch]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  function updateAnimationPosition(element) {
    const width = element.offsetWidth;
    const left = element.offsetLeft;

    const animation = document.querySelector('.animation');
    animation.style.width = `${width}px`;
    animation.style.left = `${left}px`;
  }

  const Choice = styled.div`
    nav {
      position: relative;
      border-radius: 8px;
      font-size: 0;
    }
    a {
      font-size: 24px;
      text-decoration: none;
      line-height: 50px;
      position: relative;
      z-index: 1;
      display: inline-block;
      text-align: center;
    }
    .animation {
      position: absolute;
      height: 5px;
      width: 300px;
      bottom: 0;
      z-index: 0;
      background: #695cff;
      border-radius: 8px;
      transition: all 0.5s ease 0s;
    }
    a:nth-child(1) {
      width: 300px;
    }
    a:nth-child(2) {
      width: 250px;
    }
  `;

  return (
    <>
      <div className="pl-12 items-center flex">
        <div className="flex flex-col relative mb-[275px]">
          <div className="bg-primary_70 w-[400px] h-[150px] rounded-t-xl flex justify-center items-center">
            <img src={profile} className="mt-12 rounded-full w-[150px] h-[150px] absolute" />
          </div>
          <div className="bg-white shadow-xl w-[400px] h-[150px] rounded-b-xl flex justify-center items-center">
            <div>
              <h1 className="text-2xl font-bold pt-4">Aldi Musneldi</h1>
              <Link to="/user/acount">
                <button className="ml-4 px-4 py-2 bg-primary_70 text-white rounded">Lihat Profile</button>
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/kossaya">
              <button className="flex items-center">
                <img src={home} />
                <p className="pl-3">Kos/Kontrakan Saya</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: '1px solid grey',
                display: 'block',
                width: '100%',
              }}
            />
            <Link to="/itemfavorit">
              <button className="mt-4 flex items-center">
                <img src={love} />
                <p className="pl-3">Item Favorit</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: '1px solid grey',
                display: 'block',
                width: '100%',
              }}
            />
            <Link to="/riwayat">
              <button className="mt-4 flex items-center">
                <img src={transaction} />
                <p className="pl-3">Riwayat Transaksi</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: '1px solid grey',
                display: 'block',
                width: '100%',
              }}
            />
            <div className="mt-4 flex items-center">
              <img src={exit} className="w-[35px]" />
              <p className="pl-3">Keluar</p>
            </div>
            <hr
              className="mt-2"
              style={{
                borderTop: '1px solid grey',
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        </div>
        <div className="mt-24 basis-[50%]">
          <div className="ml-4 bg-primary_70 rounded-md w-[900px] h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">Daftar Favorit Saya</p>
          </div>
          <div className="mb-6 ml-4 mt-3 rounded-lg shadow-xl border border-gray-500">
            <div className="ml-4 mt-3 flex justify-center items-center">
              <Choice>
                <nav>
                  <a href="#" onClick={(e) => updateAnimationPosition(e.target)}>
                    Hunian
                  </a>
                  <a href="#" onClick={(e) => updateAnimationPosition(e.target)}>
                    Fasilitas Rumah
                  </a>
                  <div className="animation start-home"></div>
                </nav>
                <hr
                  style={{
                    borderTop: '1px solid grey',
                    display: 'block',
                    width: '100%',
                  }}
                />
              </Choice>
            </div>
            <div className="mt-3 mb-3 ml-3 mr-3 flex justify-center ">
              <div className="basis-[90%] flex flex-col gap-3">
                {/* card nya */}
                {favorit.map((favor, index) => {
                  return <CardsFavorit favor={favor} key={index} onOpen={onOpen} />;
                })}
                <Modalpemilik onClose={onClose} isOpen={isOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemFavorit;
