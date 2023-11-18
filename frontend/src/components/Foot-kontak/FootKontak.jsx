import React from 'react';
import iconPone from '../../assets/icons/Phone.svg';
import iconMail from '../../assets/icons/Mail.svg';
import iconFB from '../../assets/icons/facebook.svg';
import iconIg from '../../assets/icons/instagram.svg';
import iconTw from '../../assets/icons/Twitter.svg';
import { Link } from 'react-router-dom';

const FootKontak = () => {
  return (
    <>
      <div className="foot-kontak  basis-[25%]  flex justify-end">
        <div className=" basis-[80%]">
          <div className="foot-title py-2 mb-[1rem] ">
            <h2 className=" font-bold text-2xl mb-2">Kontak</h2>
            <div className="w-[20%] bg-primary_70 h-1"></div>
          </div>
          <div className="nav-link">
            <ul className="text-sm">
              <li className="mb-[1rem]">
                <Link to="">
                  <div className="flex ">
                    <span>
                      <img src={iconMail} alt="" />
                    </span>
                    <span className="mx-2">lapaksentra@gmail.com</span>
                  </div>
                </Link>
              </li>
              <li className="mb-[1rem]">
                <Link to="">
                  <div className="flex ">
                    <span>
                      <img src={iconPone} alt="" />
                    </span>
                    <span className="mx-2">+62851-5652-7939</span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="foot-sosmed flex  w-[60%] justify-between">
              <span className="w-10 ">
                <img src={iconFB} alt="" className="w-[100%]" />
              </span>
              <span className="w-10 ">
                <img src={iconIg} alt="" className="w-[100%]" />
              </span>
              <span className="w-10 ">
                <img src={iconTw} alt="" className="w-[100%]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FootKontak;
