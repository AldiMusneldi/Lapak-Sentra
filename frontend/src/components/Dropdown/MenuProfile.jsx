import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Profile from '../../assets/gambar-testimoni/rfiq.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MenuProfile = () => {
  const navigate = useNavigate();

  const page = (path) => {
    navigate(path);
  };

  const handleLogout = ()=>{
    axios.get('http://localhost:8000/api/v1/logout')
    .then(res => {
      if(res.data.Status === "Success"){
        location.reload(true);
      }else{
        alert("error");
      }
    }).catch(err=>console.log(err));
  }
  return (
    <Menu>
      <MenuButton>
        <div className="rounded-[50%] overflow-hidden border-2 border-Neutral_70">
          <img src={Profile} alt="" className="w-[100%]" />
        </div>
      </MenuButton>
      <MenuList>
        <Link to="/user/account" onClick={() => page('/user/account')}>
          <MenuItem _hover={{ bg: '#695CFF', textColor: '#EFEFEF' }}>
            <li className="font-medium list-none">Profile</li>
          </MenuItem>
        </Link>
        <Link to="/" onClick={handleLogout}>
          <MenuItem _hover={{ bg: '#695CFF', textColor: '#EFEFEF' }}>
            <li className="font-medium list-none">Keluar</li>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default MenuProfile;
