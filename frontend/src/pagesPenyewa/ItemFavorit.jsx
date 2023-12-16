import React, { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import Modalpemilik from '../components/Modals/Modalpemilik';
import CardsFavorit from '../components/Cards/CardsFavorit';
import { useDispatch, useSelector } from 'react-redux';
import { filterFavorit } from '../features/katagoriSlice';
import { filterFavoritF } from '../features/katagoriSlice';
import CardProfile1 from '../components/Users/Card-profile/CardProfile1';
import Sidebar from '../components/Users/Sidebar/Sidebar';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react';
import CardsFavoritF from '../components/Cards/CardsFavoritF';

const ItemFavorit = () => {
  const dispatch = useDispatch();
  // ambil data dari Slice
  const favorit = useSelector((state) => state.Skatagori.filterFavorit);
  useEffect(() => {
    dispatch(filterFavorit(true));
  }, [dispatch]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const favoritF = useSelector((state) => state.Skatagori.filterFavoritF);
  useEffect(() => {
    dispatch(filterFavoritF(true));
  }, [dispatch]);

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
            <div className="border border-gray-300 mt-3 rounded-md">
              <div className="mb-3">
                <Tabs position="relative" variant="unstyled">
                  <div className="flex font-semibold">
                    <TabList className="w-full px-40">
                      <Tab style={{ fontSize: "26px" }} className="w-72">
                        Hunian
                      </Tab>
                      <Tab style={{ fontSize: "26px" }} className="w-72">
                        Fasilitas Rumah
                      </Tab>
                    </TabList>
                  </div>
                  <TabIndicator
                    mt="-1.5px"
                    height="5px"
                    bg="#695cff"
                    borderRadius="5px"
                    style={{ width: "100px" }}
                  />
                  <div className="flex justify-center">
                    <hr
                      style={{
                        borderTop: "1px solid grey",
                        display: "block",
                        width: "60%",
                      }}
                    />
                  </div>
                  <TabPanels>
                    <TabPanel>
                      <div className="mt-3 mb-3 ml-3 mr-3 flex justify-center ">
                        <div className="basis-[90%] flex flex-col gap-3">
                          {/* card nya */}
                          {favorit.map((favor, index) => {
                            return (
                              <CardsFavorit
                                favor={favor}
                                key={index}
                                onOpen={onOpen}
                              />
                            );
                          })}
                          <Modalpemilik onClose={onClose} isOpen={isOpen} />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="mt-3 mb-3 ml-3 mr-3 flex justify-center ">
                        <div className="basis-[90%] flex flex-col gap-3">
                          {/* card nya */}
                          {favoritF.map((favor, index) => {
                            return (
                              <CardsFavoritF
                                favor={favor}
                                key={index}
                                onOpen={onOpen}
                              />
                            );
                          })}
                          <Modalpemilik onClose={onClose} isOpen={isOpen} />
                        </div>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemFavorit;
