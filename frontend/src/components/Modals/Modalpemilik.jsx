import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import pitak from '../../assets/gambar-testimoni/pitak.png';
import WA from '../../assets/icons/wa.svg';

const Modalpemilik = ({ onClose, isOpen }) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <div className="modals-img flex my-3 justify-center items-center">
            <div className="basis-[40%] rounded-[50%] overflow-hidden border-4 border-Neutral_10">
              <img src={pitak} alt="" />
            </div>
          </div>
          <ModalBody className="border">
            <div className="flex justify-center gap-3 items-center text-Neutral_70 flex-col">
              <div className="nama-pengelola text-center ">
                <h1 className="font-bold ">Nama Pengelola :</h1>
                <h2 className="text-2xl font-normal">Sepuh Aldi Tua</h2>
              </div>
              <div className="no-pengelola text-center">
                <h1 className="font-bold ">No Telpon :</h1>
                <h2 className="text-2xl font-normal">+62851-5652-7939</h2>
              </div>
              <div className="icon">
                <img src={WA} alt="" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="blue">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modalpemilik;
