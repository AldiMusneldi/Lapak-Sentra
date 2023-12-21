import React, { useEffect } from 'react';
import styled from 'styled-components';
import AnimateContact from '../../assets/animasi/animasi-contact.svg';
import BgHubungikami from '../../assets/animasi/bg-hubungikami.svg';
import iconPone from '../../assets/icons/Phone.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateAuth } from '../../features/loginSlice';
import Navbar from '../../components/Navbar/Navbar';
import Navbar1 from '../../components/Navbar/Navbar1';
import Footer from '../../components/Footer/Footer';
import menu from '../../components/Menu/Menu';

function HubungiKami() {
  const BgHubungi = styled.div`
    position: relative;
    background: url(${BgHubungikami}) center/cover no-repeat;
    height: 300px;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 300px;
      background-color: rgba(105, 92, 255, 0.4);
      z-index: -2;
    }

    h1 {
      position: relative;
      z-index: 1;
      font-size: 50px;
    }
  `;
  const navigate = useNavigate(menu);
  const auth = useSelector((state) => state.login.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/me').then((res) => {
      if (res.data.login === true) {
        dispatch(updateAuth(true));
      } else {
        dispatch(updateAuth(false));
      }
    });
  });
  return (
    <>
      {/* validasi sudah login */}
      {auth ? (
        <div>
          <Navbar1 navigate={navigate} />
        </div>
      ) : (
        <div>
          <Navbar navigate={navigate} />
        </div>
      )}
      <section className="pt-[6rem]" id="hubungi-kami">
        <BgHubungi>
          <h1 className="text-center py-24 font-title text-white font-semibold">Hubungi Kami</h1>
        </BgHubungi>
        <div className="flex">
          <form action="">
            <div className="w-cols p-6 my-8 ml-36 flex flex-col rounded-md mb-20">
              <div>
                <h1 className="font-bold text-2xl pb-6">Kirim Pesan Anda</h1>
                <label for="username" className="block text-base mb-2">
                  Nama :
                </label>
                <input type="text" id="username" className="h-10 pl-4 border w-[30rem] border-black rounded-md" placeholder="Masukkan Nama Anda" />
              </div>
              <div className="mt-3">
                <label for="handphone" className="block text-base mb-2">
                  Email :
                </label>
                <input type="text" id="handphone" className="h-10 pl-4 border w-[30rem] border-black rounded-md" placeholder="Masukkan Email Anda" />
              </div>
              <div className="mt-3">
                <label for="email" className="block text-base mb-2">
                  Pesan :
                </label>
                <textarea type="text" id="email" className="h-40 pl-4 py-2 border w-[30rem] border-black rounded-md" placeholder="Masukkan Pesan Anda" />
              </div>
              <div className="mt-3">
                <button className="w-28  py-2 text-white rounded-xl bg-primary_70">Kirim</button>
              </div>
            </div>
          </form>
          <div className="pl-40">
            <div className="my-16 pl-16">
              <div className="pl-24">
                <h1 className="font-bold text-2xl pb-6">Info Kontak</h1>
                <div className="flex my-3 ">
                  <img src={iconPone} />
                  <Link to="">
                    <h1 className="pl-3 hover:text-primary_70 text-Neutral_70">+62851-5652-7939</h1>
                  </Link>
                </div>
                <div className="group">
                  <div className="flex group-hover:text-primary_70 text-Neutral_70">
                    <div>
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                    <Link to="">
                      <button className="pl-3">Lapaksentra@gmail.com</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="my-16">
                <img src={AnimateContact} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </>
  );
}

export default HubungiKami;
