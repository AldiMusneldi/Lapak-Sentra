import React from 'react';
import { Link } from 'react-router-dom';
import { BsShop } from "react-icons/bs";
import { FaBoxOpen } from 'react-icons/fa';
import { CiShoppingTag } from 'react-icons/ci';
import { RiLogoutBoxLine } from 'react-icons/ri';

const SidebarU = () => {
  const iconSize = 40;

  return (
    <>
      <div className="flex container">
        <div className="flex flex-col relative mb-4">
          <div className="mt-6 w-[400px]">
            <Link to="/umkm/dashboardumkm">
              <button className="flex items-center">
                <BsShop size={iconSize} />
                <p className="pl-3">Dashboard Pemilik UMKM</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/umkm/registerproduk">
              <button className="mt-4 flex items-center">
                <FaBoxOpen size={iconSize} />
                <p className="pl-3">Daftarkan Produk</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/umkm/promosi">
              <button className="mt-4 flex items-center">
                <CiShoppingTag size={iconSize} />
                <p className="pl-3">Fitur Promosi</p>
              </button>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
            <Link to="/">
              <div className="mt-4 flex items-center">
                <RiLogoutBoxLine size={iconSize} />
                <p className="pl-3">Keluar</p>
              </div>
            </Link>
            <hr
              className="mt-2"
              style={{
                borderTop: "1px solid grey",
                display: "block",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarU;
