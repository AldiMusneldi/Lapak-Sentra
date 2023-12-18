import React, { useEffect } from 'react';
import FasilitasJ from '../../components/Dropdown/FasilitasJ';
import FasilitasH from '../../components/Dropdown/FasilitasH';
import CardSemua from '../../components/Cards/CardSemua';
import { useDispatch, useSelector } from 'react-redux';
import { filteredF } from '../../features/katagoriSlice';
import { useNavigate } from 'react-router-dom';
import menu from '../../components/Menu/Menu';
import axios from 'axios';
import Navbar1 from '../../components/Navbar/Navbar1';
import Navbar from '../../components/Navbar/Navbar';
import { updateAuth } from '../../features/loginSlice';
import Footer from '../../components/Footer/Footer';

function FasilitasRumah() {
  const dispatch = useDispatch();
  const katagoris = useSelector((state) => state.Skatagori.filteredDataF);
  const auth = useSelector((state) => state.login.auth);
  const navigate = useNavigate(menu);
  useEffect(() => {
    dispatch(filteredF('fasilitas rumah'));
    axios.get('http://localhost:8000/api/v1/me').then((res) => {
      console.log(res.data);
      if (res.data.login === true) {
        dispatch(updateAuth(true));
      } else {
        dispatch(updateAuth(false));
      }
    });
  }, [dispatch]);

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
      <section className="pt-[10rem] mb-[2rem] font-worksans" id="fasilitasrumah">
        <div className="container mx-auto">
          <div className="filter mx-auto w-[90%]">
            <form action="" className="flex justify-center gap-20">
              <FasilitasJ />
              <FasilitasH />
              <div className="w-[40%] ">
                <div className="filter-jenis font-medium relative">
                  <div className="label">
                    <label className="text-lg">Rentan Harga</label>
                  </div>
                  <div className="input text-primary_70 h-50 w-[100%] absolute flex items-center gap-3">
                    <input type="text" className="p-2 border border-primary_70 rounded bg-slate-50 w-full" placeholder="0" />
                    <div className="w-5 h-[2px] bg-primary_70"></div>
                    <input type="text" className="p-2 border border-primary_70 rounded bg-slate-50 w-full" placeholder="2000.000" />
                    <div className="p-2 rounded bg-primary_70 text-Neutral_10 w-[60%] cursor-pointer">
                      <h2 className="font-semibold text-center uppercase">SET</h2>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="pt-[5rem] content-card font-Poppins flex justify-center gap-4 flex-wrap">
            {katagoris.map((kost, index) => {
              return <CardSemua kost={kost} key={index} />;
            })}
          </div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </>
  );
}
export default FasilitasRumah;
