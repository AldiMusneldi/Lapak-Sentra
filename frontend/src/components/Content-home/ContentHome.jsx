import RowRight from '../../assets/icons/row_Right.svg';
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import Cards from '../Cards/Cards';
import SemDat from '../../data/DataBaru';
import { Link, NavLink } from 'react-router-dom';

const ContentHome = ({ katagori, setKatagori, products, addtocart }) => {
  // console.log(products);
  function filtered(KatagoriFilter) {
    const filteredData = KatagoriFilter ? SemDat.filter((kat) => kat.katagori === KatagoriFilter) : SemDat;
    setKatagori(filteredData);
  }

  return (
    <>
      <section className="p-[2rem] my-[2rem] bg-slate-50" id="content">
        <div className="container mx-auto my-[2rem]">
          <div className="content-title ">
            <div className="title basis-[50%] ">
              <h1 className="font-title text-4xl  text-primary_70 font-semibold">Pilih Kebutuhan Anda</h1>
              <div className="w-[15%] h-[6px] rounded-full bg-secondary_70 my-2"></div>
            </div>
          </div>
          <div className="lihat-semua flex justify-end">
            <Link to="/lihat-semua">
              <div className="justify-end flex items-center bg-primary_70 p-2 text-Neutral_10 font-medium rounded-md">
                <span className=" p-1">
                  <h1>Lihat semua</h1>
                </span>
                <span className=" mt-1 ">
                  <img src={RowRight} alt="" />
                </span>
              </div>
            </Link>
          </div>
          <div className="content-menu font-Poppins font-medium text-2xl mb-[1rem]">
            <div className=" ">
              <ul className="menu-cont justify-between flex">
                <Tabs width="100%">
                  <TabList justifyContent="space-between">
                    <Tab _selected={{ color: '#695cff' }}>
                      <button className="text-2xl" onClick={() => filtered()}>
                        Semua Katagori
                      </button>
                    </Tab>
                    <Tab _selected={{ color: '#695cff' }}>
                      <NavLink className="text-2xl" onClick={() => filtered('kost')}>
                        Kost
                      </NavLink>
                    </Tab>
                    <Tab _selected={{ color: '#695cff' }}>
                      <NavLink className="text-2xl" onClick={() => filtered('kontrakan')}>
                        Kontrakan
                      </NavLink>
                    </Tab>
                    <Tab _selected={{ color: '#695cff' }}>
                      <NavLink className="text-2xl" onClick={() => filtered('fasilitas rumah')}>
                        Fasilitas rumah
                      </NavLink>
                    </Tab>
                    <Tab _selected={{ color: '#695cff' }}>
                      <NavLink className="text-2xl" onClick={() => filtered()}>
                        Kerjasama Mitra
                      </NavLink>
                    </Tab>
                  </TabList>
                  <TabIndicator mt="-1.5px" height="3px" bg="#695cff" borderRadius="1px" />
                </Tabs>
              </ul>
            </div>
          </div>
          <div className="content-card font-Poppins flex justify-center gap-4 flex-wrap">
            {katagori.map((kost, index) => {
              return <Cards key={index} kost={kost} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentHome;
