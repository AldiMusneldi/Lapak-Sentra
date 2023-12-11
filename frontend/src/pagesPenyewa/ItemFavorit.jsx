import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDisclosure } from '@chakra-ui/react';
import Modalpemilik from '../components/Modals/Modalpemilik';
import CardsFavorit from '../components/Cards/CardsFavorit';
import { useDispatch, useSelector } from 'react-redux';
import { filterFavorit } from '../features/katagoriSlice';
import CardProfile1 from '../components/Users/Card-profile/CardProfile1';
import Sidebar from '../components/Users/Sidebar/Sidebar';
const ItemFavorit = () => {
  const dispatch = useDispatch();
  // ambil data dari Slice
  const favorit = useSelector((state) => state.Skatagori.filterFavorit);
  useEffect(() => {
    dispatch(filterFavorit(true));
  }, [dispatch]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  function updateAnimationPosition(element) {
    const width = element.offsetWidth;
    const left = element.offsetLeft;

    const animation = document.querySelector(".animation");
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
      <div className="flex container ml-24">
        <div>
          <CardProfile1 />
          <Sidebar />
        </div>
        <div className="pl-6 container relative mt-24">
          <div className="bg-primary_70 w-full rounded-md h-[60px] flex justify-center items-center">
            <p className="text-[30px] text-white text font-bold">
              Daftar Favorit Saya
            </p>
          </div>
          <div className="mb-6 mt-3 rounded-lg shadow-xl">
            <div className="ml-4 mt-3 flex justify-center items-center">
              <Choice>
                <nav>
                  <a
                    href="#"
                    onClick={(e) => updateAnimationPosition(e.target)}
                  >
                    Hunian
                  </a>
                  <a
                    href="#"
                    onClick={(e) => updateAnimationPosition(e.target)}
                  >
                    Fasilitas Rumah
                  </a>
                  <div className="animation start-home"></div>
                </nav>
                <hr
                  style={{
                    borderTop: "1px solid grey",
                    display: "block",
                    width: "100%",
                  }}
                />
              </Choice>
            </div>
            <div className="mt-3 mb-3 ml-3 mr-3 flex justify-center ">
              <div className="basis-[90%] flex flex-col gap-3">
                {/* card nya */}
                {favorit.map((favor, index) => {
                  return (
                    <CardsFavorit favor={favor} key={index} onOpen={onOpen} />
                  );
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
