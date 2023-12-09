import React from "react";
import { Link } from 'react-router-dom';
import { PiHouseLineLight } from 'react-icons/pi';
import { LuHeart } from "react-icons/lu";
import { TbShoppingBag } from "react-icons/tb";
import { RiLogoutBoxLine } from 'react-icons/ri';

function Sidebar() {
  const iconSize = 40;

  return (
    <>
      <div className="flex container">
        <div className="flex flex-col relative mb-4">
          <div className="mt-6 w-[400px]">
            <Link to="/user/kos">
              <button className="flex items-center">
                <PiHouseLineLight size={iconSize} />
                <p className="pl-3">Kos/Kontrakan Saya</p>
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
            <Link to="/user/item">
              <button className="mt-4 flex items-center">
                <LuHeart size={iconSize} />
                <p className="pl-3">Item Favorite</p>
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
            <Link to="/user/pesanan">
              <button className="mt-4 flex items-center">
                <TbShoppingBag size={iconSize} />
                <p className="pl-3">Pesanan Saya</p>
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
}

export default Sidebar;
