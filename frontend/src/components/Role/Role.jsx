import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ReactLogo from '../../assets/logo.svg';
import penyewa from '../../assets/icons/penyewa.svg';
import pemilik from '../../assets/icons/pemilik.svg';
import umkm from '../../assets/icons/umkm.svg';

const Role = ({ onClose, isOpen }) => {
  return (
    <>
      <Modal onClose={onClose} size="lg" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton className="text-primary_70 border border-primary_70" />

          <ModalBody className=" rounded-lg">
            <div className="container mx-auto my-5 justify-center">
              <div className="flex flex-col items-center">
                <div className="mb-[18px]">
                  <Link to="/">
                    <img src={ReactLogo} alt="React Logo" />
                  </Link>
                </div>
                <div>
                  <h1 className="font-title text-center font-semibold text-2xl mb-2">
                    Masuk Ke Lapak Sentra
                  </h1>
                  <p className="mb-4 text-center text-md">
                    Saya Ingin Masuk Sebagai
                  </p>
                </div>
                <div className="mx-auto flex rounded-md card-testi border overflow-hidden mb-4">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="mt-2 mr-8 mb-2 ml-4 h-25 w-25 object-cover"
                      src={penyewa}
                      alt="Gambar"
                    />
                  </div>
                  <div>
                    <Link to="/masuk/penyewa">
                      <button className="mt-7 mr-6 rounded-md bg-indigo-700 text-white w-48 py-[10px] px-[17px]">
                        Penyewa
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mx-auto flex rounded-md card-testi border overflow-hidden mb-4">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="mt-2 mr-8 mb-2 ml-4 h-25 w-25 object-cover"
                      src={pemilik}
                      alt="Gambar"
                    />
                  </div>
                  <div>
                    <Link to="/masuk/hunian">
                      <button className="mt-7 mr-6 rounded-md bg-indigo-700 text-white w-48 py-[10px] px-[17px]">
                        Pemilik Hunian
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mx-auto flex rounded-md card-testi border overflow-hidden mb-4">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="mt-2 mr-8 mb-2 ml-4 h-25 w-25 object-cover"
                      src={umkm}
                      alt="Gambar"
                    />
                  </div>
                  <div>
                    <Link to="/masuk/umkm">
                      <button className="mt-7 mr-6 rounded-md bg-indigo-700 text-white w-48 py-[10px] px-[17px]">
                        Pemilik UMKM
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Role;
