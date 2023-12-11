import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Profile from '../../assets/gambar-testimoni/rfiq.png';
import { Link, useNavigate } from 'react-router-dom';

const MenuProfile = () => {
  const navigate = useNavigate();

  const page = (path) => {
    navigate(path);
  };

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
        <Link to="/" onClick={() => navigate('/')}>
          <MenuItem _hover={{ bg: '#695CFF', textColor: '#EFEFEF' }}>
            <li className="font-medium list-none">Keluar</li>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default MenuProfile;
