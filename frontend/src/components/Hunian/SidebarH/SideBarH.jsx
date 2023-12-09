import React from 'react';
import { Link } from 'react-router-dom';
import { PiHouseLineLight } from 'react-icons/pi';
import { MdOutlineBed } from "react-icons/md";
import { CiShoppingTag } from 'react-icons/ci';
import { RiLogoutBoxLine } from 'react-icons/ri';

const SideBarH = () => {
    const iconSize = 40;
  return (
    <>
      <div className="flex container">
        <div className="flex flex-col relative mb-4">
          <div className="mt-6 w-[400px]">
            <Link to="/hunian/dashboardhunian">
              <button className="flex items-center">
                <PiHouseLineLight size={iconSize} />
                <p className="pl-3">Dashboard Pemilik Hunian</p>
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
            <Link to="/hunian/registerhunian">
              <button className="mt-4 flex items-center">
              <MdOutlineBed size={iconSize}/>
                <p className="pl-3">Sewakan Kos/Kontrakan</p>
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
            <Link to="/hunian/promosi">
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

export default SideBarH;