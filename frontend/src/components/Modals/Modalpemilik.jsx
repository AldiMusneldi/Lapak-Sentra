import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import pitak from '../../assets/gambar-testimoni/pitak.png';
import WA from '../../assets/icons/wa.svg';

const Modalpemilik = ({ onClose, isOpen }) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <div className="modals-img flex my-3 justify-center items-center">
            <div className="basis-[40%] rounded-[50%] overflow-hidden border-4 border-Neutral_10">
              <img src={pitak} alt="" />
            </div>
          </div>
          <ModalBody className="border">
            <div className="flex justify-center gap-3 items-center flex-col">
              <div className="nama-pengelola text-center ">
                <h1 className="font-semibold ">Nama Pengelola :</h1>
                <h2 className="text-2xl font-normal text-Neutral_30">Sepuh Aldi Tua</h2>
              </div>
              <div className="no-pengelola text-center">
                <h1 className="font-semibold ">No Telpon :</h1>
                <h2 className="text-2xl font-normal text-Neutral_30">+62851-5652-7939</h2>
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
